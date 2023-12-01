import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./productContext";

import React, { lazy, Suspense } from "react";

const Home = lazy(() => import("./app/home"));
const Details = lazy(() => import("./app/details"));
const Cart = lazy(() => import("./app/cart"));

function App() {
  return (
    <ProductProvider>
      <Suspense>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/details" element={<Details />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ProductProvider>
  );
}

export default App;
