import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Button,
  Text,
  useColorMode,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import mainImage from "../assets/images/mainImage.png";
import mainText from "../assets/images/mainText.png";
import mainImage2 from "../assets/images/mainImage2.png";
import mainImage3 from "../assets/images/mainImage3.jpg";
import { Colors } from "../assets/constants/colors";
import { App_Icons } from "../assets/constants/icons";

const Home = () => {
  const plantsCategories = [
    "INDOOR",
    "OUTDOOR",
    "SALE",
    "FLOWERS",
    "NEW ARRIVAL",
    "TOP",
  ];
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box>
        <Flex flexDirection={{ base: "column", sm: "row" }}>
          <Image src={mainImage} width={{base:'340px',lg:'400px'}} height={{ base: "400px", lg: "500px" }} />
          <Box px={{base:2,md:20}}
          py={{base:10,md:20}}
          >
            <Heading
              fontSize={{ base: "50px", lg: "70px" }}
              fontWeight={"900"}
              lineHeight={1.1}
              letterSpacing={"2px"}
            >
              Ornamental
              <Box display={"flex"}>
                <Image src={mainText} height={{ base: "50px", lg: '70px' }} />
                <Text>For</Text>
              </Box>{" "}
              Your Home
            </Heading>
            <Text py={6} px={2} color={Colors.GREY}>
              We design 95% of our products in house for original style and
              quality you won't find anywhere else.
            </Text>
            <Flex>
              <Button
                bg={Colors.BLACK}
                color={Colors.WHITE}
                _dark={{
                  bg: Colors.WHITE,
                  color: Colors.BLACK,
                }}
                borderRadius={"40px"}
                fontSize={"12px"}
              >
                <Icon mr={2} as={App_Icons.RIGHTARROW} fontSize={"18px"} />
                Go To Shop
              </Button>
              <Button
                bg={"transparent"}
                textDecoration={"underline"}
                _hover={{ bg: "transparent" }}
              >
                More Details
              </Button>
            </Flex>
          </Box>
        </Flex>

        <Flex justifyContent={"space-between"}>
          <Box width={"425px"}>
            <Flex flexWrap="wrap">
              {plantsCategories.map((singleCategory, index) => (
                <Button
                  key={index}
                  flex=" calc(25% - 16px)"
                  margin={2}
                  width={"min-content"}
                  height={"30px"}
                  fontSize={"11px"}
                  border="1px solid gray"
                  bg="transparent"
                  color={Colors.GREY}
                >
                  {singleCategory}
                </Button>
              ))}
            </Flex>
          </Box>

          <Flex>
            <Box
              position="relative"
              borderRadius="40px 40px 0px 0px"
              bgGradient="linear(to-b, #30362f, #4d5c3e)"
              height={"110"}
              width={"230px"}
              border={"1px solid #49503b"}
            >
              <Image
                src={mainImage2}
                height="200px"
                transform="translate(-6%, -50%)"
                zIndex={1}
              />
            </Box>
            <Box
              ml={4}
              position="relative"
              borderRadius="40px 40px 0px 0px"
              bgGradient="linear(to-b, #30362f, #4d5c3e)"
              height={"110px"}
              width={"230px"}
              border={"1px solid #49503b"}
            >
              <Image
                src={mainImage3}
                height="200px"
                transform="translate(5%, -50%)"
                zIndex={1}
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
