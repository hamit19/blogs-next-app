import Layout from "@/components/containers/layout";
import { Toaster } from "react-hot-toast";

import "../styles/globals.css";
import { useEffect, useState } from "react";
import { wrapper } from "src/redux/store";
import { useDispatch } from "react-redux";
import { fetchUserDataMiddleware } from "src/redux/userAuth/usersMiddlewares";

function App({ Component, pageProps }) {
  const [isShow, setIsShow] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserDataMiddleware());
  }, [dispatch]);

  return (
    <Layout isShow={isShow} setIsShow={setIsShow}>
      <Component {...pageProps} />
      <Toaster />
    </Layout>
  );
}

export default wrapper.withRedux(App);
