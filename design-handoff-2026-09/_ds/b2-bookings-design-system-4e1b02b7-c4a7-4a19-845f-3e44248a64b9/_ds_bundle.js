/* @ds-bundle: {"format":4,"namespace":"B2BookingsDesignSystem_4e1b02","components":[{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Label","sourcePath":"components/core/Label.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"BarChart","sourcePath":"components/data/BarChart.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"LedgerPanel","sourcePath":"components/data/LedgerPanel.jsx"},{"name":"Scorecard","sourcePath":"components/data/Scorecard.jsx"},{"name":"StatDisplay","sourcePath":"components/data/StatDisplay.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"CountUp","sourcePath":"components/interactive/CountUp.jsx"},{"name":"ProcessSequence","sourcePath":"components/interactive/ProcessSequence.jsx"},{"name":"Reveal","sourcePath":"components/interactive/Reveal.jsx"},{"name":"RoiCalculator","sourcePath":"components/interactive/RoiCalculator.jsx"},{"name":"Nav","sourcePath":"components/navigation/Nav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Wordmark.jsx":"81c2d2d7a92c","components/core/Badge.jsx":"29ec6106f5e4","components/core/Button.jsx":"35aa7ecc48fe","components/core/Card.jsx":"95f0e32ef927","components/core/IconButton.jsx":"919bb18e817c","components/core/Label.jsx":"c1b82846a1ca","components/core/Rule.jsx":"98b84d7d36c0","components/core/Tag.jsx":"f5cc7461d093","components/data/BarChart.jsx":"f10c510da1cf","components/data/DataTable.jsx":"219a446f6a9d","components/data/LedgerPanel.jsx":"6caeef09f4cc","components/data/Scorecard.jsx":"6ca4fbeee090","components/data/StatDisplay.jsx":"44ce0d43d304","components/feedback/Dialog.jsx":"edcc03ce1c1d","components/feedback/Toast.jsx":"e5157cd28a42","components/feedback/Tooltip.jsx":"4db3ba507d12","components/forms/Checkbox.jsx":"c41c473601c5","components/forms/Input.jsx":"b3fce057cd7e","components/forms/RadioGroup.jsx":"b816f995ed16","components/forms/Select.jsx":"0f1f300a902d","components/forms/Slider.jsx":"d13e6d0328d5","components/forms/Switch.jsx":"646ef7c9d28d","components/interactive/CountUp.jsx":"8f94ccea8aff","components/interactive/ProcessSequence.jsx":"7b8715b22219","components/interactive/Reveal.jsx":"bbc2660b09fa","components/interactive/RoiCalculator.jsx":"1cdf855d8958","components/navigation/Nav.jsx":"5bfa6479e109","components/navigation/Tabs.jsx":"05bc48a2f7e6","ui_kits/media/Graphics.jsx":"ff5a9d5f0bd3","ui_kits/proposal/Pages.jsx":"cfb3efbc32f0","ui_kits/website/App.jsx":"fcb0463946c8","ui_kits/website/CalculatorSection.jsx":"f594fdb62877","ui_kits/website/Footer.jsx":"96efb01ec60d","ui_kits/website/Hero.jsx":"4736247fe31c","ui_kits/website/MethodSection.jsx":"d12422cb3a4f","ui_kits/website/PricingSection.jsx":"c17fe2a6569f","ui_kits/website/ProofSection.jsx":"1c6e88e1dae7","ui_kits/website/Shared.jsx":"221945efef04"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.B2BookingsDesignSystem_4e1b02 = window.B2BookingsDesignSystem_4e1b02 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Type-only lockup: "B2 Bookings" set in Fraunces. No icon, no mark was supplied. */
function Wordmark({
  size = 24,
  tone = 'ink',
  as = 'span',
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: size,
      letterSpacing: '-0.015em',
      lineHeight: 1,
      color: tone === 'paper' ? 'var(--paper)' : tone === 'green' ? 'var(--ledger-green)' : 'var(--ink)',
      display: 'inline-block',
      padding: size * 0.7 + 'px 0',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), "B2 Bookings");
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Stamp-style status marker. Monochrome by default. */
function Badge({
  children,
  tone = 'ink',
  variant = 'outline',
  style,
  ...rest
}) {
  const c = tone === 'signal' ? 'var(--signal)' : tone === 'green' ? 'var(--ledger-green)' : tone === 'muted' ? 'var(--rule-gray)' : 'var(--ink)';
  const solid = variant === 'solid';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-micro)',
      fontWeight: 'var(--weight-semibold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      padding: '4px 8px',
      borderRadius: 'var(--radius-xs)',
      border: '1px solid ' + c,
      background: solid ? c : 'transparent',
      color: solid ? 'var(--paper)' : c,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Primary is solid Ink and fills to Signal on hover, like a stamp landing. */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconAfter,
  disabled,
  full,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const pad = size === 'sm' ? '8px 14px' : size === 'lg' ? '16px 28px' : '12px 20px';
  const fs = size === 'sm' ? 'var(--text-caption)' : 'var(--text-body-sm)';
  const base = {
    display: full ? 'flex' : 'inline-flex',
    width: full ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    fontFamily: 'var(--font-sans)',
    fontSize: fs,
    fontWeight: 'var(--weight-semibold)',
    letterSpacing: '0.01em',
    padding: pad,
    borderRadius: 'var(--radius-sm)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    boxShadow: 'none',
    opacity: disabled ? 0.4 : 1,
    transition: 'background-color var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
  };
  const skins = {
    primary: {
      background: hover && !disabled ? 'var(--signal)' : 'var(--ink)',
      color: 'var(--paper)'
    },
    secondary: {
      background: 'transparent',
      color: hover && !disabled ? 'var(--signal)' : 'var(--ink)',
      borderColor: hover && !disabled ? 'var(--signal)' : 'var(--ink)'
    },
    signal: {
      background: hover && !disabled ? 'var(--ink)' : 'var(--signal)',
      color: 'var(--paper)'
    },
    ghost: {
      background: 'transparent',
      color: hover && !disabled ? 'var(--signal)' : 'var(--ink)',
      padding: size === 'sm' ? '6px 0' : '8px 0',
      borderBottom: '1px solid ' + (hover && !disabled ? 'var(--signal)' : 'var(--rule-40)'),
      borderRadius: 0
    }
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: !href ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...skins[variant],
      ...style
    }
  }, rest), icon, children, iconAfter);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function IconButton({
  children,
  label,
  variant = 'bare',
  size = 32,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: variant === 'filled' ? hover ? 'var(--signal)' : 'var(--ink)' : 'transparent',
      color: variant === 'filled' ? 'var(--paper)' : hover ? 'var(--signal)' : 'var(--ink)',
      border: variant === 'outline' ? '1px solid ' + (hover ? 'var(--signal)' : 'var(--rule-40)') : '1px solid transparent',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      padding: 0,
      transition: 'color var(--dur-fast) var(--ease-out), background-color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small-caps tracked eyebrow. The signature detail of the system. */
function Label({
  children,
  as = 'div',
  tone = 'muted',
  align = 'start',
  style,
  ...rest
}) {
  const Tag = as;
  const color = tone === 'ink' ? 'var(--ink)' : tone === 'signal' ? 'var(--signal)' : tone === 'green' ? 'var(--ledger-green)' : 'var(--rule-gray)';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--weight-semibold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color,
      textAlign: align === 'end' ? 'right' : 'left',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Label.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Flat Paper Deep field, 1px hairline, no shadow. Proof points and case studies. */
function Card({
  label,
  title,
  children,
  footer,
  media,
  tone = 'deep',
  padding = 32,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: tone === 'plain' ? 'transparent' : tone === 'ink' ? 'var(--ink)' : 'var(--paper-deep)',
      color: tone === 'ink' ? 'var(--paper)' : 'var(--ink)',
      border: '1px solid ' + (tone === 'ink' ? 'var(--ink)' : 'var(--border-hairline)'),
      borderRadius: 'var(--radius-md)',
      padding,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      ...style
    }
  }, rest), media, label && /*#__PURE__*/React.createElement(__ds_scope.Label, {
    tone: tone === 'ink' ? 'muted' : 'muted'
  }, label), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-h2)',
      lineHeight: 'var(--leading-heading)',
      letterSpacing: 'var(--tracking-heading)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-body)',
      color: tone === 'ink' ? 'var(--paper-deep)' : 'var(--ink)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-4)',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Ledger hairline. The only section divider in the system. */
function Rule({
  tone = 'gray',
  weight = 1,
  vertical,
  style,
  ...rest
}) {
  const c = tone === 'ink' ? 'var(--ink)' : tone === 'signal' ? 'var(--signal)' : 'var(--rule-40)';
  return vertical ? /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    style: {
      width: weight,
      alignSelf: 'stretch',
      background: c,
      ...style
    }
  }, rest)) : /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      borderTop: weight + 'px solid ' + c,
      margin: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Metadata chip: sector, seniority, disqualification reason. */
