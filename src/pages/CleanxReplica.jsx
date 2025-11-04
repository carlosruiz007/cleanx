import React, { useEffect, useState } from 'react';

const CleanxReplica = () => {
  const [html, setHtml] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/cleanx.html')
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load snapshot: ${res.status}`);
        return res.text();
      })
      .then(setHtml)
      .catch((e) => setError(e.message));
  }, []);

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
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default CleanxReplica;
