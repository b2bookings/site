#!/usr/bin/env python3
"""Bundle index.html + support.js + _ds/ styles + uploads/ images into one
self-contained HTML file with no local file dependencies. React, ReactDOM,
Babel-standalone, and Google Fonts stay as CDN references (loaded by
support.js / the <link> tags at runtime) — everything else is inlined.

Usage: python3 build_standalone.py [output_path]
Default output: index.standalone.html
"""
import base64
import mimetypes
import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent
DS_DIR = ROOT / "_ds/industry-a3d9f70c-7acd-4d26-8864-793d309e7ba0"

def main():
    out_path = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "index.standalone.html"

    html = (ROOT / "index.html").read_text()
    support_js = (ROOT / "support.js").read_text()
    styles_css = (DS_DIR / "styles.css").read_text()
    ds_bundle_js = (DS_DIR / "_ds_bundle.js").read_text()

    # Inline support.js
    html = html.replace(
        '<script src="./support.js"></script>',
        f"<script>\n{support_js}\n</script>",
    )

    # Inline the design-system stylesheet
    html = html.replace(
        f'<link rel="stylesheet" href="_ds/industry-a3d9f70c-7acd-4d26-8864-793d309e7ba0/styles.css" />',
        f"<style>\n{styles_css}\n</style>",
    )

    # Inline the (near-empty) design-system bundle script
    html = html.replace(
        '<script src="_ds/industry-a3d9f70c-7acd-4d26-8864-793d309e7ba0/_ds_bundle.js"></script>',
        f"<script>\n{ds_bundle_js}\n</script>",
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
    print(f"Wrote {out_path} ({out_path.stat().st_size / 1_000_000:.1f} MB)")

if __name__ == "__main__":
    main()