function Tag({
  children,
  onRemove,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      color: 'var(--ink)',
      background: 'var(--paper-deep)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-xs)',
      padding: '4px 10px',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      border: 0,
      background: 'none',
      cursor: 'pointer',
      color: 'var(--rule-gray)',
      padding: 0,
      lineHeight: 1,
      fontSize: 14
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/BarChart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Annual-report bar chart. Ledger Green bars, one Signal bar for the point being made. */
function BarChart({
  data = [],
  height = 180,
  unit = '',
  highlightIndex = -1,
  showValues = true,
  style,
  ...rest
}) {
  const max = Math.max(...data.map(d => d.value), 1);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 'var(--space-4)',
      height,
      borderBottom: '1px solid var(--ink)',
      padding: '0 2px'
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: d.label,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'stretch',
      height: '100%'
    }
  }, showValues && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-numeric)',
      fontVariantNumeric: 'tabular-nums lining-nums',
      fontSize: 'var(--text-caption)',
      color: i === highlightIndex ? 'var(--signal)' : 'var(--rule-gray)',
      marginBottom: 'var(--space-1)',
      textAlign: 'center'
    }
  }, d.value.toLocaleString('en-US'), unit), /*#__PURE__*/React.createElement("div", {
    style: {
      height: d.value / max * (height - 28) + 'px',
      background: i === highlightIndex ? 'var(--signal)' : 'var(--ledger-green)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      padding: '0 2px',
      marginTop: 'var(--space-2)'
    }
  }, data.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.label,
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-micro)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--rule-gray)'
    }
  }, d.label))));
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Ledger table: uppercase head, hairline rows, zebra in Paper Deep, tabular figures. */
function DataTable({
  columns = [],
  rows = [],
  zebra = true,
  dense = false,
  caption,
  style,
  ...rest
}) {
  const pad = dense ? '8px 12px' : '12px 16px';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      minWidth: 0,
      overflowX: 'auto',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-sans)',
      fontSize: dense ? 'var(--text-body-sm)' : 'var(--text-body)'
    }
  }, caption && /*#__PURE__*/React.createElement("caption", {
    style: {
      captionSide: 'bottom',
      textAlign: 'left',
      paddingTop: 'var(--space-3)',
      fontSize: 'var(--text-caption)',
      color: 'var(--rule-gray)'
    }
  }, caption), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align === 'right' ? 'right' : 'left',
      padding: pad,
      borderBottom: '1px solid var(--ink)',
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--weight-semibold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--rule-gray)'
    }
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      background: zebra && i % 2 === 1 ? 'var(--paper-deep)' : 'transparent'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      padding: pad,
      borderBottom: '1px solid var(--border-hairline)',
      textAlign: c.align === 'right' ? 'right' : 'left',
      fontVariantNumeric: c.numeric ? 'tabular-nums lining-nums' : 'normal',
      color: c.tone === 'muted' ? 'var(--rule-gray)' : 'var(--ink)'
    }
  }, r[c.key])))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/LedgerPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Bordered working zone. Houses calculators, dashboards, live counters. */
function LedgerPanel({
  label,
  title,
  meta,
  children,
  footer,
  padding = 32,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background: 'var(--paper-deep)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      ...style
    }
  }, rest), (label || title || meta) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      padding: padding + 'px ' + padding + 'px ' + 16 + 'px',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, label && /*#__PURE__*/React.createElement(__ds_scope.Label, null, label), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-h2)',
      lineHeight: 'var(--leading-heading)',
      letterSpacing: 'var(--tracking-heading)'
    }
  }, title)), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      color: 'var(--rule-gray)',
      whiteSpace: 'nowrap'
    }
  }, meta)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '16px ' + padding + 'px ' + padding + 'px',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, footer));
}
Object.assign(__ds_scope, { LedgerPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/LedgerPanel.jsx", error: String((e && e.message) || e) }); }

// components/data/Scorecard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Row of stats divided by hairlines, modeled on a ledger tally. */
function Scorecard({
  label,
  stats = [],
  columns,
  panel = false,
  children,
  style,
  ...rest
}) {
  const cols = columns || stats.length || 1;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: panel ? 'var(--paper-deep)' : 'transparent',
      border: panel ? '1px solid var(--border-hairline)' : 0,
      borderRadius: panel ? 'var(--radius-md)' : 0,
      padding: panel ? 'var(--space-8)' : 0,
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement(__ds_scope.Label, {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + cols + ',minmax(0,1fr))'
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: i === 0 ? '0 var(--space-6) 0 0' : '0 var(--space-6)',
      borderLeft: i === 0 ? 0 : '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: s.tone === 'signal' ? 'var(--signal)' : s.tone === 'green' ? 'var(--ledger-green)' : 'var(--ink)',
      fontFamily: 'var(--font-numeric)',
      fontVariantNumeric: 'tabular-nums lining-nums',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-stat-sm)',
      lineHeight: 1,
      letterSpacing: '-0.01em'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--weight-semibold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--rule-gray)'
    }
  }, s.label), s.note && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-1)',
      fontSize: 'var(--text-caption)',
      color: 'var(--rule-gray)'
    }
  }, s.note)))), children);
}
Object.assign(__ds_scope, { Scorecard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Scorecard.jsx", error: String((e && e.message) || e) }); }

// components/data/StatDisplay.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Scoreboard tally: big numeral, small caps label beneath. */
function StatDisplay({
  value,
  label,
  note,
  tone = 'ink',
  face = 'numeric',
  size = 'md',
  align = 'start',
  style,
  ...rest
}) {
  const color = tone === 'signal' ? 'var(--signal)' : tone === 'green' ? 'var(--ledger-green)' : 'var(--ink)';
  const fs = size === 'lg' ? 'var(--text-stat)' : size === 'sm' ? 'var(--text-h2)' : 'var(--text-stat-sm)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align === 'center' ? 'center' : 'left',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color,
      fontSize: fs,
      lineHeight: 1,
      fontFamily: face === 'display' ? 'var(--font-display)' : 'var(--font-numeric)',
      fontWeight: face === 'display' ? 'var(--weight-semibold)' : 'var(--weight-semibold)',
      letterSpacing: face === 'display' ? 'var(--tracking-display)' : '-0.01em',
      fontVariantNumeric: 'tabular-nums lining-nums'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--weight-semibold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--rule-gray)'
    }
  }, label), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--rule-gray)'
    }
  }, note));
}
Object.assign(__ds_scope, { StatDisplay });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatDisplay.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Paper sheet over an Ink scrim. No shadow, hairline border only. */
function Dialog({
  open,
  label,
  title,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(20,24,28,.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)',
      zIndex: 50,
      animation: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--paper)',
      border: '1px solid var(--ink)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, label && /*#__PURE__*/React.createElement(__ds_scope.Label, null, label), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-h2)',
      lineHeight: 'var(--leading-heading)'
    }
  }, title)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Close",
    onClick: onClose,
    style: {
      marginTop: -4
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      justifyContent: 'flex-end',
      paddingTop: 'var(--space-4)',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Receipt-style confirmation strip. Ink field, Paper text, one optional Signal rule. */
function Toast({
  open = true,
  message,
  meta,
  tone = 'ink',
  onClose,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      background: tone === 'ink' ? 'var(--ink)' : 'var(--paper-deep)',
      color: tone === 'ink' ? 'var(--paper)' : 'var(--ink)',
      border: '1px solid ' + (tone === 'ink' ? 'var(--ink)' : 'var(--border-hairline)'),
      borderLeft: '2px solid ' + (tone === 'signal' ? 'var(--signal)' : tone === 'ink' ? 'var(--ink)' : 'var(--border-hairline)'),
      borderRadius: 'var(--radius-xs)',
      padding: '12px 16px',
      fontSize: 'var(--text-body-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, message), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-numeric)',
      fontVariantNumeric: 'tabular-nums',
      fontSize: 'var(--text-caption)',
      color: tone === 'ink' ? 'var(--rule-gray)' : 'var(--rule-gray)'
    }
  }, meta), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      border: 0,
      background: 'none',
      color: 'inherit',
      cursor: 'pointer',
      padding: 0,
      fontSize: 16,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Footnote tooltip. Used for assumptions and definitions, not marketing copy. */
