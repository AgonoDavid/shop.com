import Layout from "../../Layout";
import React from "react";
import heroImage from "../../assets/Group 16.png";
import { Button, Divider, Text } from "@chakra-ui/react";
import ProductsList from "../../api";
import Brands from "../brands";

const Home = () => {
  return (
    <Layout>
      <section className="bg-[#F2F0F1] mt-2">
        <main className="max-w-[1100px] m-auto flex justify-between items-center w-full">
          <div className="w-[50%]">
            <div className=" py-3">
              <Text
                className="font-Teko text-[90px] leading-[75px] pb-2 "
                textColor={"#113946"}
              >
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </Text>
              <p className=" text-[14px] font-Quicksand font-medium">
                Browse through our meticulously crafted garments, designed to
                bring out your individuality and cater to your sense of style
              </p>
            </div>
            <Button bg={"#113946"} textColor={"white"} my={"10px"}>
              Shop Now
            </Button>
            <div className=" flex justify-between w-[90%] h-[85px] py-3 ">
              <div>
                <p className=" text-slate-950 font-semibold text-3xl">200+</p>
                <p className=" font-Quicksand text-[13px]">
                  International Brands
                </p>
              </div>
              <Divider orientation="vertical" border={"1px solid #000000"} />
              <div>
                <p className=" text-slate-950 font-semibold text-3xl">2,000+</p>
                <p className=" font-Quicksand text-[13px]">
                  High-Quality Products
                </p>
              </div>
              <Divider orientation="vertical" border={"1px solid #000000"} />
              <div>
                <p className=" text-slate-950 font-semibold text-3xl">
                  30,000+
                </p>
                <p className=" font-Quicksand text-[13px]">Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <img src={heroImage} alt="heroimage" />
          </div>
        </main>
      </section>
      <Brands />

      <ProductsList />
    </Layout>
  );
};

export default Home;
