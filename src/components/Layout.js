import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Brands from "./Brands";
import ProductsList from "../api/ProductsList";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Brands />
      <ProductsList />
    </div>
  );
};

export default Layout;