function Tooltip({
  children,
  content,
  placement = 'top',
  style,
  ...rest
}) {
  const [open, setOpen] = useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 6px)'
  } : {
    bottom: 'calc(100% + 6px)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false),
    tabIndex: 0
  }, rest), children, open && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: 0,
      ...pos,
      zIndex: 40,
      whiteSpace: 'normal',
      width: 'max-content',
      maxWidth: 260,
      background: 'var(--ink)',
      color: 'var(--paper)',
      border: '1px solid var(--ink)',
      borderRadius: 'var(--radius-xs)',
      padding: '8px 10px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      lineHeight: 1.45
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Ledger tick box: hairline square, fills Ink and shows a tick when checked. */
function Checkbox({
  label,
  hint,
  checked,
  onChange,
  id,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 16,
      height: 16,
      marginTop: 3,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-xs)',
      border: '1px solid ' + (checked ? 'var(--ink)' : 'var(--rule-gray)'),
      background: checked ? 'var(--ink)' : 'transparent',
      transition: 'background-color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      left: 4,
      top: 1,
      width: 5,
      height: 9,
      borderRight: '1.75px solid var(--paper)',
      borderBottom: '1.75px solid var(--paper)',
      transform: 'rotate(40deg)'
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "checkbox",
    checked: !!checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      inset: 0,
      margin: 0,
      opacity: 0,
      cursor: 'inherit'
    }
  }, rest))), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)'
    }
  }, label), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-caption)',
      color: 'var(--rule-gray)'
    }
  }, hint)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Underline-style field. Bottom border only, no boxed fill. */
function Input({
  label,
  hint,
  error,
  type = 'text',
  multiline,
  rows = 3,
  value,
  onChange,
  placeholder,
  id,
  disabled,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const line = error ? 'var(--signal)' : focus ? 'var(--ink)' : 'var(--rule-40)';
  const field = {
    width: '100%',
    background: 'transparent',
    border: 0,
    borderBottom: '1px solid ' + line,
    borderRadius: 0,
    padding: '8px 0',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-body)',
    color: 'var(--ink)',
    outline: 'none',
    transition: 'border-color var(--dur-fast) var(--ease-out)',
    opacity: disabled ? 0.5 : 1,
    resize: 'vertical'
  };
  const shared = {
    id,
    value,
    onChange,
    placeholder,
    disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: field,
    ...rest
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--weight-semibold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--rule-gray)'
    }
  }, label), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, shared)) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, shared)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: error ? 'var(--signal)' : 'var(--rule-gray)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function RadioGroup({
  label,
  name,
  options = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("fieldset", _extends({
    style: {
      border: 0,
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("legend", {
    style: {
      padding: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--weight-semibold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--rule-gray)'
    }
  }, label), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    const on = value === v;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      style: {
        display: 'flex',
        gap: 'var(--space-3)',
        alignItems: 'center',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 16,
        height: 16,
        borderRadius: '50%',
        border: '1px solid ' + (on ? 'var(--ink)' : 'var(--rule-gray)'),
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--ink)'
      }
    })), /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: v,
      checked: on,
      onChange: onChange,
      style: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-body-sm)'
      }
    }, l));
  }));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Select({
  label,
  options = [],
  value,
  onChange,
  id,
  hint,
  disabled,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--weight-semibold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--rule-gray)'
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      appearance: 'none',
      background: 'transparent',
      border: 0,
      borderBottom: '1px solid ' + (focus ? 'var(--ink)' : 'var(--rule-40)'),
      borderRadius: 0,
      padding: '8px 20px 8px 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body)',
      color: 'var(--ink)',
      outline: 'none',
      backgroundImage: 'linear-gradient(45deg,transparent 50%,var(--ink) 50%),linear-gradient(135deg,var(--ink) 50%,transparent 50%)',
      backgroundPosition: 'right 6px center,right 1px center',
      backgroundSize: '5px 5px,5px 5px',
      backgroundRepeat: 'no-repeat'
    }
  }, rest), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--rule-gray)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Ledger slider: hairline track, Ledger Green fill, square handle, tabular readout. */
function Slider({
  label,
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  format,
  unit,
  id,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const pct = (value - min) / (max - min) * 100;
  const shown = format ? format(value) : value.toLocaleString('en-US') + (unit || '');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-4)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--weight-semibold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--rule-gray)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-numeric)',
      fontVariantNumeric: 'tabular-nums lining-nums',
      fontSize: 'var(--text-body-lg)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--ink)'
    }
  }, shown)), /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      height: 20,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 2,
      background: 'var(--ink-12)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      width: pct + '%',
      height: 2,
      background: hover ? 'var(--signal)' : 'var(--ledger-green)',
      transition: 'background-color var(--dur-fast) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'calc(' + pct + '% - 5px)',
      width: 10,
      height: 16,
      background: 'var(--ink)',
      borderRadius: '1px'
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "range",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange && onChange(Number(e.target.value)),
    style: {
      position: 'relative',
      width: '100%',
      margin: 0,
      opacity: 0,
      height: 20,
      cursor: 'pointer'
    }
  }, rest))));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Rectangular toggle. A switch in this system is a flag flipping, not a pill sliding. */
