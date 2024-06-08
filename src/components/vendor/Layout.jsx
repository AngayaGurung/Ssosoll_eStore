import React from "react";
import VendorHeader from "./VendorHeader";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <VendorHeader />
      <Outlet />
    </>
  );
};

export default Layout;
