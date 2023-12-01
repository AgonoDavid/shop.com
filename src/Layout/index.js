import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <Box display="flex" flexDir="column" minHeight="100vh">
      <Navbar />
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
