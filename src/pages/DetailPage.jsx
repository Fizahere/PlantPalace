import React, { useMemo, useState } from "react";
import {
  Image,
  Heading,
  Text,
  Box,
  SimpleGrid,
  Flex,
  Button,
  Skeleton,
} from "@chakra-ui/react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
  const [totalPrice, setTotalPrice] = useState(data.price);
  const imageSrc = imageMap[data.image];
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
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                mt="6"
                spacing="3"
              ></Box>
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
                    Quanitiy:
                  </Text>
                  <Button
                    onClick={() => {
                      setQuantity(quantity + 1);
                      setTotalPrice(totalPrice * quantity);
                    }}
                  >
                    +
                  </Button>
                  <Text mx={4} my={2}>
                    {quantity}
                  </Text>
                  <Button
                    onClick={() => {
                      setQuantity(quantity != 1 ? quantity - 1 : 1);
                      // setTotalPrice(data.price * quantity);
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
                bg={Colors.THEMEBUTTON}
                color={Colors.WHITE}
                _hover={{ bg: Colors.THEMEBUTTON }}
              >
                Add To Cart
              </Button>
              <Text fontSize={"15px"} fontWeight={"bold"} mt={10}>
                Care Instrutions:
              </Text>
              <Text color={Colors.GREY} fontSize={14}>
                {data.careInstructions}
              </Text>

              <Text color={Colors.GREY} mt={2} fontSize={14}>
                <b>Humidity:</b> {data.humidity}
              </Text>
              <Text color={Colors.GREY} fontSize={14}>
                <b>Temprature Renge:</b> {data.temperatureRange}
              </Text>
              <Text fontSize={"15px"} fontWeight={"bold"} mt={5}>
                Common Problems:
              </Text>
              {data.commonProblems &&
                data.commonProblems.map((singlepro) => (
                  <Text fontSize={14}>{singlepro}</Text>
                ))}
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default DetailPage;
