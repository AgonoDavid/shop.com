import React, { useState } from "react";
import { useProductContext } from "../../productContext";
import Layout from "../../Layout";
import { Box, Image, Flex, Text, Button } from "@chakra-ui/react";
const Cart = () => {
  const { addeditem, updateQuantity } = useProductContext();

  const onIncrease = (itemId) => {
    updateQuantity(itemId, 1);
  };

  const onDecrease = (itemId) => {
    updateQuantity(itemId, -1);
  };

  return (
    <Layout>
      <Box bg={"#F2F0F1"}>
        <Box className="max-w-[600px] m-auto">
          {!addeditem ? (
            <p>your cart is empty</p>
          ) : (
            <Box p={"20px"}>
              {addeditem.map((item) => (
                <DisplayCart
                  key={item.id}
                  item={item}
                  onDecrease={onDecrease}
                  onIncrease={onIncrease}
                />
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Layout>
  );
};

const DisplayCart = ({ item, onDecrease, onIncrease }) => {
  return (
    <Box bg={"white"} w={"100%"} mb={"20px"} rounded={"10px"} p={"15px"}>
      <Flex>
        <Box w={"10%"} mt={"auto"} mb={"auto"}>
          <Image src={item.image} />
        </Box>
        <Box mt={"auto"} mb={"auto"} w={"50%"} pl={"25px"}>
          <Text>${item.price}</Text>
          <Text fontSize={"10px"}>{item.title}</Text>
        </Box>
        <Box>
          <Button onClick={() => onDecrease(item.id)}>-</Button>
          <Button>{item.qty}</Button>
          <Button onClick={() => onIncrease(item.id)}>+</Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Cart;
