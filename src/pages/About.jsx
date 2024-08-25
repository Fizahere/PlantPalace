import React from "react";
import {
  Heading,
  Image,
  Box,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import plant5 from "../assets/images/plant5.jpg";
import plant2 from "../assets/images/plant2.jpg";
import about2 from "../assets/images/about2.jpeg";
import about from "../assets/images/about.jpg";

function About() {
  return (
    <>
      <Box>
        <Box position={"relative"}>
          <Box
            width="100%"
            height={{
              base: "70h",
              md: "100vh",
            }}
            zIndex="-1"
            objectFit="contain"
            overflow="hidden"
          >
            <Image
              h={{
                base: "300px",
                sm: "400px",
                md: "700px",
              }}
              width={"100%"}
              src={plant2}
            />{" "}
          </Box>

          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -40%)"
            fontWeight={"800"}
            color="white"
            p={2}
            textAlign="center"
          >
            <Text
              fontSize={{
                base: "18px",
                md: "30px",
              }}
              fontWeight={"900"}
              color={"#76925a"}
            >
              PlantPalace is your go-to destination for exploring and caring for
              a wide variety of plants.
            </Text>
          </Box>
        </Box>
        <Box
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"400px"}
          // width={{
          //   base:'400px',
          //   md:'600px'
          // }}
          margin={"auto"}
          overflow={"hidden"}
        >
          <Text
            fontSize={{
              base: "15px",
              md: "20px",
            }}
            p={{
              base: "40px",
            }}
          >
            PlantPalace offers a comprehensive online nursery experience,
            bringing expert plant care tips and a diverse selection of indoor
            and outdoor plants right to your fingertips. Enjoy convenient access
            to plant information and recommendations without leaving home.
            PlantPalace is your go-to destination for exploring and caring for a
            wide variety of plants. Discover detailed information on indoor and
            outdoor plants, including care tips, images, and common problems.{" "}
          </Text>
        </Box>

        <Box display={"flex"} justifyContent={"center"}>
          <Image src={about} alt="about image" width={"100%"} />
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          // height={'700px'}
          py={"100px"}
          m={"0 auto"}
          width={"80vw"}
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Image src={about2} height="100%" objectFit="cover" />
            </Box>
            <Box p={{ base: "0", md: "20px" }} margin={"auto"}>
              <Heading size={{ base: "md", md: "lg" }}>
                Investor Relations
              </Heading>
              <Text
                fontSize={{ base: "12px", md: "15px" }}
                mt={{ base: "10px", md: "20px" }}
              >
                Want to invest with us? Get more information about our
                governance, our latest earnings, and our long-term view on
                what’s ahead.
              </Text>
            </Box>

            <Box p={{ base: "0", md: "20px" }} margin={"auto"}>
              <Heading size={{ base: "md", md: "lg" }}>Careers</Heading>
              <Text
                fontSize={{ base: "12px", md: "15px" }}
                mt={{ base: "10px", md: "20px" }}
              >
                Want to come work with us? Get more information about our teams,
                locations, culture and to hear more from our employees.
              </Text>
            </Box>
            <Box>
              <Image src={plant5} height="100%" objectFit="cover" />
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}

export default About;
