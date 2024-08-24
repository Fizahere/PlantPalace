import React, { useState } from "react";
import {
  Box,
  Heading,
  Flex,
  Input,
  InputGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Icon,
  useDisclosure,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import CustomCard from "../components/Mist/Card";
import { Colors } from "../assets/constants/colors";
import { App_Icons } from "../assets/constants/icons";
import plantData from "../data/PlantsData.json";
import { useParams } from "react-router-dom";

const Shop = () => {
  const { category: categoryData } = useParams();
  console.log(categoryData,'yes its working')
  const [items, setItems] = useState([
    "sort by price",
    "sort alphabeticaly",
    "most popular",
  ]);
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const dropdown = useDisclosure();

  const handleSelect = (item) => {
    setSelectedItem(item);
    setItems([item, ...items.filter((i) => i !== item)]);
  };
  // const filterInputHandler = (event) => {
  //   event.preventDefault();
  //   const searchValue = event.target.value;
  //   const selectAllItems = document.querySelectorAll(".collection");
  //   selectAllItems.forEach((singleItem) => {
  //     const itemText = singleItem.innerText;
  //     if (itemText.indexOf(searchValue) == -1) {
  //       itemText.style.display = "none";
  //     } else {
  //       item.style.display = "block";
  //     }
  //   });
  // };

  const data = plantData.plants[categoryData];
  console.log(data, "data");
  // const { data: plantsData } = useQuery(
  //   "getPlants",
  //   () => getPlantService.getPlants
  // );
  // console.log(plantsData, "plantData");
  return (
    <>
      <Box mt={4}>
        <Flex
          p={2}
          borderBottom={"1px solid grey"}
          justifyContent={"space-between"}
        >
          <Heading>{categoryData} plants</Heading>
          <Flex>
            <InputGroup display={"flex"} justifyContent={"space-between"}>
              <Input
                borderRadius={10}
                p={2}
                onChange={() => filterInputHandler}
                placeholder={"search"}
                _placeholder={{ fontSize: "15px" }}
              />
              <InputRightElement mr={3}>
                <Icon as={App_Icons.SEARCH} color={"grey"} fontSize={20} />
              </InputRightElement>
            </InputGroup>
            <Box ml={4}>
              <Menu>
                <MenuButton
                  as={Button}
                  bg={Colors.WHITE}
                  border={"1px solid #e2e8f0"}
                  color={Colors.TEXTGREY}
                  onClick={dropdown.onToggle}
                >
                  <Flex>
                    <Text
                      color={"#718196"}
                      fontWeight={"400"}
                      fontSize={"15px"}
                      mt={0.5}
                    >
                      {selectedItem}
                    </Text>
                    <Icon
                      as={App_Icons.DROPDOWN}
                      transform={dropdown.isOpen && "rotate(180deg)"}
                      fontSize={"25px"}
                    />
                  </Flex>
                </MenuButton>
                <MenuList>
                  {items.map((item) => (
                    <MenuItem key={item} onClick={() => handleSelect(item)}>
                      {item}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </Box>
          </Flex>
        </Flex>

        <Box py={8} className="collection">
          {data.map((singlePlant,index)=>{
            return <CustomCard key={index} singlePlant={singlePlant} />
          })}
        </Box>
      </Box>
    </>
  );
};

export default Shop;
