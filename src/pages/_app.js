import "@/styles/globals.css";

import Layout from "@/components/layout"; // Importando o Layout da pasta src - components - layout.jsx

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout />
      <Component {...pageProps} />;
    </>
  );
}
