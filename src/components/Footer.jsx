import React from "react";
import { Box, Flex, Text, Icon, Link } from "@chakra-ui/react";
import { Colors } from "../assets/constants/colors";
import { Link as DomLink } from "react-router-dom";
import { App_Icons } from "../assets/constants/icons";

function Footer() {
  return (
    <>
      <Box h={"auto"} borderTop={"1px solid grey"} >
        <DomLink to={"/"}>
          <Flex mt={4}>
            <Icon as={App_Icons.LOGO} fontSize={{ base: 20, md: 25 }} />{" "}
            <Text
              mt={1}
              ml={1}
              fontSize={{ base: 15, md: 20 }}
              fontWeight="bold"
            >
              Plant Palace
            </Text>
          </Flex>
        </DomLink>
        <Flex justifyContent={"center"} gap={"20px"} mt={4}>
          <Link href="https://www.instagram.com/" isExternal>
            <Icon
              border={"2px solid grey"}
              borderRadius={"50%"}
              p={"8px"}
              fontSize={"40px"}
              color={'#ff66cc'}
              as={App_Icons.INSTAGRAM}
            />
          </Link>
          <Link href="https://www.facebook.com/" isExternal>
            <Icon
              border={"2px solid grey"}
              borderRadius={"50%"}
              p={"8px"}
              fontSize={"40px"}
              color={Colors.BLUE}
              as={App_Icons.FACEBOOK}
            />
          </Link>
          <Link href="https://mail.google.com/mail/u/0/" isExternal>
            <Icon
              border={"2px solid grey"}
              borderRadius={"50%"}
              p={"6px"}
              fontSize={"40px"}
              color={'red'}
              as={App_Icons.MAIL}
            />
          </Link>
        </Flex>
        <Flex flexDirection={{base:'column',md:'row'}} mb={10} justifyContent={"center"} gap={"30px"} mt={"10px"}>
          <DomLink to={"/"}>
            <Text>Home</Text>
          </DomLink>
          <DomLink to={"/plant-palace/about-us"}>
            <Text>About</Text>
          </DomLink>
          <DomLink to={"/plant-palace/contact-us"}>
            <Text>Contact</Text>
          </DomLink>
          <DomLink to={"/plant-palace/explore-plants"}>
            <Text>Shop</Text>
          </DomLink>
          <DomLink to={"/plant-palace/feedback"}>
            <Text>Feedback</Text>
          </DomLink>
          <DomLink to={"/plant-palace/login"}>
            <Text>Login</Text>
          </DomLink>
          <DomLink to={"/plant-palace/site-map"}>
            <Text>Sitemap</Text>
          </DomLink>
        </Flex>
        <Box width="100%">
          <Text
            p={2}
            display={"flex"}
            fontSize={{
              base: "10px",
              md: "14px",
            }}
            justifyContent={"center"}
            color={Colors.GREY}
            borderTop={"1px solid grey"}
          >
            © 2024 Plant Palace. All Rights Reserved. | Developed By
            <Link
              ml={1}
              color={"#0080ff"}
              href="https://fiza-portfolio.vercel.app/"
              isExternal
            >
              Fiza
            </Link>
            .
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
