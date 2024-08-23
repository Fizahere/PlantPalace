import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import { Colors } from "../assets/constants/colors";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";

const MainLayout = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        height={"113vh"}
        bg={colorMode === "light" ? Colors.WHITE : Colors.DARKTHEME}
      >
        <Box px={{base:10,md:20}}>
        <Navbar />
        <Home/>
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;
