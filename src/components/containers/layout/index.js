import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";

const Layout = ({ children, isShow, setIsShow }) => {
  const router = useRouter();

  useEffect(() => {
    window.onclick = () => {
      isShow && setIsShow(false);
    };

    window.onscroll = () => {
      isShow && setIsShow(false);
    };
  }, [isShow]);

  return (
    <>
      <Header
        isShow={isShow}
        setIsShow={setIsShow}
        sticky={router.route.includes("/blogs")}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
