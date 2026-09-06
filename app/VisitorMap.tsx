'use client';

import { useEffect, useRef, useState } from 'react';

export default function VisitorMap({ widgetId }: { widgetId: string }) {
  const container = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const [localPreview, setLocalPreview] = useState(false);
  const id = widgetId.trim();

  useEffect(() => {
    setLocalPreview(['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname));
  }, []);

  useEffect(() => {
    const host = container.current;
    if (!id || !host) return;

    // Insert in the map container: the provider places its widget after this script.
    const script = document.createElement('script');
    script.id = 'mapmyvisitors';
    script.async = true;
    const width = Math.min(300, Math.floor(host.clientWidth) || 300);
    const parameters = new URLSearchParams({ cl: 'ffffff', w: String(width), t: 'tt', d: id });
    script.src = `https://mapmyvisitors.com/map.js?${parameters}`;
    script.onerror = () => setFailed(true);
    host.appendChild(script);
    return () => {
      script.onerror = null;
      host.replaceChildren();
    };
  }, [id]);

  if (!id && !localPreview) return null;

  return <section className="visitor-map" aria-labelledby="visitors-title">
    <h2 id="visitors-title">Visitors</h2>
    {id ? <>
      <div className="visitor-widget" ref={container} />
      {failed && <p className="visitor-caption" role="status">Visitor map is temporarily unavailable.</p>}
      <noscript><p className="visitor-caption">Enable JavaScript to view visitor statistics.</p></noscript>
    </> : <>
      <img src="/images/visitor-map-preview.svg" alt="World map preview without visitor data" width="300" height="150" loading="lazy" />
      <p className="visitor-caption">Local preview · statistics not enabled</p>
    </>}
  </section>;
}
