export default function DeftformEmbed() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
      <iframe
        src="https://deftform.com/forms/91cc4bd3-057c-496a-84a2-d8a6abe5e81e"
        width="100%"
        height="720"
        style={{
          maxWidth: '600px',
          border: 'none',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          background: 'white',
        }}
        allowFullScreen
      />
    </div>
  );
}