function Switch({
  label,
  checked,
  onChange,
  id,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    id: id,
    role: "switch",
    "aria-checked": !!checked,
    disabled: disabled,
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 40,
      height: 20,
      padding: 2,
      borderRadius: 'var(--radius-xs)',
      border: '1px solid ' + (checked ? 'var(--ink)' : 'var(--rule-gray)'),
      background: checked ? 'var(--ink)' : 'transparent',
      display: 'inline-flex',
      justifyContent: checked ? 'flex-end' : 'flex-start',
      cursor: 'inherit',
      transition: 'background-color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      background: checked ? 'var(--paper)' : 'var(--rule-gray)',
      borderRadius: '1px',
      transition: 'background-color var(--dur-fast) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/interactive/CountUp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useRef,
  useState
} = React;
/** Counts from zero to value once when scrolled into view. Never loops. */
function CountUp({
  value,
  duration = 1200,
  prefix = '',
  suffix = '',
  decimals = 0,
  style,
  ...rest
}) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const run = () => {
      if (done.current) return;
      done.current = true;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setN(value);
        return;
      }
      const t0 = performance.now();
      const tick = now => {
        const p = Math.min(1, (now - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(value * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && run()), {
      threshold: 0.4
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);
  const shown = n.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    style: {
      fontFamily: 'var(--font-numeric)',
      fontVariantNumeric: 'tabular-nums lining-nums',
      ...style
    }
  }, rest), prefix, shown, suffix);
}
Object.assign(__ds_scope, { CountUp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/interactive/CountUp.jsx", error: String((e && e.message) || e) }); }

// components/interactive/ProcessSequence.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Staged panels: List Build, The Call, The Objection Log, The Booked Meeting. */
function ProcessSequence({
  steps = [],
  activeIndex,
  onSelect,
  style,
  ...rest
}) {
  const [internal, setInternal] = useState(0);
  const active = activeIndex ?? internal;
  const set = i => {
    setInternal(i);
    onSelect && onSelect(i);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(220px,1fr) minmax(0,2fr)',
      gap: 'var(--space-12)',
      alignItems: 'start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      borderTop: '1px solid var(--border-hairline)'
    }
  }, steps.map((s, i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("li", {
      key: s.title,
      style: {
        borderBottom: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => set(i),
      style: {
        width: '100%',
        textAlign: 'left',
        background: 'none',
        border: 0,
        cursor: 'pointer',
        padding: '16px 0',
        display: 'flex',
        gap: 'var(--space-4)',
        alignItems: 'baseline',
        color: on ? 'var(--ink)' : 'var(--rule-gray)',
        transition: 'color var(--dur-fast) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-numeric)',
        fontVariantNumeric: 'tabular-nums',
        fontSize: 'var(--text-caption)',
        letterSpacing: 'var(--tracking-label)'
      }
    }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--weight-semibold)',
        fontSize: 'var(--text-h3)',
        lineHeight: 1.2
      }
    }, s.title)));
  })), /*#__PURE__*/React.createElement("div", {
    key: active,
    style: {
      background: 'var(--paper-deep)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-8)',
      animation: 'none',
      opacity: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, steps[active] && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Label, null, steps[active].label || 'Step ' + String(active + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-h2)',
      lineHeight: 'var(--leading-heading)'
    }
  }, steps[active].title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-body)',
      maxWidth: '58ch'
    }
  }, steps[active].body), steps[active].detail)));
}
Object.assign(__ds_scope, { ProcessSequence });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/interactive/ProcessSequence.jsx", error: String((e && e.message) || e) }); }

// components/interactive/Reveal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useRef,
  useState
} = React;
/** Fade plus 16px upward slide on scroll-into-view. The only entrance motion in the system. */
function Reveal({
  children,
  delay = 0,
  as = 'div',
  style,
  ...rest
}) {
  const Tag = as;
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }), {
      threshold: 0.15
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    style: {
      opacity: inView ? 1 : 0,
      transform: inView ? 'none' : 'translateY(16px)',
      transition: 'opacity var(--dur-slow) var(--ease-out) ' + delay + 'ms, transform var(--dur-slow) var(--ease-out) ' + delay + 'ms',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Reveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/interactive/Reveal.jsx", error: String((e && e.message) || e) }); }

// components/interactive/RoiCalculator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useMemo,
  useState
} = React;
const usd = n => '$' + Math.round(n).toLocaleString('en-US');

/** Flagship interactive element: sliders drive a live unit-economics verdict. */
function RoiCalculator({
  monthlyFee = 9500,
  defaults = {},
  onChange,
  style,
  ...rest
}) {
  const [convos, setConvos] = useState(defaults.conversations ?? 1200);
  const [deal, setDeal] = useState(defaults.dealSize ?? 24000);
  const [close, setClose] = useState(defaults.closeRate ?? 22);
  const m = useMemo(() => {
    const meetings = Math.round(convos * 0.035);
    const wins = meetings * (close / 100);
    const revenue = wins * deal;
    const cac = wins > 0 ? monthlyFee / wins : 0;
    const ratio = monthlyFee > 0 ? revenue / monthlyFee : 0;
    return {
      meetings,
      wins,
      revenue,
      cac,
      ratio
    };
  }, [convos, deal, close, monthlyFee]);
  React.useEffect(() => {
    onChange && onChange(m);
  }, [m, onChange]);
  const works = m.ratio >= 3;
  return /*#__PURE__*/React.createElement(__ds_scope.LedgerPanel, _extends({
    label: "Unit economics",
    title: "Run your own numbers",
    meta: 'Retainer ' + usd(monthlyFee) + ' / mo',
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 'var(--space-12)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Slider, {
    id: "roi-convos",
    label: "Conversations / month",
    min: 200,
    max: 3000,
    step: 50,
    value: convos,
    onChange: setConvos
  }), /*#__PURE__*/React.createElement(__ds_scope.Slider, {
    id: "roi-deal",
    label: "Average deal size",
    min: 5000,
    max: 150000,
    step: 1000,
    value: deal,
    onChange: setDeal,
    format: usd
  }), /*#__PURE__*/React.createElement(__ds_scope.Slider, {
    id: "roi-close",
    label: "Close rate",
    min: 5,
    max: 50,
    step: 1,
    value: close,
    onChange: setClose,
    format: v => v + '%'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, [['Meetings booked / mo', m.meetings.toLocaleString('en-US')], ['Closed deals / mo', m.wins.toFixed(1)], ['Revenue / mo', usd(m.revenue)], ['Cost per closed deal', usd(m.cac)]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 'var(--space-4)',
      paddingBottom: 'var(--space-2)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--weight-semibold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--rule-gray)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-numeric)',
      fontVariantNumeric: 'tabular-nums lining-nums',
      fontSize: 'var(--text-body-lg)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, v))), /*#__PURE__*/React.createElement(__ds_scope.Rule, {
    tone: "ink",
    style: {
      marginTop: 'var(--space-2)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-numeric)',
      fontVariantNumeric: 'tabular-nums lining-nums',
      fontSize: 'var(--text-stat)',
      lineHeight: 1,
      fontWeight: 'var(--weight-semibold)',
      color: works ? 'var(--signal)' : 'var(--ink)'
    }
  }, m.ratio.toFixed(1), "x"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      lineHeight: 1.2
    }
  }, works ? 'return on retainer. The math works.' : 'return on retainer. Raise deal size or close rate.')))));
}
Object.assign(__ds_scope, { RoiCalculator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/interactive/RoiCalculator.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Nav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Text-link nav, hairline separated from the page. No pills, no colored bar. */
function Nav({
  items = [],
  active,
  onNavigate,
  action,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(null);
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      borderBottom: '1px solid var(--border-hairline)',
      background: 'var(--surface-page)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '0 var(--page-margin)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 20
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, items.map(it => {
    const label = typeof it === 'string' ? it : it.label;
    const on = active === label || hover === label;
    return /*#__PURE__*/React.createElement("a", {
      key: label,
      href: typeof it === 'string' ? '#' : it.href || '#',
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(label);
        }
      },
      onMouseEnter: () => setHover(label),
      onMouseLeave: () => setHover(null),
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-caption)',
        fontWeight: 'var(--weight-semibold)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-label)',
        textDecoration: 'none',
        color: on ? 'var(--signal)' : 'var(--ink)',
        paddingBottom: 2,
        borderBottom: '1px solid ' + (active === label ? 'var(--ink)' : hover === label ? 'var(--signal)' : 'transparent'),
        transition: 'color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
      }
    }, label);
  }), action)));
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Nav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Underline tabs on a hairline baseline. */
function Tabs({
  tabs = [],
  value,
  onChange,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(null);
  const current = value ?? (typeof tabs[0] === 'string' ? tabs[0] : tabs[0] && tabs[0].value);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, tabs.map(t => {
    const v = typeof t === 'string' ? t : t.value;
    const l = typeof t === 'string' ? t : t.label;
    const on = current === v;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(v),
      onMouseEnter: () => setHover(v),
      onMouseLeave: () => setHover(null),
      style: {
        background: 'none',
        border: 0,
        borderBottom: '2px solid ' + (on ? 'var(--ink)' : hover === v ? 'var(--signal)' : 'transparent'),
        padding: '0 0 10px',
        marginBottom: -1,
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-caption)',
        fontWeight: 'var(--weight-semibold)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-label)',
        color: on ? 'var(--ink)' : hover === v ? 'var(--signal)' : 'var(--rule-gray)',
        transition: 'color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
      }
    }, l);
  })), children && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 'var(--space-6)'
    }
  }, children));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/media/Graphics.jsx
