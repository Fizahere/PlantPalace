import React from "react";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  Card,
  CardBody,
  Text,
  Flex,
  Image,
  DrawerFooter,
  DrawerCloseButton,
  Divider,
} from "@chakra-ui/react";
import mainImage3 from "../assets/images/mainImage3.jpg";
import {Colors} from '../assets/constants/colors'

const Cart = ({ disclosure }) => {
  const btnRef = React.useRef();

  return (
    <>
      <Drawer
        isOpen={disclosure.isOpen}
        placement="right"
        onClose={disclosure.onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent _dark={{bg:Colors.DARKTHEME}}>
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody>
            <Card
            boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'} 
            _dark={{bg:Colors.DARKTHEME}}>
              <CardBody>
                <Flex flexDir={"row"}>
                  <Image src={mainImage3} height={100} width={100} />
                  <Divider
              orientation="vertical"
              borderColor="inherit"
              height={"95px"}
              borderWidth="0.5px"
              mr={3}
            />
                  <Text fontSize={15} mt={5}>
                    Name: Cactus Price: $10 Quantity: 2
                  </Text>
                </Flex>
              </CardBody>
            </Card>
          </DrawerBody>

          <DrawerFooter>
            <Button width={'100%'} bg={Colors.THEMEBUTTON} color={Colors.WHITE}>Checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Cart;
