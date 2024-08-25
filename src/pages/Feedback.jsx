import React, { useState } from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { Colors } from "../assets/constants/colors";
import { App_Icons } from "../assets/constants/icons";

const Feedback = () => {
  const [sliderValue, setSliderValue] = useState(3);
  const emojis = [
    {
      icon: App_Icons.SAD,
      label: "Very Unhappy",
      e_color: "red",
      fontsize: "20px",
    },
    {
      icon: App_Icons.UNHAPPY,
      label: "Unhappy",
      e_color: "orange",
      fontsize: "20px",
    },
    {
      icon: App_Icons.SATISFY,
      label: "Medium",
      e_color: "#999900",
      fontsize: "20px",
    },
    {
      icon: App_Icons.HAPPY,
      label: "Happy",
      e_color: "green",
      fontsize: "20px",
    },
    {
      icon: App_Icons.GOOD,
      label: "Very Happy",
      e_color: "blue",
      fontsize: "20px",
    },
  ];

  return (
    <>
      <Box mt={6}>
        <Heading borderBottom={"1px solid grey"} pb={2} mb={4}>
          Feedback
        </Heading>
        {/* <Center> */}
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Text
            textAlign={"center"}
            letterSpacing={1}
            fontSize={"30px"}
            fontWeight={"bold"}
          >
            How Are You Feeling?
          </Text>
          <Text mt={2} color={Colors.TEXTGREY} textAlign={"center"} w={"400px"}>
            Your input is valuable in helping us better understand your needs
            and tailor our service accordingly.
          </Text>
          <Box textAlign="center" width="300px">
            <Slider
              defaultValue={3}
              min={1}
              max={5}
              step={1}
              onChange={(val) => setSliderValue(val)}
              colorScheme="teal"
            >
              <SliderTrack bg="gray.200">
                <SliderFilledTrack bg="teal.400" />
              </SliderTrack>
              <SliderThumb boxSize={10}>
                <Box
                  as={emojis[sliderValue - 1].icon}
                  color={emojis[sliderValue - 1].e_color}
                  fontSize={emojis[sliderValue - 1].fontsize}
                />
              </SliderThumb>
            </Slider>
            <Text
              mt={4}
              fontSize="sm"
              fontWeight="bold"
              bg={Colors.BLACK}
              color="white"
              width={40}
              py={2}
              borderRadius="50px"
              m={"0 auto"}
            >
              {emojis[sliderValue - 1].label}
            </Text>
            <Textarea
              borderRadius={"10px"}
              h={140}
              mt={5}
              placeholder="Add a comment..."
            ></Textarea>
            <Button
            color={Colors.WHITE}
              bgGradient="linear(to-r, #30362f, #4d5c3e)"
              my={6}
              _hover={{bg:Colors.THEMEBUTTON}}
              width={"100%"}
            >
              Submit Now
            </Button>
          </Box>
        </Flex>
        {/* </Center> */}
      </Box>
    </>
  );
};

export default Feedback;