try { (() => {
Object.assign(window, window.B2BookingsDesignSystem_4e1b02);
const FRAME = {
  background: 'var(--paper)',
  border: '1px solid var(--border-hairline)',
  position: 'relative',
  overflow: 'hidden'
};
const grain = {
  position: 'absolute',
  inset: 0,
  backgroundImage: 'radial-gradient(var(--ink) 1.1px,transparent 1.1px)',
  backgroundSize: '6px 6px',
  opacity: 0.045
};

/** 1280x720 YouTube thumbnail. The one surface allowed to push scale and contrast. */
function Thumbnail({
  scale = 0.5
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...FRAME,
      width: 1280,
      height: 720,
      transform: 'scale(' + scale + ')',
      transformOrigin: 'top left',
      padding: 72,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: grain
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Label, {
    tone: "ink",
    style: {
      fontSize: 28,
      letterSpacing: '0.14em'
    }
  }, "Objection log \xB7 04"), /*#__PURE__*/React.createElement(Badge, {
    tone: "signal",
    variant: "solid",
    style: {
      fontSize: 24,
      padding: '10px 18px'
    }
  }, "Live calls")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 148,
      lineHeight: 0.95,
      letterSpacing: '-0.03em',
      maxWidth: '13ch'
    }
  }, "38 reps said ", /*#__PURE__*/React.createElement("span", {
    style: {
      borderBottom: '14px solid var(--signal)'
    }
  }, "no")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      fontFamily: 'var(--font-numeric)',
      fontVariantNumeric: 'tabular-nums',
      fontSize: 40,
      color: 'var(--rule-gray)'
    }
  }, "Here is the log, all 38")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-numeric)',
      fontVariantNumeric: 'tabular-nums',
      fontSize: 34,
      color: 'var(--ink)'
    }
  }, "1,912 calls")));
}

/** Lower third: Ink bar on Paper, name in Fraunces, role in small caps. */
function LowerThird({
  scale = 0.5
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...FRAME,
      width: 1280,
      height: 720,
      transform: 'scale(' + scale + ')',
      transformOrigin: 'top left',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 64
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: grain
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'stretch',
      border: '1px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      background: 'var(--signal)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink)',
      color: 'var(--paper)',
      padding: '20px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 48,
      lineHeight: 1.05
    }
  }, "Chase Cochran"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 22,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'var(--rule-gray)'
    }
  }, "Founder \xB7 B2 Bookings"))));
}

/** End card: wordmark left aligned, one Signal CTA. */
function EndCard({
  scale = 0.5
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...FRAME,
      width: 1280,
      height: 720,
      transform: 'scale(' + scale + ')',
      transformOrigin: 'top left',
      padding: 96,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: grain
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 54
  }), /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      borderTop: '2px solid var(--ink)',
      margin: '24px 0 0'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Label, {
    tone: "ink",
    style: {
      fontSize: 26,
      letterSpacing: '0.14em'
    }
  }, "Next"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 82,
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      maxWidth: '20ch'
    }
  }, "Book a pipeline review"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'inline-block',
      background: 'var(--signal)',
      color: 'var(--paper)',
      padding: '18px 28px',
      borderRadius: 3,
      fontFamily: 'var(--font-sans)',
      fontSize: 30,
      fontWeight: 600,
      letterSpacing: '0.01em'
    }
  }, "b2bookings.com/call")));
}

