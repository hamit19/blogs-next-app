import Layout from "@/components/containers/layout";
import { Toaster } from "react-hot-toast";

import "../styles/globals.css";
import AuthProvider from "@/context/authContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </AuthProvider>
  );
}
