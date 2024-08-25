import React from "react";
import { Box, Center, Heading, Text,Flex, } from "@chakra-ui/react";
import { Colors } from "../assets/constants/colors";

const Feedback = () => {
  return (
    <>
      <Box mt={6}>
        <Heading borderBottom={"1px solid grey"} pb={2} mb={4}>
          Feedback
        </Heading>
        <Center>
            <Flex flexDirection={'column'}>
          <Text textAlign={'center'} letterSpacing={1} fontSize={"30px"} fontWeight={"bold"}>
            How Are You Feeling?
          </Text>
          <Text mt={2} color={Colors.TEXTGREY} textAlign={'center'} w={'400px'}>
            Your input is valuable in helpi g us better understand your needs
            and tailor ourservice accordingle.
          </Text>
          </Flex>
        </Center>
      </Box>
    </>
  );
};

export default Feedback;
