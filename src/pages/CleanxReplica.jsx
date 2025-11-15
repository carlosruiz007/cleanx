import React, { useEffect, useRef, useState } from 'react';

const CleanxReplica = () => {
  const [html, setHtml] = useState('');
  const [error, setError] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    fetch('/cleanx.html')
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load snapshot: ${res.status}`);
        return res.text();
      })
      .then(setHtml)
      .catch((e) => setError(e.message));
  }, []);

  useEffect(() => {
    if (!html || !containerRef.current) return;
    const root = containerRef.current;
    const all = root.querySelectorAll('*');
    let targetEl = null;
    for (const el of all) {
      const t = (el.textContent || '').trim();
      if (!t) continue;
      if (t.includes('Choose House Cleaning SF for exceptional cleaning services')) {
        targetEl = el;
        break;
      }
    }
    if (targetEl) {
      const parent = targetEl.parentElement || targetEl;
      const heading = document.createElement('h2');
      heading.textContent = 'Reasons to Choose Crystal Cleaners, Today';
      heading.setAttribute('style', 'font-size: 40px; line-height: 1.2; font-weight: 800; margin: 0 0 16px 0; color: #0F172A;');
      parent.insertBefore(heading, targetEl);

      const imgWrap = document.createElement('div');
      imgWrap.setAttribute('style', 'margin-top: 20px;');
      const img = document.createElement('img');
      img.src = '/assets/crystal-cleaners.jpg';
      img.alt = 'Crystal Cleaners equipment';
      img.setAttribute('style', 'width: 100%; max-width: 520px; height: auto; border-radius: 24px; display: block;');
      imgWrap.appendChild(img);

      if (parent.nextSibling) parent.parentElement.insertBefore(imgWrap, parent.nextSibling);
      else parent.parentElement.appendChild(imgWrap);
    }

    // Replace the three standards images
    const imageReplacements = {
      '/images/standards-2.jpg': '/images/QvAhgEKjZxWg0F8bTNHV5GA3NI.avif',
      '/images/standards-1.jpg': '/images/rb1S2aSX4fvYj9YqC8rafU2pYk.avif',
      '/images/standards-3.jpg': '/images/ThqCXCKro1Xagv1MRhRDkMv1XUA.avif'
    };
    
    const allImages = root.querySelectorAll('img');
    allImages.forEach((img) => {
      const src = img.getAttribute('src');
      if (imageReplacements[src]) {
        img.src = imageReplacements[src];
      }
    });

    // Hide floating editor/badge UI via CSS at render time (non-destructive)
    const style = document.createElement('style');
    style.textContent = `
      #__framer-editorbar,
      #__framer-editorbar-container,
      #__framer-badge-container,
      iframe[src*="framer.com"],
      a[href*="framer.com"] {
        display: none !important;
        visibility: hidden !important;
        pointer-events: none !important;
      }
    `;
    root.appendChild(style);
  }, [html]);

  if (error) {
    return (
      <div className="p-6 text-red-600">
        Error loading snapshot: {error}
      </div>
    );
  }

  if (!html) {
    return <div className="p-6">Loading Cleanx homepage snapshot…</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div ref={containerRef} dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
} 

export default CleanxReplica;
