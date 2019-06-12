import React from "react";
import Header from "../Header/Header";
import "./Layout.scss";
import SideNav from "../SideNav/SideNav";

const Layout = props => {
  return (
    <div className="layout">
      <div className="layout__row">
        <div className="layout__aside">
          <SideNav />
        </div>
        <div className="layout__content">
          <Header />
          <main>{props.children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
