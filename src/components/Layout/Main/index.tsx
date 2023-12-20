import React from "react";
import Header from "../Header";
// import Footer from "../Footer";
// import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  hideHeader?: boolean;
}

const Layout: React.FC<Props> = ({ children, hideHeader }) => {
  return (
    <React.Fragment>
      <Header />
      <div>{children}</div>
    </React.Fragment>
  );
};

export default Layout;
