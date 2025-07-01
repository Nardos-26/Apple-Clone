import React from "react";
import Header from "../Component/Header/Header";
import Footer from "../Footer/Fotter";
import { Outlet } from "react-router-dom";

const SharedLayOut = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayOut;
