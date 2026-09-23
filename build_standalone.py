#!/usr/bin/env python3
"""Bundle index.html + support.js + the _ds/ design-system CSS/JS + any
uploads/ images into one self-contained HTML file with no local file
dependencies. React, ReactDOM, Babel-standalone, and Google Fonts stay as
CDN references (loaded by support.js / the <link> tags at runtime) —
everything else is inlined.

Usage: python3 build_standalone.py [output_path]
Default output: index.standalone.html
"""
import base64
import mimetypes
import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent

def main():
    out_path = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "index.standalone.html"

    html = (ROOT / "index.html").read_text()
    support_js = (ROOT / "support.js").read_text()

    # Inline support.js
    html = html.replace(
        '<script src="./support.js"></script>',
        f"<script>\n{support_js}\n</script>",
    )

    # Inline every _ds/<path> stylesheet <link> and bundle <script>, whichever design system is in use
    def replace_ds_link(match):
        rel_path = match.group(1)
        css = (ROOT / "_ds" / rel_path).read_text()
        return f"<style>\n{css}\n</style>"

    html = re.sub(
        r'<link rel="stylesheet" href="_ds/([^"]+)"\s*/?>',
        replace_ds_link,
        html,
    )

    def replace_ds_script(match):
        rel_path = match.group(1)
        js = (ROOT / "_ds" / rel_path).read_text()
        return f"<script>\n{js}\n</script>"

    html = re.sub(
        r'<script src="_ds/([^"]+)"></script>',
        replace_ds_script,
        html,
    )

    # Inline every uploads/<file> reference as a base64 data URI
    def replace_upload(match):
        rel_path = match.group(1)
        file_path = ROOT / "uploads" / rel_path
        data = file_path.read_bytes()
        mime, _ = mimetypes.guess_type(str(file_path))
        b64 = base64.b64encode(data).decode("ascii")
        return f"data:{mime};base64,{b64}"

    html = re.sub(r"uploads/([^\"']+)", replace_upload, html)

    out_path.write_text(html)
    print(f"Wrote {out_path} ({out_path.stat().st_size / 1_000_000:.2f} MB)")

if __name__ == "__main__":
    main()