/** LinkedIn quote card, 1080 square. A page torn from a ledger. */
function QuoteCard({
  scale = 0.55
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...FRAME,
      width: 1080,
      height: 1080,
      transform: 'scale(' + scale + ')',
      transformOrigin: 'top left',
      padding: 88,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: grain
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Label, {
    tone: "ink",
    style: {
      fontSize: 24,
      letterSpacing: '0.14em'
    }
  }, "Field note 12"), /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      borderTop: '1px solid var(--rule-40)',
      margin: '20px 0 0'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 82,
      lineHeight: 1.1,
      letterSpacing: '-0.02em'
    }
  }, "Sales efficiency comes from ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontWeight: 400
    }
  }, "who"), " gets called, not how many calls happen."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      borderTop: '1px solid var(--rule-40)',
      margin: '0 0 20px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 22,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'var(--rule-gray)'
    }
  }, "Sep 2026"))));
}
function Shelf({
  title,
  note,
  w,
  h,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderBottom: '1px solid var(--ink)',
      paddingBottom: 6
    }
  }, /*#__PURE__*/React.createElement(Label, {
    tone: "ink"
  }, title), /*#__PURE__*/React.createElement(Label, null, note)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: h,
      overflow: 'hidden'
    }
  }, children));
}
function MediaApp() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '32px 24px 64px',
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(Shelf, {
    title: "YouTube thumbnail",
    note: "1280 \xD7 720 \xB7 shown at 50%",
    w: 640,
    h: 360
  }, /*#__PURE__*/React.createElement(Thumbnail, null)), /*#__PURE__*/React.createElement(Shelf, {
    title: "Lower third",
    note: "1280 \xD7 720 frame \xB7 shown at 50%",
    w: 640,
    h: 360
  }, /*#__PURE__*/React.createElement(LowerThird, null)), /*#__PURE__*/React.createElement(Shelf, {
    title: "End card",
    note: "1280 \xD7 720 \xB7 shown at 50%",
    w: 640,
    h: 360
  }, /*#__PURE__*/React.createElement(EndCard, null)), /*#__PURE__*/React.createElement(Shelf, {
    title: "LinkedIn quote card",
    note: "1080 \xD7 1080 \xB7 shown at 55%",
    w: 594,
    h: 594
  }, /*#__PURE__*/React.createElement(QuoteCard, null)));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(MediaApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/media/Graphics.jsx", error: String((e && e.message) || e) }); }

// ui_kits/proposal/Pages.jsx
try { (() => {
Object.assign(window, window.B2BookingsDesignSystem_4e1b02);
Object.assign(window, {
  useState: React.useState,
  useEffect: React.useEffect
});
const SHEET = {
  width: 816,
  minHeight: 1056,
  background: 'var(--paper)',
  border: '1px solid var(--border-hairline)',
  padding: '72px 72px 56px',
  display: 'flex',
  flexDirection: 'column'
};
function CoverPage() {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      ...SHEET,
      justifyContent: 'space-between',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(var(--ink) 1.1px,transparent 1.1px)',
      backgroundSize: '6px 6px',
      opacity: 0.035
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 22
  }), /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      borderTop: '1px solid var(--ink)',
      margin: '8px 0 0'
    }
  }), /*#__PURE__*/React.createElement(Label, {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, "Proposal \u2014 Meridian Field Systems"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 'var(--space-6)',
      fontSize: 52,
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      maxWidth: '16ch'
    }
  }, "Outbound pipeline, built and run for you"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-6)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 1.6,
      maxWidth: '46ch'
    }
  }, "A two-rep pod, live within three weeks, delivering 30+ qualified opportunities a month into your two AEs.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Scorecard, {
    stats: [{
      value: '30+',
      label: 'Opportunities / mo'
    }, {
      value: '3 wks',
      label: 'To first meeting',
      tone: 'green'
    }, {
      value: '$17,800',
      label: 'Retainer / mo'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Label, null, "Prepared by Chase Cochran"), /*#__PURE__*/React.createElement(Label, null, "19 September 2026"))));
}
function ScopePage() {
  return /*#__PURE__*/React.createElement("article", {
    style: SHEET
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      paddingBottom: 8,
      borderBottom: '1px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement(Label, {
    tone: "green"
  }, "Scope of work"), /*#__PURE__*/React.createElement(Label, null, "Page 2 of 4")), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 'var(--space-8)',
      fontSize: 'var(--text-h1)',
      color: 'var(--ledger-green)'
    }
  }, "What we run"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--text-body)',
      lineHeight: 1.6,
      maxWidth: '62ch'
    }
  }, "Management, training, refinement, reporting and CRM integration are handled in house. You approve the ICP definition and the script, then read the log."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'w',
      header: 'Phase'
    }, {
      key: 'd',
      header: 'Deliverable'
    }, {
      key: 'o',
      header: 'Owner',
      tone: 'muted'
    }],
    rows: [{
      w: 'Week 1',
      d: 'ICP definition, named account list, disqualifiers',
      o: 'B2 Bookings'
    }, {
      w: 'Week 1',
      d: 'Script, objection framework, call scoring rubric',
      o: 'B2 Bookings'
    }, {
      w: 'Week 2',
      d: 'Dialing begins, recordings shared daily',
      o: 'B2 Bookings'
    }, {
      w: 'Week 3',
      d: 'First booked meetings handed to AEs',
      o: 'Joint'
    }, {
      w: 'Monthly',
      d: 'Objection log, tally, pipeline report',
      o: 'B2 Bookings'
    }]
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 'var(--space-12)'
    }
  }, "Out of scope"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--text-body)',
      maxWidth: '62ch'
    }
  }, "Closing, demos, proposal writing and contract negotiation stay with your AEs. We book the meeting and hand over the record."), /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-6)',
      borderTop: '1px solid var(--border-hairline)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Label, null, "B2 Bookings \xB7 Proposal"), /*#__PURE__*/React.createElement(Label, null, "Meridian Field Systems")));
}
function EconomicsPage() {
  return /*#__PURE__*/React.createElement("article", {
    style: SHEET
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      paddingBottom: 8,
      borderBottom: '1px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement(Label, {
    tone: "green"
  }, "Unit economics"), /*#__PURE__*/React.createElement(Label, null, "Page 3 of 4")), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 'var(--space-8)',
      fontSize: 'var(--text-h1)',
      color: 'var(--ledger-green)'
    }
  }, "The math on a two-rep pod"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 'var(--space-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    dense: true,
    columns: [{
      key: 'k',
      header: 'Input'
    }, {
      key: 'v',
      header: 'Value',
      align: 'right',
      numeric: true
    }],
    rows: [{
      k: 'Conversations / mo',
      v: '2,400'
    }, {
      k: 'Convo to meeting',
      v: '3.5%'
    }, {
      k: 'Meetings / mo',
      v: '84'
    }, {
      k: 'Meeting to opp',
      v: '36%'
    }, {
      k: 'Average deal size',
      v: '$24,000'
    }, {
      k: 'Close rate',
      v: '22%'
    }]
  }), /*#__PURE__*/React.createElement(BarChart, {
    height: 190,
    data: [{
      label: 'M1',
      value: 14
    }, {
      label: 'M2',
      value: 22
    }, {
      label: 'M3',
      value: 30
    }, {
      label: 'M4',
      value: 33
    }],
    highlightIndex: 3
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(Scorecard, {
    label: "Projected, month four",
    stats: [{
      value: '$158,400',
      label: 'Revenue / mo'
    }, {
      value: '$2,697',
      label: 'Cost per closed deal'
    }, {
      value: '8.9x',
      label: 'Return on retainer',
      tone: 'signal'
    }]
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-8)',
      fontSize: 'var(--text-caption)',
      color: 'var(--rule-gray)',
      maxWidth: '68ch'
    }
  }, "Projection uses your reported close rate and average deal size. Conversation to meeting is our trailing twelve month figure across seven pods."), /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-6)',
      borderTop: '1px solid var(--border-hairline)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Label, null, "B2 Bookings \xB7 Proposal"), /*#__PURE__*/React.createElement(Label, null, "Meridian Field Systems")));
}
function TermsPage() {
  return /*#__PURE__*/React.createElement("article", {
    style: SHEET
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      paddingBottom: 8,
      borderBottom: '1px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement(Label, {
    tone: "green"
  }, "Terms"), /*#__PURE__*/React.createElement(Label, null, "Page 4 of 4")), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 'var(--space-8)',
      fontSize: 'var(--text-h1)',
      color: 'var(--ledger-green)'
    }
  }, "Pricing and terms"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'i',
      header: 'Line item'
    }, {
      key: 'q',
      header: 'Qty',
      align: 'right',
      numeric: true
    }, {
      key: 'r',
      header: 'Rate',
      align: 'right',
      numeric: true
    }, {
      key: 't',
      header: 'Monthly',
      align: 'right',
      numeric: true
    }],
    rows: [{
      i: 'BDR pod, dedicated rep',
      q: '2',
      r: '$8,900',
      t: '$17,800'
    }, {
      i: 'Management, training, QA',
      q: '—',
      r: 'Included',
      t: '$0'
    }, {
      i: 'Dialer, data, enrichment',
      q: '—',
      r: 'Included',
      t: '$0'
    }, {
      i: 'Reporting and CRM integration',
      q: '—',
      r: 'Included',
      t: '$0'
    }],
    caption: "Billed monthly in advance. 30 days notice either side. Scale up or down in units of one rep."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-12)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "Authorized, Meridian Field Systems"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      borderBottom: '1px solid var(--ink)'
    }
  }), /*#__PURE__*/React.createElement(Label, {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, "Name and date")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "Authorized, B2 Bookings"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      borderBottom: '1px solid var(--ink)'
    }
  }), /*#__PURE__*/React.createElement(Label, {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, "Chase Cochran"))), /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-6)',
      borderTop: '1px solid var(--border-hairline)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Label, null, "B2 Bookings \xB7 Proposal"), /*#__PURE__*/React.createElement(Label, null, "chase@b2bookings.com")));
}
function ProposalApp() {
  const pages = [['Cover', /*#__PURE__*/React.createElement(CoverPage, {
    key: "c"
  })], ['Scope', /*#__PURE__*/React.createElement(ScopePage, {
    key: "s"
  })], ['Economics', /*#__PURE__*/React.createElement(EconomicsPage, {
    key: "e"
  })], ['Terms', /*#__PURE__*/React.createElement(TermsPage, {
    key: "t"
  })]];
  const [i, setI] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 24,
      padding: '24px 0 64px'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: pages.map(p => p[0]),
    value: pages[i][0],
    onChange: v => setI(pages.findIndex(p => p[0] === v)),
    style: {
      width: 816
    }
  }), pages[i][1]);
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(ProposalApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/proposal/Pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
function BookingDialog({
  open,
  onClose
}) {
  const [step, setStep] = useState(0);
  const [arr, setArr] = useState('$3M-$8M');
  const [ok, setOk] = useState(true);
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: onClose,
    label: step === 0 ? 'Pipeline review' : 'Logged',
    title: step === 0 ? 'Thirty minutes, on the phone' : 'Booked. Details are in your inbox.',
    footer: step === 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => setStep(1)
    }, "Confirm")) : /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => {
        setStep(0);
        onClose();
      }
    }, "Close")
  }, step === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    id: "d-email",
    label: "Work email",
    placeholder: "you@company.com"
  }), /*#__PURE__*/React.createElement(Select, {
    id: "d-arr",
    label: "Current ARR",
    value: arr,
    onChange: e => setArr(e.target.value),
    options: ['Under $3M', '$3M-$8M', 'Over $8M']
  }), /*#__PURE__*/React.createElement(Checkbox, {
    id: "d-ok",
    label: "Send the objection log template too",
    checked: ok,
    onChange: e => setOk(e.target.checked)
  })) : /*#__PURE__*/React.createElement(Scorecard, {
    stats: [{
      value: 'Thu',
      label: 'Day'
    }, {
      value: '10:30',
      label: 'Central'
    }, {
      value: '30m',
      label: 'Length'
    }]
  }));
}
function App() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Method');
  const go = label => {
    setActive(label);
    const id = {
      Method: 'method',
      Numbers: 'numbers',
      Proof: 'proof',
      Pricing: 'pricing'
    }[label];
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.offsetTop - 60,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    items: ['Method', 'Numbers', 'Proof', 'Pricing'],
    active: active,
    onNavigate: go,
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => setOpen(true)
    }, "Book a call")
  })), /*#__PURE__*/React.createElement(Hero, {
    onBook: () => setOpen(true)
  }), /*#__PURE__*/React.createElement(MethodSection, null), /*#__PURE__*/React.createElement(CalculatorSection, null), /*#__PURE__*/React.createElement(ProofSection, null), /*#__PURE__*/React.createElement(PricingSection, {
    onBook: () => setOpen(true)
  }), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(BookingDialog, {
    open: open,
    onClose: () => setOpen(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CalculatorSection.jsx
try { (() => {
function CalculatorSection() {
  const [res, setRes] = useState(null);
  return /*#__PURE__*/React.createElement(Section, {
    id: "numbers",
    tone: "deep",
    label: "Unit economics",
    title: "Run the math before you talk to us",
    lede: "Three inputs, no email gate. If the return does not clear 3x on the retainer, we will tell you that in the first call."
  }, /*#__PURE__*/React.createElement(RoiCalculator, {
    monthlyFee: 9500,
    onChange: setRes,
    style: {
      background: 'var(--paper)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      gap: 'var(--space-8)',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Label, null, "Assumption \xB7 conversation to meeting held at 3.5%"), /*#__PURE__*/React.createElement(Tooltip, {
    content: "A conversation is 60+ seconds with a decision maker. Gatekeeper calls are not counted."
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      borderBottom: '1px solid var(--rule-40)'
    }
  }, "What counts as a conversation"))));
}
Object.assign(window, {
  CalculatorSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CalculatorSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--ink)',
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '64px var(--page-margin)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,5fr) minmax(0,4fr) minmax(0,3fr)',
      gap: 'var(--space-12)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
    size: 26
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--ink)',
      maxWidth: '34ch'
    }
  }, "Outsourced BDR teams for sales-led B2B SaaS. Operated, not consulted.")), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    id: "foot-email",
    label: "Get the objection log template",
    placeholder: "you@company.com",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary"
  }, "Send it"), sent && /*#__PURE__*/React.createElement(Toast, {
    tone: "deep",
    message: "Sent",
    meta: "REF 4192"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Label, null, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 'var(--text-body-sm)'
    }
  }, "chase@b2bookings.com"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 'var(--text-body-sm)'
    }
  }, "LinkedIn"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 'var(--text-body-sm)'
    }
  }, "YouTube"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '16px var(--page-margin)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Label, null, "\xA9 2026 B2 Bookings"), /*#__PURE__*/React.createElement(Label, null, "Numbers current to Sep 2026"))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero({
  onBook
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(var(--ink) 1.1px,transparent 1.1px)',
      backgroundSize: '6px 6px',
      opacity: 0.035,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '96px var(--page-margin) 64px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,7fr) minmax(0,5fr)',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, "Outsourced BDR team \xB7 Live in 3 weeks"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.75rem,5.4vw,4rem)',
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      maxWidth: '18ch'
    }
  }, "Predictable pipeline, not pipeline ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontWeight: 400
    }
  }, "roulette"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-6)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 1.6,
      maxWidth: '52ch'
    }
  }, "15+ qualified opportunities a month for $3M to $8M ARR sales-led SaaS. A full BDR team, managed, trained and reported on in house. Phone conversations at scale, every one logged."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "signal",
    size: "lg",
    onClick: onBook
  }, "Book a pipeline review"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "#method"
  }, "See how it runs")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-12)',
      paddingTop: 'var(--space-6)',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Scorecard, {
    stats: [{
      value: /*#__PURE__*/React.createElement(CountUp, {
        value: 1912
      }),
      label: 'Conversations, Q3'
    }, {
      value: /*#__PURE__*/React.createElement(CountUp, {
        value: 41
      }),
      label: 'Meetings booked'
    }, {
      value: /*#__PURE__*/React.createElement(CountUp, {
        value: 1.24,
        decimals: 2,
        prefix: "$",
        suffix: "M"
      }),
      label: 'Pipeline created',
      tone: 'green'
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    caption: "Call recordings on the desk, South Dakota site visit",
    height: 300
  }), /*#__PURE__*/React.createElement(DataTable, {
    dense: true,
    columns: [{
      key: 'day',
      header: 'Day'
    }, {
      key: 'convos',
      header: 'Convos',
      align: 'right',
      numeric: true
    }, {
      key: 'set',
      header: 'Set',
      align: 'right',
      numeric: true
    }],
    rows: [{
      day: 'Mon',
      convos: '126',
      set: '2'
    }, {
      day: 'Tue',
      convos: '131',
      set: '1'
    }, {
      day: 'Wed',
      convos: '118',
      set: '3'
    }, {
      day: 'Thu',
      convos: '141',
      set: '2'
    }],
    caption: "Last four working days, one client pod"
  }))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MethodSection.jsx
