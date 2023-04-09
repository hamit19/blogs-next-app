import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, isShow, setIsShow }) => {
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
      <Header isShow={isShow} setIsShow={setIsShow} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
