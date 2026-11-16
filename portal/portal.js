// Client portal page: password gate, then the outreach report.
// A client page calls start({ client, keysUrl, dataUrls }) — see hoplite/index.html.
import { b64, unb64, unlockKey, decryptData } from './crypto.js';

const REFRESH_MS = 5 * 60 * 1000;
const $ = s => document.querySelector(s);

function el(tag, attrs, kids) {
  const e = document.createElement(tag);
  if (attrs) for (const k in attrs) {
    if (k === 'text') e.textContent = attrs[k];
    else if (k === 'cls') e.className = attrs[k];
    else e.setAttribute(k, attrs[k]);
  }
  (kids || []).forEach(c => c && e.appendChild(c));
  return e;
}
const store = {
  get(k) { try { return sessionStorage.getItem(k) || localStorage.getItem(k); } catch { return null; } },
  set(k, v, remember) { try { sessionStorage.setItem(k, v); if (remember) localStorage.setItem(k, v); } catch {} },
  clear(k) { try { sessionStorage.removeItem(k); localStorage.removeItem(k); } catch {} },
};

export function start(cfg) {
  const storeKey = 'b2-portal-' + cfg.slug;
  let keys = null, pkcs8 = null, D = null, timer = null;

  async function fetchJson(url) {
    const r = await fetch(url, { cache: 'no-store' });
    if (!r.ok) throw new Error(url + ' ' + r.status);
    return r.json();
  }
  // First data URL that answers wins; the rest are fallbacks.
  async function fetchEnvelope() {
    let last;
    for (const url of cfg.dataUrls) {
      try { return await fetchJson(url); } catch (e) { last = e; }
    }
    throw last;
  }
  async function loadData() {
    D = await decryptData(pkcs8, await fetchEnvelope());
    report.render(D);
  }

  function showGate(msg) {
    $('#gate').hidden = false; $('#report').hidden = true; $('#signout').hidden = true;
    $('#err').textContent = msg || '';
    $('#pw').value = ''; $('#pw').focus();
  }
  async function showReport() {
    $('#gate').hidden = true; $('#report').hidden = false; $('#signout').hidden = false;
    await loadData();
    clearInterval(timer);
    timer = setInterval(() => loadData().catch(() => report.stale()), REFRESH_MS);
  }

  $('#gateForm').addEventListener('submit', async e => {
    e.preventDefault();
    const btn = $('#gateForm button'); btn.disabled = true; $('#err').textContent = '';
    try {
      keys = keys || await fetchJson(cfg.keysUrl);
      try { pkcs8 = await unlockKey(keys, $('#pw').value); }
      catch { $('#err').textContent = 'That password did not work. Check it and try again.'; return; }
      store.set(storeKey, b64(pkcs8), $('#remember').checked);
      await showReport();
    } catch {
      showGate('Could not load the portal. Check your connection and try again.');
    } finally { btn.disabled = false; }
  });
  $('#signout').addEventListener('click', () => {
    store.clear(storeKey); pkcs8 = null; D = null; clearInterval(timer); showGate();
  });

  const report = makeReport(cfg);
  const saved = store.get(storeKey);
  if (saved) {
    pkcs8 = unb64(saved);
    showReport().catch(() => { store.clear(storeKey); showGate(); });
  } else showGate();
}

