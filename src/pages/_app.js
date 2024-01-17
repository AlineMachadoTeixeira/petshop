import "@/styles/globals.css";

import Layout from "@/components/ui/Layout"; // Importando o Layout da pasta src - components - layout.jsx

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
