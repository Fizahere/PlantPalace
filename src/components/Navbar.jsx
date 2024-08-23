import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Icon,
  useColorMode,
  Divider,
} from "@chakra-ui/react";
import { App_Icons } from "../assets/constants/icons";
import { Colors } from "../assets/constants/colors";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

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
            Logo
          </Box>
          <HStack spacing={8} alignItems="center">
            <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: "none",}}
                href="#"
              >
                Home
              </Link>
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: "none",  }}
                href="#"
              >
                About
              </Link>
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: "none", }}
                href="#"
              >
                Feedback
              </Link>
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: "none", }}
                href="#"
              >
                Contact
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems="center">
            <Button colorScheme="teal" variant="" size="sm" mr={3}>
              Login
            </Button>
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
              <Link href="#">Home</Link>
              <Link href="#">About</Link>
              <Link href="#">Feedback</Link>
              <Link href="#">Contact</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Navbar;
