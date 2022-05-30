import { Box, Center, Divider, Spacer } from "@chakra-ui/react";

import React from "react";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
export default function Sidebar() {
  const items = [
    {
      item: "Main",
      link: "",
    },
    {
      item: "Company",
      link: "company",
    },
    {
      item: "Document",
      link: "document",
    },
  ];

  return (
    <Box
      bg="black"
      w="20vw"
      h="100vh"
      display="flex"
      color="whiteAlpha.900"
      flexDirection={"column"}
      position="fixed"
      borderRight="5px solid teal"
    >
      <Box>
        <Box bg={'teal.300'} h="10vh" p="5">
          <Center fontSize={"2xl"}>InaFilms</Center>
        </Box>
        <Divider />

        {items.map((sideItem) => {
          return (
            <Link to={`/${sideItem.link}`}>
              <SidebarItem item={sideItem.item} />
            </Link>
          );
        })}
      </Box>
      <Spacer />
      <Box h="5vh" mt="3vh"  bg={'teal.300'}>
        <Divider />

        <Center >Sachidananda MG</Center>
      </Box>
    </Box>
  );
}
