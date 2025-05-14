import { useEffect } from 'react';

export default function DeftformEmbed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.deftform.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="deftform"
      data-form-id="91cc4bd3-057c-496a-84a2-d8a6abe5e81e"
      data-form-width="100%"
      data-form-align="center"
      data-form-auto-height="1"
    />
  );
}
