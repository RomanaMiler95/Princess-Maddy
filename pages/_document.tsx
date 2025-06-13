import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="hr">
      <Head>
        {/* CookieYes GDPR banner */}
        <script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/fd0b4009f8f4283d867bebe6/script.js"
          defer
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