function makeReport(cfg) {
  let D = null, range = 'all', onlyQ = false, query = '';
  const fmt = n => n.toLocaleString('en-US');
  const pct = (a, b) => b ? (a / b * 100) : 0;
  const tz = () => D.timezone || 'America/New_York';
  function weekStart(dateStr) { const d = new Date(dateStr.slice(0, 10) + 'T12:00:00Z'); const dow = (d.getUTCDay() + 6) % 7; d.setUTCDate(d.getUTCDate() - dow); return d.toISOString().slice(0, 10); }
  function label(ws) { return 'Week of ' + new Date(ws + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' }); }
  function dayLabel(ds) { return new Date(ds + 'T12:00:00Z').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', timeZone: 'UTC' }); }
  function ago(iso) { const m = Math.round((Date.now() - new Date(iso)) / 60000); if (m < 1) return 'just now'; if (m < 60) return m + ' min ago'; const h = Math.round(m / 60); if (h < 48) return h + ' hr ago'; return Math.round(h / 24) + ' days ago'; }
  function updatedText() { return 'Updated ' + ago(D.updatedAt) + ' · ' + new Date(D.updatedAt).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', timeZone: tz() }) + ' ET'; }

  function stats(filterWeek) {
    const inW = s => !filterWeek || weekStart(s) === filterWeek;
    const dials = D.dialsByDay.filter(d => inW(d.date)).reduce((s, d) => s + d.dials, 0);
    const conv = D.conversations.filter(c => inW(c.time));
    const q = conv.filter(c => c.qualified).length;
    const mtg = D.meetingsBooked.filter(m => inW(m.date)).length;
    return { dials, conv: conv.length, q, mtg, rate: pct(conv.length, dials), list: conv };
  }
  function weeks() { const s = new Set(); D.dialsByDay.forEach(d => s.add(weekStart(d.date))); D.conversations.forEach(c => s.add(weekStart(c.time))); return [...s].sort(); }

  function renderHeader() {
    $('#client').textContent = (D.client || cfg.client) + ' · Outbound program';
    $('#program').textContent = D.program || '';
    $('#updated').textContent = updatedText();
    document.title = (D.client || cfg.client) + ' · Outreach portal';
  }
  function renderRange() {
    const nav = $('#range'); nav.textContent = '';
    if (range !== 'all' && !weeks().includes(range)) range = 'all';
    [['all', 'All time']].concat(weeks().slice().reverse().map(w => [w, label(w)])).forEach(([v, t]) => {
      const b = el('button', { type: 'button', 'aria-pressed': String(v === range), text: t });
      b.addEventListener('click', () => { range = v; renderAll(); });
      nav.appendChild(b);
    });
  }
  function renderKpis() {
    const ws = weeks(), cur = stats(range === 'all' ? null : range);
    let prev = null; if (range !== 'all') { const i = ws.indexOf(range); if (i > 0) prev = stats(ws[i - 1]); }
    const items = [
      ['Qualified conversations', cur.q, prev && prev.q, 'lead'],
      ['Dials', cur.dials, prev && prev.dials],
      ['Conversations', cur.conv, prev && prev.conv],
      ['Connect rate', cur.rate, prev && prev.rate, 'pct'],
      ['Meetings booked', cur.mtg, prev && prev.mtg]];
    const box = $('#kpis'); box.textContent = '';
    items.forEach(([lab, v, p, kind]) => {
      const isPct = kind === 'pct';
      const k = el('div', { cls: 'kpi' + (kind === 'lead' ? ' lead' : '') });
      k.appendChild(el('div', { cls: 'lab', text: lab }));
      k.appendChild(el('div', { cls: 'val num', text: isPct ? v.toFixed(1) + '%' : fmt(v) }));
      let dt = '', c = '';
      if (range === 'all') { dt = kind === 'lead' && cur.conv ? Math.round(pct(cur.q, cur.conv)) + '% of conversations' : ''; }
      else if (p === null || p === undefined) { dt = 'first week'; }
      else { const diff = v - p; c = diff > 0 ? 'up' : diff < 0 ? 'down' : ''; dt = diff === 0 ? 'same as prior week' : (diff > 0 ? '▲ ' : '▼ ') + (isPct ? Math.abs(diff).toFixed(1) + ' pts' : fmt(Math.abs(diff))) + ' vs prior week'; }
      k.appendChild(el('div', { cls: 'delta num ' + c, text: dt }));
      box.appendChild(k);
    });
  }
  function renderWeekly() {
    const t = $('#weekTable'); t.textContent = '';
    t.appendChild(el('thead', {}, [el('tr', {}, ['Week', 'Dials', 'Convos', 'Connect', 'Qualified', 'Mtgs'].map((h, i) => el('th', { cls: i ? 'n' : '', text: h })))]));
    const tb = el('tbody');
    const row = (name, s, cls, bold) => el('tr', { cls }, [el('td', { cls: bold ? 'who' : '', text: name })].concat(
      [fmt(s.dials), fmt(s.conv), s.rate.toFixed(1) + '%', fmt(s.q), fmt(s.mtg)].map(v => el('td', { cls: 'n' + (bold ? ' who' : ''), text: v }))));
    weeks().slice().reverse().forEach(w => tb.appendChild(row(label(w), stats(w), w === range ? 'cur' : '')));
    tb.appendChild(row('All time', stats(null), '', true));
    t.appendChild(tb);
  }

  const NS = 'http://www.w3.org/2000/svg';
  function s(tag, attrs, txt) { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (txt != null) e.textContent = txt; return e; }
  function tipFor(host) { let t = host.querySelector('.tip'); if (!t) { t = el('div', { cls: 'tip' }); t.hidden = true; host.appendChild(t); } return t; }

  function renderDaily() {
    const host = $('#dailyChart'); host.textContent = '';
    const byDay = {}, convDay = {}, qDay = {};
    D.dialsByDay.forEach(d => { if (range === 'all' || weekStart(d.date) === range) byDay[d.date] = (byDay[d.date] || 0) + d.dials; });
    D.conversations.forEach(c => { const d = c.time.slice(0, 10); if (range === 'all' || weekStart(d) === range) { convDay[d] = (convDay[d] || 0) + 1; if (c.qualified) qDay[d] = (qDay[d] || 0) + 1; byDay[d] = byDay[d] || 0; } });
    const days = Object.keys(byDay).sort();
    if (!days.length) { host.appendChild(el('div', { cls: 'empty', text: 'No dials in this range yet.' })); return; }
    const W = Math.max(300, host.clientWidth || 520), H = 240, l = 34, r = 8, t0 = 24, b = 46;
    const max = Math.max(...days.map(d => byDay[d])) || 1;
    const band = (W - l - r) / days.length, bw = Math.min(46, band * 0.6);
    const svg = s('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart', role: 'img', 'aria-label': 'Dials by day' });
    const y = v => t0 + (H - t0 - b) * (1 - v / max);
    [0, 0.5, 1].forEach(f => { const v = Math.round(max * f); svg.appendChild(s('line', { x1: l, x2: W - r, y1: y(v), y2: y(v), stroke: 'var(--rule-40)' })); svg.appendChild(s('text', { x: l - 6, y: y(v) + 4, 'text-anchor': 'end', 'font-size': 11, fill: 'var(--rule-gray)' }, v)); });
    const tip = tipFor(host);
    days.forEach((d, i) => {
      const x = l + i * band + (band - bw) / 2, v = byDay[d];
      const rect = s('rect', { x, y: y(v), width: bw, height: Math.max(0, y(0) - y(v)), rx: 2, fill: 'var(--ledger-green)' });
      const show = () => { tip.textContent = `${dayLabel(d)}: ${fmt(v)} dials · ${convDay[d] || 0} conversations · ${qDay[d] || 0} qualified`; tip.style.left = (x + bw / 2) / W * 100 + '%'; tip.style.top = (y(v) / H * host.clientHeight) + 'px'; tip.hidden = false; };
      rect.addEventListener('mouseenter', show); rect.addEventListener('mouseleave', () => tip.hidden = true); rect.addEventListener('click', show);
      svg.appendChild(rect);
      svg.appendChild(s('text', { x: x + bw / 2, y: y(v) - 6, 'text-anchor': 'middle', 'font-size': 11, fill: 'var(--ink)' }, fmt(v)));
      const dl = dayLabel(d).split(', ');
      svg.appendChild(s('text', { x: x + bw / 2, y: H - b + 16, 'text-anchor': 'middle', 'font-size': 11, fill: 'var(--rule-gray)' }, dl[0]));
      svg.appendChild(s('text', { x: x + bw / 2, y: H - b + 30, 'text-anchor': 'middle', 'font-size': 11, fill: 'var(--rule-gray)' }, dl[1] || ''));
    });
    host.appendChild(svg);
  }

  function renderOutcomes() {
    const host = $('#outChart'); host.textContent = '';
    const list = stats(range === 'all' ? null : range).list;
    if (!list.length) { host.appendChild(el('div', { cls: 'empty', text: 'No conversations in this range yet.' })); return; }
    const counts = {}; list.forEach(c => counts[c.outcome] = (counts[c.outcome] || 0) + 1);
    const rows = Object.keys(counts).map(k => ({ k, n: counts[k], label: D.outcomes[k] || k })).sort((a, b) => b.n - a.n || a.label.localeCompare(b.label));
    const W = Math.max(320, host.clientWidth || 900), narrow = W < 560, rowH = narrow ? 44 : 30, l = narrow ? 0 : 270, t0 = 4, H = t0 + rows.length * rowH + 4;
    const max = Math.max(...rows.map(r => r.n)), barMax = W - l - 70;
    const svg = s('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart', role: 'img', 'aria-label': 'Conversation outcomes' });
    const tip = tipFor(host);
    rows.forEach((r, i) => {
      const y0 = t0 + i * rowH, by = narrow ? y0 + 18 : y0 + 6, w = Math.max(2, r.n / max * barMax);
      svg.appendChild(s('text', { x: narrow ? 0 : l - 12, y: narrow ? y0 + 12 : y0 + 19, 'text-anchor': narrow ? 'start' : 'end', 'font-size': 13, fill: 'var(--ink)' }, r.label));
      const rect = s('rect', { x: l, y: by, width: w, height: narrow ? 16 : 18, rx: 2, fill: r.k === 'positive' ? 'var(--signal)' : 'var(--ink)', 'fill-opacity': r.k === 'positive' ? 1 : 0.78 });
      const show = () => { tip.textContent = `${r.label}: ${r.n} of ${list.length} (${Math.round(r.n / list.length * 100)}%)`; tip.style.left = ((l + w / 2) / W * 100) + '%'; tip.style.top = (by / H * host.clientHeight) + 'px'; tip.hidden = false; };
      rect.addEventListener('mouseenter', show); rect.addEventListener('mouseleave', () => tip.hidden = true); rect.addEventListener('click', show);
      svg.appendChild(rect);
      svg.appendChild(s('text', { x: l + w + 8, y: by + (narrow ? 12 : 14), 'font-size': 12, fill: 'var(--rule-gray)' }, `${r.n} · ${Math.round(r.n / list.length * 100)}%`));
    });
    host.appendChild(svg);
  }

  function renderLog() {
    const t = $('#logTable'); t.textContent = '';
    let list = stats(range === 'all' ? null : range).list.slice().sort((a, b) => b.time.localeCompare(a.time));
    if (onlyQ) list = list.filter(c => c.qualified);
    if (query) { const q = query.toLowerCase(); list = list.filter(c => (c.prospect + ' ' + c.company + ' ' + c.title).toLowerCase().includes(q)); }
    $('#logTitle').textContent = 'Conversations (' + list.length + ')';
    t.appendChild(el('thead', {}, [el('tr', {}, ['Date (ET)', 'Prospect', 'Company', 'Outcome', 'Talk time', 'Rep', 'Links'].map((h, i) => el('th', { cls: i === 4 ? 'n' : '', text: h })))]));
    const tb = el('tbody');
    if (!list.length) tb.appendChild(el('tr', {}, [el('td', { colspan: '7', cls: 'empty', text: 'No conversations match.' })]));
    list.forEach(c => {
      // Times are stored as Eastern wall-clock strings; format them without shifting.
      const d = new Date(c.time + ':00Z');
      const when = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' }) + ' · ' + d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'UTC' });
      const who = el('td', {}, [el('div', { cls: 'who', text: c.prospect }), el('div', { cls: 'small', text: c.title })]);
      if (c.excerpt) who.appendChild(el('details', {}, [el('summary', { text: 'Excerpt' }), el('p', { text: c.excerpt })]));
      const oc = el('td', {}, [el('div', { text: D.outcomes[c.outcome] || c.outcome }), el('div', { cls: 'small', text: c.disposition })]);
      if (c.qualified) oc.appendChild(el('span', { cls: 'chip q', text: 'Qualified' }));
      const links = el('td', { cls: 'links' });
      if (/^https:\/\//.test(c.recording || '')) links.appendChild(el('a', { href: c.recording, target: '_blank', rel: 'noopener', text: 'Recording' }));
      if (/^https:\/\//.test(c.transcript || '')) links.appendChild(el('a', { href: c.transcript, target: '_blank', rel: 'noopener', text: 'Transcript' }));
      if (!links.childNodes.length) links.appendChild(el('span', { cls: 'small', text: '—' }));
      tb.appendChild(el('tr', {}, [el('td', { cls: 'small', text: when }), who, el('td', { text: c.company }), oc,
        el('td', { cls: 'n', text: Math.floor(c.durationSec / 60) + ':' + String(c.durationSec % 60).padStart(2, '0') }), el('td', { cls: 'small', text: c.rep }), links]));
    });
    t.appendChild(tb);
  }

  function renderAll() { renderHeader(); renderRange(); renderKpis(); renderWeekly(); renderDaily(); renderOutcomes(); renderLog(); }

  $('#fAll').addEventListener('click', () => { onlyQ = false; $('#fAll').setAttribute('aria-pressed', 'true'); $('#fQual').setAttribute('aria-pressed', 'false'); renderLog(); });
  $('#fQual').addEventListener('click', () => { onlyQ = true; $('#fQual').setAttribute('aria-pressed', 'true'); $('#fAll').setAttribute('aria-pressed', 'false'); renderLog(); });
  $('#q').addEventListener('input', e => { query = e.target.value.trim(); renderLog(); });
  let rt; window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { if (D) { renderDaily(); renderOutcomes(); } }, 150); });
  setInterval(() => { if (D) $('#updated').textContent = updatedText(); }, 60000);

  return {
    render(data) { D = data; renderAll(); },
    stale() { if (D) $('#updated').textContent = updatedText() + ' · could not check for new calls'; },
  };
}
