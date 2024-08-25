import React from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
  Icon,
} from "@chakra-ui/react";
import { Colors } from "../assets/constants/colors";
import { App_Icons } from "../assets/constants/icons";

const Contact = () => {
  return (
    <>
      <Box mt={6}>
        <Heading borderBottom={"1px solid grey"} pb={2} mb={4}>
          Contact
        </Heading>
        <Flex flexDirection={{ base: "column", md: "row" }}>
          <Box w={{ base: "100%", md: "50%" }}>
            <Text mt={4} fontSize={"14"}>
              We're here to help you cultivate your green oasis! Whether you
              have questions about plant care, or want to share your PlantPalace
              experience, we'd love to hear from you.
            </Text>
            <Text mt={"30px"}>
              <b>
                <Icon
                  mr={2}
                  mt={1}
                  fontSize={18}
                  color={Colors.PURPLE}
                  as={App_Icons.MAIL}
                />
                Email:
              </b>{" "}
              support@plantpalace.com
            </Text>
            <Text mt={2}>
              <b>
                <Icon
                  mr={2}
                  mt={1}
                  fontSize={18}
                  color={Colors.GREEN}
                  as={App_Icons.PHONE}
                />
                Phone:
              </b>{" "}
              +92 (312) 0832-542
            </Text>
            <Text mt={2}>
              <b>
                <Icon
                  mr={2}
                  mt={1}
                  fontSize={18}
                  color={Colors.BLUE}
                  as={App_Icons.HOME}
                />
                Address:
              </b>{" "}
              123 Green Thumb Lane, Botanic City, GA 30301
            </Text>
          </Box>
          <Box
            ml={{ base: 0, md: 20 }}
            mt={{ base: 8, md: 0 }}
            w={{ base: "100%", md: "50%" }}
          >
            <Box py={4}>
              <Text fontWeight={"bold"}>
                <Icon
                  mr={2}
                  mt={2}
                  fontSize={20}
                  color={Colors.PURPLE}
                  as={App_Icons.MAIL}
                />
                Your Email:
              </Text>
              <Input placeholder="email**" />
            </Box>
            <Box py={4}>
              <Text fontWeight={"bold"}>
                <Icon
                  mr={2}
                  mt={2}
                  fontSize={20}
                  color={Colors.GREEN}
                  as={App_Icons.MESSAGE}
                />
                Message:
              </Text>
              <Textarea placeholder={"message**"}></Textarea>
            </Box>
          </Box>
        </Flex>
        <Box
          mt={"40px"}
          mb={8}
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box>
            <Text fontWeight={"bold"}>
              Customer Support{" "}
              <Icon
                ml={4}
                mt={1}
                fontSize={25}
                color={Colors.PURPLE}
                as={App_Icons.FEEDBACK}
              />
            </Text>
            <Text mt={2} fontSize={"12px"} color={Colors.TEXTGREY}>
              Need assistance with your Plants purchase or have a question about
              our products? Our friendly team is here to help! don’t hesitate to
              reach out.
            </Text>
          </Box>
          <Box mt={{ base: 4, md: 0 }} px={{ base: 0, md: 10 }}>
            <Text fontWeight={"bold"}>
              Feedback and Suggestions{" "}
              <Icon
                ml={4}
                mt={1}
                fontSize={25}
                color={Colors.GREEN}
                as={App_Icons.SUPPORT}
              />
            </Text>
            <Text mt={2} fontSize={"12px"} color={Colors.TEXTGREY}>
              At PlantPalace, we value your feedback. Your insights help us
              improve, Whether you have feedback on your experience with us,
              we’d love to hear from you.
            </Text>
          </Box>
          <Box mt={{ base: 4, md: 0 }}>
            <Text fontWeight={"bold"}>
              Media Inqueries{" "}
              <Icon
                ml={4}
                mt={1}
                fontSize={25}
                color={Colors.BLUE}
                as={App_Icons.MEDIA}
              />
            </Text>
            <Text mt={2} fontSize={"12px"} color={Colors.TEXTGREY}>
              Are you a member of press or blogger interested in PlantPalace?
              We’re happy to collaborate. Reach out, we’ll get back to you.
              need.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
