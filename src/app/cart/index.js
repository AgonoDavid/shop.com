import React from "react";
import { useProductContext } from "../../productContext";
import Layout from "../../Layout";
import { Box, Image, Flex, Text, Button } from "@chakra-ui/react";
const Cart = () => {
  const { addeditem, updateQuantity, ClearCart, RemoveItem } =
    useProductContext();

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
                  ClearCart={ClearCart}
                  addeditem={addeditem}
                  RemoveItem={RemoveItem}
                />
              ))}
            </Box>
          )}
          <div>
            {addeditem.length >= 1 ? (
              <Button
                onClick={ClearCart}
                _hover={{ textColor: "White", bg: "#BCA37F" }}
                bg={"#113946"}
                textColor={"white"}
              >
                Empty Cart
              </Button>
            ) : (
              <Text textAlign={"center"}>Your Cart is Empty</Text>
            )}
          </div>
        </Box>
      </Box>
    </Layout>
  );
};

const DisplayCart = ({ item, onDecrease, onIncrease, RemoveItem }) => {
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
        <Button onClick={RemoveItem}>❌</Button>
      </Flex>
    </Box>
  );
};

export default Cart;
