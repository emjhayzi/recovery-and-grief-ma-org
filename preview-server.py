import argparse
import mimetypes
import os
import sys
import webbrowser
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlparse


def build_handler(root: Path, start_page: str):
    start_page = start_page.lstrip("/\\")

    class StaticHandler(BaseHTTPRequestHandler):
        def do_GET(self):
            parsed = urlparse(self.path)
            request_path = unquote(parsed.path)
            relative_path = start_page if request_path == "/" else request_path.lstrip("/\\")
            target = (root / relative_path).resolve()

            if root not in target.parents and target != root:
                self._send_bytes(403, b"403 Forbidden", "text/plain; charset=utf-8")
                return

            if not target.exists() or not target.is_file():
                self._send_bytes(404, b"404 Not Found", "text/plain; charset=utf-8")
                return

            data = target.read_bytes()
            content_type = mimetypes.guess_type(str(target))[0] or "application/octet-stream"
            self._send_bytes(200, data, content_type)

        def _send_bytes(self, status: int, data: bytes, content_type: str):
            self.send_response(status)
            self.send_header("Content-Type", content_type)
            self.send_header("Content-Length", str(len(data)))
            self.end_headers()
            self.wfile.write(data)

        def log_message(self, format, *args):
            return

    return StaticHandler


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", required=True)
    parser.add_argument("--port", type=int, required=True)
    parser.add_argument("--start-page", required=True)
    parser.add_argument("--pid-file", required=True)
    parser.add_argument("--port-file", required=True)
    parser.add_argument("--open-browser", action="store_true")
    args = parser.parse_args()

    root = Path(args.root).resolve()
    pid_file = Path(args.pid_file)
    port_file = Path(args.port_file)
    pid_file.parent.mkdir(parents=True, exist_ok=True)

    server = ThreadingHTTPServer(("127.0.0.1", args.port), build_handler(root, args.start_page))
    start_page = args.start_page.lstrip("/\\")
    url = f"http://127.0.0.1:{args.port}/{start_page}"

    pid_file.write_text(str(os.getpid()), encoding="ascii")
    port_file.write_text(str(args.port), encoding="ascii")

    print(f"Recovery and Grief preview is running at {url}")
    print("Keep this window open while you test the site.")
    print("Press Ctrl+C in this window to stop the preview server.")
    print("")
    sys.stdout.flush()

    if args.open_browser:
        webbrowser.open(url)

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
        for path in (pid_file, port_file):
            try:
                path.unlink()
            except FileNotFoundError:
                pass

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
