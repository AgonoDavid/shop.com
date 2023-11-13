import React from "react";
import versace from "../assets/Group (1).png";
import CK from "../assets/Group (2).png";
import Gucci from "../assets/gucci-logo-1 1.png";
import Prada from "../assets/prada-logo-1 1.png";
import zara from "../assets/zara-logo-1 1.png";

const Brands = () => {
  return (
    <section className=" bg-black">
      <div className=" max-w-[1100px] m-auto flex items-center justify-between w-full py-5">
        <img src={versace} alt="versace" className=" align-middle" />

        <img src={zara} alt="zara" className=" align-middle" />

        <img src={Gucci} alt="gucci" className=" align-middle" />

        <img src={Prada} alt="prada" className=" align-middle" />

        <img src={CK} alt="ck" className=" align-middle" />
      </div>
    </section>
  );
};

export default Brands;
