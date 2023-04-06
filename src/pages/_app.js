import Layout from "@/components/containers/layout";
import { Toaster } from "react-hot-toast";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Toaster />
    </Layout>
  );
}
