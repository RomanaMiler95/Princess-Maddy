import { useEffect } from "react";

export default function DeftformEmbed() {
  useEffect(() => {
    // Dodaj Deftform skriptu
    const existingScript = document.querySelector(
      'script[src="https://cdn.deftform.com/embed.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://cdn.deftform.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Dodaj custom stilove
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      /* Opći stilovi */
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

      /* Ukloni bijelu pozadinu i shadow - forma i success poruka */
      .deftform > div,
      .deftform > div > div,
      .deftform .success,
      .deftform .success > div {
        color-scheme: normal !important;
        background: none !important;
        background-color: none !important;
        box-shadow: none !important;
      }

      .deftform {
        color-scheme: normal !important;
        background: none !important;
        background-color: none !important;
        box-shadow: none !important;
      }
      
      /* Kako ste culi za mene */
      @media only screen and (max-width: 1023px) {
        .grid-cols-2 {
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        }
      }

      @media only screen and (min-width: 1024px) {
	      .grid-cols-2 {
          grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
	      }
      }

}

    `;
    document.head.appendChild(styleTag);

    // Riješi bijelu pozadinu nakon što forma učita
    const interval = setInterval(() => {
      const wrapper = document.querySelector(".deftform > div");
      if (wrapper) {
        (wrapper as HTMLElement).style.background = "transparent";
        (wrapper as HTMLElement).style.boxShadow = "none";
      }

      const inner = document.querySelector(".deftform > div > div");
      if (inner) {
        (inner as HTMLElement).style.background = "transparent";
        (inner as HTMLElement).style.boxShadow = "none";
      }

      const success = document.querySelector(".deftform .success");
      if (success) {
        (success as HTMLElement).style.background = "transparent";
        (success as HTMLElement).style.boxShadow = "none";
        (success as HTMLElement).style.height = "auto";
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
          overflow: "hidden", // ✨ važno za auto-height
        }}
      />
    </div>
  );
}
