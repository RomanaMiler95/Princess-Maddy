import { useEffect } from "react";

export default function DeftformEmbed() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://cdn.deftform.com/embed.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://cdn.deftform.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // DODANO: pokušaj promijeniti stilove nakon što forma bude ubačena
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
