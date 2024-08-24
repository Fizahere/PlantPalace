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
import { useNavigate } from "react-router-dom";

const Home = () => {
  const plantsCategories = {
    indoor: "INDOOR",
    outdoor: "OUTDOOR",
    flowering_shrubs: "FLOWERS",
    herbs: "HERBS",
    succulents: "NEW ARRIVAL",
    top_variety: "TOP",
  };
  
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box>
        <Flex flexDirection={{ base: "column", sm: "row" }}>
          <Image
            src={mainImage}
            width={{ base: "300px", lg: "400px" }}
            height={{ base: "300px", sm: "280px", md: "390px", lg: "500px" }}
          />
          <Box px={{ base: 2, lg: 20 }} py={{ base: 10, md: 20 }}>
            <Heading
              fontSize={{ base: "35px", sm: "28px", md: "40px", lg: "70px" }}
              fontWeight={{ base: "900", sm: "700", md: "900" }}
              lineHeight={1.1}
              letterSpacing={"2px"}
            >
              Ornamental
              <Box display={"flex"}>
                <Image
                  src={mainText}
                  height={{ base: "47px", sm: "35px", lg: "70px" }}
                />
                <Text>For</Text>
              </Box>
              Your Home
            </Heading>
            <Text
              fontSize={{ sm: "10px", md: "20px" }}
              py={6}
              px={{ base: 0, md: 2 }}
              color={Colors.GREY}
            >
              We design 95% of our products in house for original style and
              quality you won't find anywhere else.
            </Text>
            <Flex flexDirection={{ base: "row", sm: "column", md: "row" }}>
              <Button
                bg={Colors.BLACK}
                color={Colors.WHITE}
                _dark={{
                  bg: Colors.WHITE,
                  color: Colors.BLACK,
                }}
                width={"150px"}
                borderRadius={"40px"}
                fontSize={"12px"}
                _hover={{ color: "white" }}
                onClick={() => navigate("/plant-palace/explore-plants")}
              >
                <Icon mr={2} as={App_Icons.RIGHTARROW} fontSize={"18px"} />
                Go To Shop
              </Button>
              <Button
                bg={"transparent"}
                textDecoration={"underline"}
                _hover={{ bg: "transparent" }}
                width={"150px"}
                fontSize={{ base: "18px", sm: "12px", md: "18px" }}
                onClick={() => navigate("/plant-palace/about-us")}
              >
                More Details
              </Button>
            </Flex>
          </Box>
        </Flex>

        <Flex
          justifyContent={"space-between"}
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Box
            width={{ base: "310px", sm: "420px", md: "425px" }}
            mb={{ base: 20, lg: 0 }}
          >
            <Flex flexWrap="wrap">
            {Object.entries(plantsCategories).map(([key, value], index) => (
  <Button
    key={index}
    flex={{ sm: "calc(20% - 14px)", md: "calc(25% - 18px)" }}
    margin={2}
    width={"min-content"}
    height={"30px"}
    fontSize={{ base: "9px", md: "11px" }}
    border="1px solid gray"
    bg="transparent"
    color={Colors.GREY}
    onClick={() => navigate(`/plant-palace/${key}`)} 
  >
    {value}
  </Button>
))}
            </Flex>
          </Box>

          <Flex
            ml={{ base: 0, md: 8 }}
            mt={{ base: 0, md: 4 }}
            justifyContent={"space-between"}
          >
            <Box
              position="relative"
              borderRadius="40px 40px 0px 0px"
              bgGradient="linear(to-b, #30362f, #4d5c3e)"
              height={{ base: "80px", sm: "100px", md: "110px" }}
              width={{ base: "210px", md: "230px" }}
              border={"1px solid #49503b"}
            >
              <Image
                src={mainImage2}
                height={{ base: "auto", md: "200px" }}
                transform="translate(-6%, -50%)"
                zIndex={1}
              />
            </Box>
            <Box
              ml={{ base: 2, md: 8 }}
              position="relative"
              borderRadius="40px 40px 0px 0px"
              bgGradient="linear(to-b, #30362f, #4d5c3e)"
              height={{ base: "80px", sm: "100px", md: "110px" }}
              width={{ base: "200px", md: "230px" }}
              border={"1px solid #49503b"}
            >
              <Image
                src={mainImage3}
                height={{ base: "110", sm: "175px", md: "200px" }}
                transform={{
                  base: "translate(10%, -50%)",
                  sm: "translate(5%, -50%)",
                  md: "translate(2%, -50%)",
                }}
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
