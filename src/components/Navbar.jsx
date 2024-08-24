import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  // Link,
  Icon,
  useColorMode,
  Divider,
} from "@chakra-ui/react";
import { App_Icons } from "../assets/constants/icons";
import { Colors } from "../assets/constants/colors";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../pages/Cart";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const cartDrawer = useDisclosure();
  const navigate=useNavigate()

  return (
    <>
      <Box>
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
          <Box fontWeight="bold">
            <Icon as={App_Icons.LOGO} fontSize={30} /> Plant Palace
          </Box>
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
              >
                Home
              </Link>
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: "none" }}
                to="/plant-palace/about-us"
              >
                About
              </Link>
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: "none" }}
                to={"/plant-palace/feedback"}
              >
                Feedback
              </Link>
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: "none" }}
                to="/plant-palace/contact-us"
              >
                Contact
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems="center">
            <Button
              onClick={() => navigate("/plant-palace/login")}
              colorScheme="teal"
              variant=""
              size="sm"
              mr={3}
            >
              Login
            </Button>
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