try { (() => {
function MethodSection() {
  const steps = [{
    title: 'List Build',
    label: 'Week 1',
    body: 'Named accounts only. Titles, triggers and disqualifiers agreed before a single dial. No scraped lists, no spray.',
    detail: /*#__PURE__*/React.createElement(DataTable, {
      dense: true,
      columns: [{
        key: 'a',
        header: 'Segment'
      }, {
        key: 'b',
        header: 'Accounts',
        align: 'right',
        numeric: true
      }, {
        key: 'c',
        header: 'Contacts',
        align: 'right',
        numeric: true
      }],
      rows: [{
        a: 'Field service SaaS',
        b: '212',
        c: '604'
      }, {
        a: 'Construction tech',
        b: '164',
        c: '441'
      }, {
        a: 'Disqualified, under $3M',
        b: '88',
        c: '0'
      }]
    })
  }, {
    title: 'The Call',
    label: 'Week 2',
    body: 'Phone first. Every conversation recorded, scored against the ICP definition and attached to the account record.',
    detail: /*#__PURE__*/React.createElement(Scorecard, {
      stats: [{
        value: '126',
        label: 'Dials / rep / day'
      }, {
        value: '11%',
        label: 'Connect rate'
      }, {
        value: '3.5%',
        label: 'Convo to meeting',
        tone: 'green'
      }]
    })
  }, {
    title: 'The Objection Log',
    label: 'Ongoing',
    body: 'Objections logged verbatim, grouped weekly, fed back into the script. You see the log, not a summary of it.',
    detail: /*#__PURE__*/React.createElement(DataTable, {
      dense: true,
      columns: [{
        key: 'o',
        header: 'Objection'
      }, {
        key: 'n',
        header: 'Count',
        align: 'right',
        numeric: true
      }, {
        key: 'r',
        header: 'Rebuttal shipped',
        tone: 'muted'
      }],
      rows: [{
        o: 'Already have an SDR',
        n: '38',
        r: 'Wk 2'
      }, {
        o: 'Budget frozen to Q1',
        n: '24',
        r: 'Wk 3'
      }, {
        o: 'Using a competitor',
        n: '17',
        r: 'Wk 3'
      }]
    })
  }, {
    title: 'The Booked Meeting',
    label: 'Week 3 on',
    body: '15+ qualified opportunities a month, handed to your AEs with the call notes and the recording attached.',
    detail: /*#__PURE__*/React.createElement(BarChart, {
      height: 150,
      data: [{
        label: 'M1',
        value: 9
      }, {
        label: 'M2',
        value: 14
      }, {
        label: 'M3',
        value: 18
      }, {
        label: 'M4',
        value: 23
      }],
      highlightIndex: 3
    })
  }];
  return /*#__PURE__*/React.createElement(Section, {
    id: "method",
    label: "The method",
    title: "Four stages, all of them visible to you",
    lede: "Sales efficiency comes from who gets called, not how many calls happen. Each stage produces an artifact you can read."
  }, /*#__PURE__*/React.createElement(ProcessSequence, {
    steps: steps
  }));
}
Object.assign(window, {
  MethodSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MethodSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PricingSection.jsx
try { (() => {
function PricingSection({
  onBook
}) {
  return /*#__PURE__*/React.createElement(Section, {
    id: "pricing",
    label: "Pricing",
    title: "One retainer, turn it up or down",
    lede: "A growth lever, not a fixed cost. Pods scale in units of one rep; notice is 30 days."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,7fr) minmax(0,5fr)',
      gap: 'var(--space-12)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'pod',
      header: 'Pod'
    }, {
      key: 'convos',
      header: 'Convos / mo',
      align: 'right',
      numeric: true
    }, {
      key: 'meetings',
      header: 'Meetings / mo',
      align: 'right',
      numeric: true
    }, {
      key: 'fee',
      header: 'Retainer / mo',
      align: 'right',
      numeric: true
    }],
    rows: [{
      pod: 'One rep',
      convos: '1,200',
      meetings: '15+',
      fee: '$9,500'
    }, {
      pod: 'Two reps',
      convos: '2,400',
      meetings: '30+',
      fee: '$17,800'
    }, {
      pod: 'Three reps',
      convos: '3,600',
      meetings: '45+',
      fee: '$25,200'
    }],
    caption: "Management, training, dialer, data and reporting included. No per-seat tooling billed on."
  }), /*#__PURE__*/React.createElement(LedgerPanel, {
    label: "What you are not paying for",
    title: "No headcount risk",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      full: true,
      onClick: onBook
    }, "Book a pipeline review")
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      fontSize: 'var(--text-body-sm)'
    }
  }, ['Recruiting and ramp payroll', 'Dialer, data and enrichment stack', 'Management time on coaching', 'Severance when a rep churns'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "minus",
    size: 14,
    color: "var(--rule-gray)"
  }), t))))));
}
Object.assign(window, {
  PricingSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PricingSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProofSection.jsx
try { (() => {
function ProofSection() {
  const [pillar, setPillar] = useState('Predictability');
  const panels = {
    Predictability: {
      stats: [{
        value: '15+',
        label: 'Opportunities / month'
      }, {
        value: '3 wks',
        label: 'To first meeting',
        tone: 'green'
      }, {
        value: '100%',
        label: 'Calls logged'
      }],
      body: 'Month three onward, output holds inside a band rather than swinging with one rep\'s week.'
    },
    'ICP fit': {
      stats: [{
        value: '88',
        label: 'Accounts disqualified'
      }, {
        value: '71%',
        label: 'Meetings held',
        tone: 'green'
      }, {
        value: '0',
        label: 'AE hours on non-ICP'
      }],
      body: 'Disqualification is part of the deliverable. Your AEs stop paying for our volume with their calendars.'
    },
    Cost: {
      stats: [{
        value: '$232',
        label: 'Cost per conversation'
      }, {
        value: '$1,050',
        label: 'Cost per meeting'
      }, {
        value: '9.4x',
        label: 'Return on retainer',
        tone: 'signal'
      }],
      body: 'No hiring risk, no ramp payroll, no tool stack. The retainer is the whole cost line.'
    }
  };
  const p = panels[pillar];
  return /*#__PURE__*/React.createElement(Section, {
    id: "proof",
    label: "Proof",
    title: "Organized by the claim it backs up",
    lede: "Three pillars, three sets of numbers. Same client pod, Q3 2026."
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: Object.keys(panels),
    value: pillar,
    onChange: setPillar
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,7fr) minmax(0,5fr)',
      gap: 'var(--space-12)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Scorecard, {
    stats: p.stats
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-6)',
      fontSize: 'var(--text-body)',
      maxWidth: '52ch'
    }
  }, p.body)), /*#__PURE__*/React.createElement(Card, {
    label: "Case study 03",
    title: "41 meetings in 90 days",
    footer: /*#__PURE__*/React.createElement(Label, null, "Mining services \xB7 $6M ARR \xB7 2 AEs")
  }, "List rebuilt from scratch, 1,912 conversations logged, copper-bar mailer sent to the top 40 accounts by hand. Two closed deals inside the quarter."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-12)',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    caption: "Mailers written by hand, before the run",
    height: 200
  }), /*#__PURE__*/React.createElement(PhotoSlot, {
    caption: "Plant visit, aggregate client site",
    height: 200
  }), /*#__PURE__*/React.createElement(PhotoSlot, {
    caption: "Objection log, printed and marked up",
    height: 200
  })));
}
Object.assign(window, {
  ProofSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProofSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
Object.assign(window, window.B2BookingsDesignSystem_4e1b02);
Object.assign(window, {
  useState: React.useState,
  useEffect: React.useEffect,
  useRef: React.useRef,
  useMemo: React.useMemo
});

/** Lucide glyph. Icons are line-based, 1.75px stroke, Ink or Rule Gray only. */
function Icon({
  name,
  size = 18,
  color = 'var(--ink)'
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [name]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      color,
      width: size,
      height: size
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    width: size,
    height: size,
    strokeWidth: "1.75"
  }));
}

