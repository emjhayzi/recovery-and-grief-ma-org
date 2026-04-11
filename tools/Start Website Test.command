#!/bin/zsh
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
STATE_DIR="/tmp/recovery-grief-preview"
PID_FILE="$STATE_DIR/website-preview.pid"
PORT_FILE="$STATE_DIR/website-preview.port"
START_PAGE="index.html"

mkdir -p "$STATE_DIR"

existing_pid=""
existing_port=""

if [[ -f "$PID_FILE" ]]; then
  existing_pid="$(<"$PID_FILE")"
fi

if [[ -f "$PORT_FILE" ]]; then
  existing_port="$(<"$PORT_FILE")"
fi

if [[ -n "$existing_pid" ]] && kill -0 "$existing_pid" 2>/dev/null; then
  if [[ -n "$existing_port" ]]; then
    target_url="http://127.0.0.1:${existing_port}/${START_PAGE}"
    echo "Reusing the existing Recovery and Grief preview at $target_url"
    open "$target_url"
    exit 0
  fi
fi

port="$(
  /usr/bin/python3 - <<'PY'
import socket

for port in range(8000, 8011):
    sock = socket.socket()
    try:
        sock.bind(("127.0.0.1", port))
    except OSError:
        continue
    else:
        print(port)
        sock.close()
        break
PY
)"

if [[ -z "$port" ]]; then
  echo "Could not find an open local preview port."
  read -r "?Press Return to close..."
  exit 1
fi

target_url="http://127.0.0.1:${port}/${START_PAGE}"

echo "Starting website preview at $target_url"
echo "Browser will open automatically in a moment..."
echo ""

cd "$REPO_ROOT"
/usr/bin/python3 "$SCRIPT_DIR/preview-server.py" \
  --root "$REPO_ROOT" \
  --port "$port" \
  --start-page "$START_PAGE" \
  --pid-file "$PID_FILE" \
  --port-file "$PORT_FILE" \
  --open-browser
