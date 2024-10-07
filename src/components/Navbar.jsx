import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Icon,
  useColorMode,
  Divider,
  Text,
} from "@chakra-ui/react";
import { App_Icons } from "../assets/constants/icons";
import { Colors } from "../assets/constants/colors";
import { Link, useLocation } from "react-router-dom";
import Cart from "../pages/Cart";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const cartDrawer = useDisclosure();
  const [user, setUser] = useState(localStorage.getItem("user"));
  const cart = localStorage.getItem("cart");
  const cartCount = cart ? JSON.parse(cart).length : 0;

  const location = useLocation();

  return (
    <>
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bg={colorMode === "light" ? "white" : "gray.800"}
        zIndex={999}
        boxShadow="sm"
      >
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={
              isOpen ? (
                <Icon as={App_Icons.CLOSE} />
              ) : (
                <Icon as={App_Icons.HAMBURGER} />
              )
            }
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Link to={"/"}>
            <Flex ml={2}>
              <Icon as={App_Icons.LOGO} fontSize={{ base: 20, md: 25 }} />{" "}
              <Text
                mt={1}
                ml={1}
                fontSize={{ base: 15, md: 20 }}
                fontWeight="bold"
              >
                Plant Palace
              </Text>
            </Flex>
          </Link>
          <HStack spacing={8} alignItems="center">
            <HStack
              fontSize={15}
              fontWeight={"400"}
              as="nav"
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: "none" }}
                to="/"
                style={{
                  borderBottom:
                    location.pathname === "/" ? "2px solid #4d5c3e" : "none",
                }}
              >
                Home
              </Link>
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: "none" }}
                to="/plant-palace/about-us"
                style={{
                  borderBottom:
                    location.pathname === "/plant-palace/about-us"
                      ? "2px solid #4d5c3e"
                      : "none",
                }}
              >
                About
              </Link>
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: "none" }}
                to={"/plant-palace/feedback"}
                style={{
                  borderBottom:
                    location.pathname === "/plant-palace/feedback"
                      ? "2px solid #4d5c3e"
                      : "none",
                }}
              >
                Feedback
              </Link>
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: "none" }}
                to="/plant-palace/contact-us"
                style={{
                  borderBottom:
                    location.pathname === "/plant-palace/contact-us"
                      ? "2px solid #4d5c3e"
                      : "none",
                }}
              >
                Contact
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems="center">
            {user ? (
              <Button
                bg={"transparent"}
                _hover={{ bg: "transparent" }}
                mr={3}
                fontSize={"15px"}
                fontWeight={"bold"}
                onClick={() => {
                  if (confirm("Are you sure?")) {
                    localStorage.removeItem("user");
                    location.href = "/";
                  }
                }}
              >
                Logout
              </Button>
            ) : (
              <Link
                to={"/plant-palace/login"}
                colorScheme="teal"
                variant=""
                size="sm"
              >
                <Text fontWeight={"bold"} mr={2}>
                  Login
                </Text>
              </Link>
            )}
            <Divider
              orientation="vertical"
              borderColor="inherit"
              height={"20px"}
              borderWidth="0.5px"
              mr={2}
            />
            <Text>{cartCount}</Text>
            <IconButton
              icon={<Icon as={App_Icons.CART} fontSize={22} />}
              onClick={cartDrawer.onOpen}
              bg={"transparent"}
            />
            <Divider
              orientation="vertical"
              borderColor="inherit"
              height={"20px"}
              borderWidth="0.5px"
            />
            <IconButton
              ml={3}
              bg={"transparent"}
              icon={
                colorMode === "light" ? (
                  <Icon
                    as={App_Icons.MOON}
                    fontSize={22}
                    color={Colors.BLACK}
                  />
                ) : (
                  <Icon
                    as={App_Icons.SUN}
                    color={Colors.WHITE}
                    fontSize={26}
                    fontWeight={"bold"}
                  />
                )
              }
              onClick={toggleColorMode}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" spacing={4}>
              <Link to={"/"}>Home</Link>
              <Link to={"/plant-palace/about-us"}>About</Link>
              <Link to={"/plant-palace/feedback"}>Feedback</Link>
              <Link to={"/plant-palace/contact-us"}>Contact</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Cart disclosure={cartDrawer} />
    </>
  );
}

export default Navbar;
