import { log } from "console";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: any;
}

const Layout: React.FC<Props> = ({ children }) => {
  const user = {
    id: "1",
    name: "ishan",
  };
  console.log("children type", typeof children);

  return (
    <>
      <Header />
      {typeof children === "function" ? children(user) : children}
      <Footer />
    </>
  );
};

export default Layout;
