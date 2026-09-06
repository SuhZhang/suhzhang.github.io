#!/usr/bin/env python3
"""Serve the built homepage on this computer only (Python standard library)."""
import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import threading
import webbrowser


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=3000)
    parser.add_argument('--no-open', action='store_true')
    args = parser.parse_args()
    root = Path(__file__).resolve().parent / 'dist' / 'client'
    if not (root / 'index.html').is_file():
        raise SystemExit('Static page not found. Run pnpm build first.')
    handler = partial(SimpleHTTPRequestHandler, directory=str(root))
    try:
        server = ThreadingHTTPServer(('127.0.0.1', args.port), handler)
    except OSError as exc:
        # A fresh local port avoids replacing or assuming the identity of a running server.
        if exc.errno not in (48, 98, 10048):
            raise
        server = ThreadingHTTPServer(('127.0.0.1', 0), handler)
    url = 'http://localhost:%s/' % server.server_port
    print('Shihua Zhang — local homepage', flush=True)
    print('Local: %s' % url, flush=True)
    print('Press Ctrl+C to stop.', flush=True)
    if not args.no_open:
        threading.Timer(0.4, webbrowser.open, args=(url,)).start()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nPreview stopped.')
    finally:
        server.server_close()


if __name__ == '__main__':
    main()
