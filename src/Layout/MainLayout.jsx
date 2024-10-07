import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import { Colors } from "../assets/constants/colors";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        height={"auto"}
        bg={colorMode === "light" ? Colors.WHITE : Colors.DARKTHEME}
      >
        <Box px={{ base: 10, md: 20 }}>
          <Navbar />
          <Box mt={20}>
          <Outlet />
          </Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;
