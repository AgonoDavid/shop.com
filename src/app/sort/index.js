import React from "react";
import { Box, Text } from "@chakra-ui/react";
const Sort = () => {
  return (
    <div className=" w-[20%] mt-8">
      <Box align={"center"}>
        <Text>Filter By Category</Text>
        <select className=" mt-5">
          <option>All</option>
          <option>Electronics</option>
          <option>Male Clothes</option>
          <option>Female Clothes</option>
        </select>
      </Box>
    </div>
  );
};

export default Sort;
