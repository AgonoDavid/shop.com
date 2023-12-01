import React from "react";
import logo from "../../assets/SHOP.CO.png";
import searchIcon from "../../assets/Frame (2).png";
import cartIcon from "../../assets/Frame.png";
import profileIcon from "../../assets/Frame (1).png";
import { Link } from "react-router-dom";
import { useProductContext } from "../../productContext";
import { Box, Flex } from "@chakra-ui/react";
const Navbar = () => {
  const { addeditem } = useProductContext();

  return (
    <nav>
      <main className=" max-w-[1100px] m-auto flex justify-between w-full py-[30px]">
        <div className=" flex items-center w-[15%]">
          <Link to="/">
            <img src={logo} alt="logo" className=" align-middle w-[90%]" />
          </Link>
        </div>
        <div className="flex items-center w-[35%] justify-around font-Quicksand text-sm">
          <select>
            <option>Shop</option>
            <option>sell</option>
          </select>
          <p>On sale</p>
          <p>New Arrivals</p>
          <p>Brands</p>
        </div>
        <div className="flex items-center rounded-[20px] px-2 py-1 w-[50%] bg-[#F0F0F0]">
          <div className=" w-[10%]">
            <img src={searchIcon} alt="searchIcon" className=" w-[50%]" />
          </div>
          <div className=" w-[90%] ">
            <input
              type="text"
              placeholder="search"
              style={{ outline: "none", backgroundColor: "#F0F0F0 " }}
            ></input>
          </div>
        </div>
        <div className="flex items-center  w-[10%] justify-evenly">
          <Link to="/cart">
            <Flex>
              <img
                src={cartIcon}
                alt="cart"
                className=" align-middle w-[80%]"
              />
              <Box
                textColor={"white"}
                className="font-Teko text-[15px]"
                bg={"#113946"}
                p={"2px"}
                h={"25px"}
                rounded={"20px"}
              >
                {addeditem.length}
              </Box>
            </Flex>
          </Link>
          <img
            src={profileIcon}
            alt="profile"
            className=" align-middle w-[20%]"
          />
        </div>
      </main>
    </nav>
  );
};

export default Navbar;
