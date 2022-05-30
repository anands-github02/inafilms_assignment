import { Box, Center } from "@chakra-ui/react";
import React from "react";
export default function SidebarItem(props) {
  return (
    <Box
      display={"flex"}
      flexDir="row"
      h="1vh"
      p="5vh"
      bg="black"
      _hover={{ bg: "gray" }}
      _focus={{ bg: "gray" }}
    >
      {props.icon}
      <Box ml="10" ><Center>{props.item}</Center></Box>
    </Box>
  );
}