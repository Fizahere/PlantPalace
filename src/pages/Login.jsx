import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  VStack,
  Button,
  Text,
} from "@chakra-ui/react";
import { Colors } from "../assets/constants/colors";
import { App_Icons } from "../assets/constants/icons";
import CustomInputFeild from "../components/Mist/InputFields";

function Login() {
  const [isShowPassword, setShowPassword] = useState(true);

  return (
    <>
      <HStack
        spacing={0}
        position="relative"
        zIndex={1}
        height="100vh"
        alignItems="stretch"
        color={Colors.font}
      >
        <Box
          width={{
            base: "100%",
            md: "40%",
          }}
          // h={600}
          bg={Colors.DARKTHEME}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box>
            <Box bg={Colors.ThemePurple} w={300} p={4}>
              <Heading fontWeight={"bold"}>Login</Heading>
            </Box>
            <VStack spacing={5} w={300} py={8} px={4} bg={Colors.white}>
              <CustomInputFeild text={"Email**"} icon={App_Icons.MAIL} />
              <CustomInputFeild
                text={"Password**"}
                icon={isShowPassword ? App_Icons.CLOSEDEYE : App_Icons.OPENEYE}
                type={isShowPassword ? "password" : "text"}
                onClickHandler={() =>
                  isShowPassword
                    ? setShowPassword(false)
                    : setShowPassword(true)
                }
              />
              <Box>
                <Button
                  bg={Colors.THEMEBUTTON}
                  color={Colors.WHITE}
                  _hover={{ bg: Colors.THEMEBUTTON }}
                  w={270}
                  p={3}
                  borderRadius={8}
                  fontWeight={"bold"}
                >
                  Login
                </Button>
                <Text textAlign={"center"}>or</Text>
                <Button
                  w={270}
                  p={2}
                  borderRadius={18}
                  fontSize={"0.8rem"}
                  bg={Colors.lightGrey}
                >
                  <Flex justifyContent={"center"} textAlign={"center"}>
                    <Icon
                      fontSize={"1.2rem"}
                      mr={"6px"}
                      as={App_Icons.GOOGLE}
                    />
                    <Box mt={"2px"}>Continue With Google</Box>
                  </Flex>
                </Button>
              </Box>
            </VStack>
          </Box>
        </Box>
        <Box
          width={{
            base: "0%",
            md: "60%",
          }}
          bgGradient="linear(to-b, #30362f, #4d5c3e)"
          display={{
            base: "none",
            md: "inline-flex",
          }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Icon as={App_Icons.LOGO} color={Colors.WHITE} fontSize={100} />
          <Text mt={6} ml={1} fontSize={{ base: 25, md: 30 }} fontWeight="bold">
            Plant Palace
          </Text>
        </Box>
      </HStack>
    </>
  );
}

export default Login;
