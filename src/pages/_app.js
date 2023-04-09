import Layout from "@/components/containers/layout";
import { Toaster } from "react-hot-toast";

import "../styles/globals.css";
import AuthProvider from "@/context/authContext";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <AuthProvider>
      <Layout isShow={isShow} setIsShow={setIsShow}>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </AuthProvider>
  );
}
