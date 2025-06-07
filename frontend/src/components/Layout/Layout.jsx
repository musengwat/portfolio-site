// portfolio-frontend/src/components/Layout/Layout.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollIndicator from "../UI/ScrollIndicator/ScrollIndicator";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <ScrollIndicator />
      <Header />
      <main className="layout__main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
