import { Box, Center } from "@chakra-ui/react";
import React from "react";
export default function SidebarItem(props) {
  return (
    <Box
      display={"flex"}
      flexDir="row"
      alignItems={'center'}
      justifyContent={'center'}
      h="1vh"
      p="5vh"
      bg="black"
      _hover={{ bg: "teal" }}
      _focus={{ bg: "teal" }}
    >
      {props.icon}
      <Box><Center>{props.item}</Center></Box>
    </Box>
  );
}