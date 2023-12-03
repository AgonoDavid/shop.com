import { React, useEffect } from "react";
import Cart from "../app/cart";
import { Card, Image, Box, Text, Button, color } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductContext } from "../productContext";
const ProductsList = () => {
  const { product, AddToCart, fetchData } = useProductContext();

  useEffect(() => {
    fetchData();
  });

  return (
    <div className=" grid grid-cols-4 max-w-[1100px] m-auto justify-between w-[80%] mt-8">
      {product.map((product) => (
        <Cards
          info={product}
          key={product.id}
          handleAddtoCart={() => AddToCart(product)}
        >
          <Cart />
        </Cards>
      ))}
    </div>
  );
};

function Cards({ info, handleAddtoCart }) {
  return (
    <Box
      w={"80%"}
      maxW={"1000px"}
      m={"auto"}
      mb={"20px"}
      rounded={"10px"}
      boxShadow="0 3px 25px grey"
    >
      <Card w="100%" p={"10px"} bg={"#F2F0F1"}>
        <Link to="/cart">
          <Box p={"30px"}>
            <Image
              src={info.image}
              alt=""
              w={"100%"}
              h={"100px"}
              objectFit={"contain"}
              bg={"#F2F0F1"}
            />
          </Box>
        </Link>
        <Box>
          <Text fontWeight={"bold"} textColor={"#BCA37F"}>
            ${info.price}
          </Text>
          <Text
            fontSize={"10px"}
            my={"4px"}
            fontFamily="Quicksand"
            fontWeight={"semibold"}
          >
            {info.title}
          </Text>
        </Box>
        <Button
          onClick={handleAddtoCart}
          bg={"#113946"}
          textColor={"white"}
          _hover={{ textColor: "White", bg: "#BCA37F" }}
        >
          Add to cart
        </Button>
      </Card>
    </Box>
  );
}

export default ProductsList;
