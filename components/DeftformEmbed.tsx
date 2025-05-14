import { useEffect } from 'react';

export default function DeftformEmbed() {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://cdn.deftform.com/embed.js"]');
    if (existingScript) return; // Izbjegni duplo učitavanje

    const script = document.createElement('script');
    script.src = 'https://cdn.deftform.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
      <div
        className="deftform"
        data-form-id="91cc4bd3-057c-496a-84a2-d8a6abe5e81e"
        data-form-width="100%"
        data-form-align="center"
        data-form-auto-height="1"
        style={{
          width: '100%',
          maxWidth: '600px',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          padding: '2rem',
        }}
      />
    </div>
  );
}
