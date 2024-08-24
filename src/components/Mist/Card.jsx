import React from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  Button,
  Divider,
  Flex,

} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
// import { UnAuthenticatedRoutesNames } from "../../utilities/util.constant";
import {Colors} from '../../assets/constants/colors'
import mainImage3 from "../../assets/images/mainImage3.jpg";

function CustomCard(singlePlant) {
  const { id } = singlePlant;
  const { name } = singlePlant;
//   const { image_thumbnail_path } = singlePlant;
  const { scientificName } = singlePlant;
  const { temperatureRange } = singlePlant;
  const { humidity } = singlePlant;
  const { description } = singlePlant;
  const { category } = singlePlant;
  const { careInstructions } = singlePlant;
  // const { careInstructions } = singlePlant;

  const navigate = useNavigate();
  return (
    <>
      <Card
       boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'} 
       _dark={{bg:'transparent'}} 
       maxW={{base:'xs',md:'xs'}}
       >
        <CardBody>
          <Image
            src={mainImage3}
            alt={'image_thumbnail_path'}
            borderRadius="md"
            width={"100%"}
            height={{base:'auto',md:'auto'}}
          />
              <Divider
              orientation="horizontal"
              borderColor="inherit"
              // width={"95px"}
              borderWidth="1px"
              mr={3}
            />
          <Stack mt="6" spacing={{base:'1',md:'3'}}>
            <Flex justifyContent={'space-between'}>
            <Heading size={{base:'sm',md:'md'}}>{name}</Heading>
            <Text mt={1} color="green" fontSize={{base:'12px',md:'1xl'}}>
             $ 200
            </Text>
            </Flex>
            <Text fontSize={{base:'12px',md:'1xl'}}>{category}</Text>
           
            <Button
            mt={{base:'1',md:'0'}}
            bg={Colors.THEMEBUTTON}
            color={Colors.WHITE}
            _hover={{
              color:''
            }}
            fontSize={{base:'12px',md:'1xl'}}
              onClick={() => {
                // navigate(UnAuthenticatedRoutesNames.DETAIL.replace(":id", id));
              }}
            >
              Show more
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

export default CustomCard;
