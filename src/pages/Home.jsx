import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Image,
  Button,
    
   } from '@chakra-ui/react'
import mainImage from '../assets/images/mainImage.png'


const Home = () => {
  const plantsCategories=['INDOOR','OUTDOOR','SALE','NEW ARRIVAL','FLOWERS','TOP']
  return (
    <>
      <Box>
        <Flex>
          <Image src={mainImage} height={'500px'} />
          <Heading fontSize={'50'} >Ornamental Plants For Your Home</Heading>
        </Flex>

        <Flex>
         <Box>
  <Grid templateColumns="repeat(2, 1fr)" gap={4}>
    {plantsCategories.map((singleCategory, index) => (
      <Button
        key={index}
        margin={2}
        border="1px solid black"
        bg="transparent"
      >
        {singleCategory}
      </Button>
    ))}
  </Grid>
</Box>

          <Box></Box>
        </Flex>
          </Box>
    </>
  )
}

export default Home
