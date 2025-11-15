import React, { useEffect, useRef, useState } from 'react';

function CleanxHome() {
  const [html, setHtml] = useState('');
  const [error, setError] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    fetch('/cleanx.html')
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load: ${res.status}`);
        return res.text();
      })
      .then(setHtml)
      .catch((e) => setError(e.message));
  }, []);

  useEffect(() => {
    if (!html || !containerRef.current) return;
    
    // Hide Framer editor UI elements
    const style = document.createElement('style');
    style.textContent = `
      /* Hide Framer promo/buy elements */
      .framer-qbdszy-container,
      [data-framer-name="Remove This Buy Promo"],
      [name="Remove This Buy Promo"],
      [data-framer-name="Remove This Buy Button"],
      [name="Remove This Buy Button"],
      .hidden-ejv6hz,
      .framer-j4ugry,
      [data-framer-name="Bottom"],
      .framer-13yxzio,
      [data-framer-name="Backdrop"],
      .framer-jnuwbw,
      [data-framer-name="Border"],
      .framer-g7oZR,
      .framer-1um7t9d,
      [data-framer-name="Text"],
      .framer-hcsc7,
      .framer-e50co,
      [data-framer-name="Logo"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
        position: absolute !important;
        left: -9999px !important;
      }
      
      /* Hide Framer editor/badge elements */
      #__framer-editorbar,
      #__framer-editorbar-container,
      #__framer-editorbar-label,
      #__framer-editorbar-button,
      #__framer-badge-container,
      iframe[src*="framer.com/edit"],
      a[href*="framer.com"][target="_blank"],
      a[href*="framerbite.com"],
      a[href*="grayblocks.net"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
        position: absolute !important;
        left: -9999px !important;
      }
      
      /* Hide any fixed position elements in bottom-right corner (likely badges) */
      [style*="position: fixed"][style*="bottom"][style*="right"],
      [style*="position:fixed"][style*="bottom"][style*="right"] {
        display: none !important;
      }
      
      /* Ensure smooth rendering */
      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `;
    containerRef.current.appendChild(style);
    
    // Remove elements from DOM directly as backup
    setTimeout(() => {
      const elementsToRemove = [
        '.framer-qbdszy-container',
        '[data-framer-name="Remove This Buy Promo"]',
        '[name="Remove This Buy Promo"]',
        '.framer-j4ugry',
        '[data-framer-name="Bottom"]',
        '.framer-13yxzio',
        '[data-framer-name="Backdrop"]',
        '.framer-jnuwbw',
        '[data-framer-name="Border"]',
        '.framer-g7oZR',
        '.framer-1um7t9d',
        '[data-framer-name="Text"]',
        '.framer-hcsc7',
        '.framer-e50co',
        '[data-framer-name="Logo"]',
        'a[href*="framerbite.com"]',
        'a[href*="grayblocks.net"]'
      ];
      
      elementsToRemove.forEach(selector => {
        const elements = containerRef.current.querySelectorAll(selector);
        elements.forEach(el => el.remove());
      });
    }, 100);
  }, [html]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Page</h1>
          <p className="text-gray-600">{error}</p>
          <a href="/" className="mt-4 inline-block text-blue-600 hover:underline">
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  if (!html) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Cleanx homepage...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div ref={containerRef} dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default CleanxHome;
