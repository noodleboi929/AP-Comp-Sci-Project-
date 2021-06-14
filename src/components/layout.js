import React from "react";

import Header from "./header";
import Footer from "./footer";
import "../Styles/index.scss";
import * as layoutStyles from "./layout.module.scss";
const Layout = ({ removeTopMargin = false, children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />

        <div style={{ marginTop: removeTopMargin ? "0" : "150px" }}>
          {children}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
