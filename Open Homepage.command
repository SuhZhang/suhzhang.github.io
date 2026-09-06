#!/bin/zsh
cd -- "${0:A:h}"
if command -v python3 >/dev/null 2>&1; then
  exec python3 preview.py
elif [[ -x /Users/shihuazhang/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 ]]; then
  exec /Users/shihuazhang/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 preview.py
else
  print 'Python 3 is required to open this local preview.'
  read '?Press Enter to close.'
fi
