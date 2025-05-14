import { useEffect } from "react";

export default function DeftformEmbed() {
  useEffect(() => {
    // Ubacuje Deftform skriptu ako već nije ubačena
    const existingScript = document.querySelector(
      'script[src="https://cdn.deftform.com/embed.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://cdn.deftform.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // ➕ Ovdje ubacujemo naš custom CSS u head
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      .deftform input, 
      .deftform select, 
      .deftform label, 
      .deftform button {
        font-size: 18px !important;
        border-radius: 10px !important;
      }

      .deftform .cs_button {
        background-color: #EF5B94 !important;
        color: white !important;
        padding: 16px 28px !important;
        border: none !important;
        font-weight: 600 !important;
      }

      .deftform .cs_button:hover {
        background-color: #427AC4 !important;
      }

      .deftform .text-xs, 
      .deftform .grecaptcha-logo {
        display: none !important;
      }

      .deftform .grid-cols-2 {
        grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
      }

      @media only screen and (min-width: 768px) {
        .deftform .grid-cols-2 {
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        }
      }

      .deftform > div,
      .deftform > div > div {
        background: transparent !important;
        box-shadow: none !important;
      }
    `;
    document.head.appendChild(styleTag);

    // ➕ Uklanjamo default bijelu pozadinu i shadow kad se forma učita
    const interval = setInterval(() => {
      const formContainer = document.querySelector(".deftform > div");
      if (formContainer) {
        (formContainer as HTMLElement).style.background = "transparent";
        (formContainer as HTMLElement).style.boxShadow = "none";
        clearInterval(interval);
      }
    }, 500);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: "1rem",
      }}
    >
      <div
        className="deftform"
        data-form-id="91cc4bd3-057c-496a-84a2-d8a6abe5e81e"
        data-form-width="100%"
        data-form-align="center"
        data-form-auto-height="1"
        style={{
          width: "100%",
          maxWidth: "100%",
        }}
      />
    </div>
  );
}
