#!/bin/zsh
set -euo pipefail

STATE_DIR="/tmp/recovery-grief-preview"
PID_FILE="$STATE_DIR/website-preview.pid"
PORT_FILE="$STATE_DIR/website-preview.port"

preview_pid=""
preview_port=""

if [[ -f "$PID_FILE" ]]; then
  preview_pid="$(<"$PID_FILE")"
fi

if [[ -f "$PORT_FILE" ]]; then
  preview_port="$(<"$PORT_FILE")"
fi

if [[ -n "$preview_pid" ]] && kill -0 "$preview_pid" 2>/dev/null; then
  kill "$preview_pid" 2>/dev/null || true

  for _ in {1..20}; do
    if ! kill -0 "$preview_pid" 2>/dev/null; then
      rm -f "$PID_FILE" "$PORT_FILE"
      if [[ -n "$preview_port" ]]; then
        echo "The website preview server on port $preview_port was stopped."
      else
        echo "The website preview server was stopped."
      fi
      exit 0
    fi
    sleep 0.2
  done

  kill -9 "$preview_pid" 2>/dev/null || true
  rm -f "$PID_FILE" "$PORT_FILE"
  if [[ -n "$preview_port" ]]; then
    echo "The website preview server on port $preview_port was force-stopped."
  else
    echo "The website preview server was force-stopped."
  fi
  exit 0
fi

if [[ -n "$preview_port" ]]; then
  listening_pid="$(/usr/sbin/lsof -tiTCP:"$preview_port" -sTCP:LISTEN 2>/dev/null | head -n 1 || true)"
  if [[ -n "$listening_pid" ]]; then
    kill "$listening_pid" 2>/dev/null || true
    sleep 0.2
    rm -f "$PID_FILE" "$PORT_FILE"
    echo "The website preview server on port $preview_port was stopped."
    exit 0
  fi
fi

rm -f "$PID_FILE" "$PORT_FILE"
echo "No managed website preview server was found."
