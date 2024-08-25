import React, { useMemo, useState } from "react";
import {
  Image,
  Heading,
  Text,
  Box,
  SimpleGrid,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Colors } from "../assets/constants/colors";
import plantData from "../data/PlantsData.json";
import { imageMap } from "../assets/constants/images";

function DetailPage() {
  const { category: catData, id: dataId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const categoryData = plantData.plants[catData];
  let data = [];
  if (categoryData) {
    data = categoryData.find((plant) => plant.id.toString() === dataId);
  }
  const [totalPrice, setTotalPrice] = useState(data.price * quantity);
  const imageSrc = imageMap[data.image];

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cartItems.find(item => item.id === data.id);

    if (existingItem) {
      existingItem.quantity += quantity;
      existingItem.totalPrice += totalPrice;
    } else {
      cartItems.push({
        id: data.id,
        name: data.name,
        price: data.price,
        quantity: quantity,
        totalPrice: totalPrice,
        image: data.image,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    alert("Item added to cart!");
  };

  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} p={"0"}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            ml={{ base: "0", md: "5" }}
          >
            <Box maxW={"600px"}>
              <Image
                src={imageSrc}
                alt={data.name}
                borderRadius="md"
                width={"800px"}
                height={{
                  md: "auto",
                  base: "auto",
                }}
                mt={"14px"}
              />
            </Box>
          </Box>
          <Box
            ml={{ base: "0", md: "80px" }}
            borderLeft={{ base: "none", md: "1px solid gray" }}
            p={{ base: "0", md: "3" }}
          >
            <Box mb={4} ml={5}>
              <Heading size="xl">{data.name} </Heading>
              <Text mt={2} fontSize={"15px"} fontWeight={"400"}>
                Scientific Name: {data.scientificName}
              </Text>
              <Text fontSize={"15px"} fontWeight={"bold"} mt={10}>
                Description:
              </Text>
              <Text color={Colors.GREY} fontSize={14}>
                {data.description}
              </Text>
              <Flex mt={10} justifyContent={"space-between"}>
                <Flex>
                  <Text fontSize={"15px"} fontWeight={"bold"} m={2}>
                    Quantity:
                  </Text>
                  <Button
                    onClick={() => {
                      setQuantity(quantity + 1);
                      setTotalPrice((data.price * (quantity + 1)));
                    }}
                  >
                    +
                  </Button>
                  <Text mx={4} my={2}>
                    {quantity}
                  </Text>
                  <Button
                    onClick={() => {
                      setQuantity(quantity !== 1 ? quantity - 1 : 1);
                      setTotalPrice((data.price * (quantity !== 1 ? quantity - 1 : 1)));
                    }}
                  >
                    -
                  </Button>
                </Flex>
                <Text color="green">$ {totalPrice}</Text>
              </Flex>
              <Button
                mt={8}
                width={"100%"}
                bgGradient="linear(to-r, #30362f, #4d5c3e)"
                color={Colors.WHITE}
                _hover={{ bg: Colors.THEMEBUTTON }}
                onClick={addToCart}
              >
                Add To Cart
              </Button>
              <Text fontSize={"15px"} fontWeight={"bold"} mt={10}>
                Care Instructions:
              </Text>
              <Text color={Colors.GREY} fontSize={14}>
                {data.careInstructions}
              </Text>

              <Text color={Colors.GREY} mt={2} fontSize={14}>
                <b>Humidity:</b> {data.humidity}
              </Text>
              <Text color={Colors.GREY} fontSize={14}>
                <b>Temperature Range:</b> {data.temperatureRange}
              </Text>
              <Text fontSize={"15px"} fontWeight={"bold"} mt={5}>
                Common Problems:
              </Text>
              {data.commonProblems &&
                data.commonProblems.map((singlepro) => (
                  <Text fontSize={14} key={singlepro}>
                    {singlepro}
                  </Text>
                ))}
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default DetailPage;