/** Labeled placeholder standing in for a real, on-location photograph. */
function PhotoSlot({
  caption,
  height = 320,
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      background: 'var(--paper-deep)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      height,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 'var(--space-4)',
      position: 'relative',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(var(--ink) 1.1px,transparent 1.1px)',
      backgroundSize: '6px 6px',
      opacity: 0.06
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--rule-gray)'
    }
  }, "Photo \xB7 ", caption));
}
function Section({
  label,
  title,
  lede,
  children,
  id,
  tone = 'paper',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: tone === 'deep' ? 'var(--paper-deep)' : 'var(--paper)',
      borderTop: '1px solid var(--border-hairline)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '96px var(--page-margin)'
    }
  }, (label || title) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,7fr) minmax(0,5fr)',
      gap: 'var(--space-12)',
      alignItems: 'end',
      marginBottom: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement(Label, {
    style: {
      marginBottom: 'var(--space-4)'
    }
  }, label), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-h1)',
      maxWidth: '22ch'
    }
  }, title)), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body)',
      color: 'var(--ink)',
      maxWidth: '44ch'
    }
  }, lede)), children));
}
Object.assign(window, {
  Icon,
  PhotoSlot,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.LedgerPanel = __ds_scope.LedgerPanel;

__ds_ns.Scorecard = __ds_scope.Scorecard;

__ds_ns.StatDisplay = __ds_scope.StatDisplay;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.CountUp = __ds_scope.CountUp;

__ds_ns.ProcessSequence = __ds_scope.ProcessSequence;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.RoiCalculator = __ds_scope.RoiCalculator;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
