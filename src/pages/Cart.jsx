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
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody>
            <Card>
              <CardBody>
                <Flex flexDir={"row"}>
                  <Image src={mainImage3} height={100} width={100} />
                  <Text fontSize={15} mt={5}>
                    Name: Cactus Price: $10 Quantity: 2
                  </Text>
                </Flex>
              </CardBody>
            </Card>
          </DrawerBody>

          <DrawerFooter>
            <Button width={'100%'} bg={Colors.THEMEBUTTON} colorScheme="blue">Checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Cart;
