import React from "react";
import { Box, Flex, Text, Icon, Link } from "@chakra-ui/react";
import { Colors } from "../assets/constants/colors";
import { Link as DomLink } from "react-router-dom";
import { App_Icons } from "../assets/constants/icons";

function Footer() {
  return (
    <>
      <Box h={"250"} borderTop={"1px solid grey"} position="relative">
        <Box fontWeight="bold">
          <Icon as={App_Icons.LOGO} fontSize={30} /> Plant Palace
        </Box>
        <Flex justifyContent={"center"} gap={"20px"} mt={4}>
          <Link href="https://www.instagram.com/" isExternal>
            <Icon
              border={"2px solid grey"}
              borderRadius={"50%"}
              p={"8px"}
              fontSize={"40px"}
              as={App_Icons.INSTAGRAM}
            />
          </Link>
          <Link href="https://www.facebook.com/" isExternal>
            <Icon
              border={"2px solid grey"}
              borderRadius={"50%"}
              p={"8px"}
              fontSize={"40px"}
              as={App_Icons.FACEBOOK}
            />
          </Link>
          <Link href="https://mail.google.com/mail/u/0/" isExternal>
            <Icon
              border={"2px solid grey"}
              borderRadius={"50%"}
              p={"6px"}
              fontSize={"40px"}
              as={App_Icons.MAIL}
            />
          </Link>
        </Flex>
        <Flex justifyContent={"center"} gap={"30px"} mt={"10px"}>
          <DomLink to={"/"}>
            <Text>Home</Text>
          </DomLink>
          <DomLink to={"/about-us"}>
            <Text>About</Text>
          </DomLink>
          <DomLink to={"/contact-us"}>
            <Text>Contact</Text>
          </DomLink>
          <DomLink to={"/explore-plants"}>
            <Text>Shop</Text>
          </DomLink>
        </Flex>
        <Box position="absolute" bottom="0" width="100%">
          <Text
            p={2}
            display={"flex"}
            fontSize={{
              base: "12px",
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
