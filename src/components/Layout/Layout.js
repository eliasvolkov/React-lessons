import React from "react";
import Header from "../Header/Header";
import "./Layout.scss";

const Layout = props => {
  return (
    <div className="layout">
      <Header />
      <div className="container">
        <main>{props.children}</main>
      </div>
    </div>
  );
};

export default Layout;
