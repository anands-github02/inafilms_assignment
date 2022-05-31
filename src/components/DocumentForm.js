import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import "../App.css";

function DocumentForm(props) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeCode = (event) => {
    setCode(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      name,
      code,
    };
    name && code && props.func(val);
    clearState();
  };

  const clearState = () => {
    setName("");
    setCode("");
  };

  return (
    <div>
      <Box display="flex" flexDirection="column">
        <Box display={"flex"} mb="5">
          <Box mr="5" px="5" py="2" color="white" bg={"teal.300"}>
            Name
          </Box>
          <Input
            borderColor={"blackAlpha.400"}
            type="text"
            value={name}
            onChange={changeName}
            maxW="60vw"
          />
        </Box>
        <Box display={"flex"} mb="5">
          <Box mr="5" px="6" py="2" color="white" bg={"teal.300"}>
            Code
          </Box>
          <Input
            borderColor={"blackAlpha.400"}
            type="text"
            value={code}
            onChange={changeCode}
          />
        </Box>

        <Button
          ml="10"
          maxW="30vw"
          _hover={{ bg: "teal.300" }}
          onClick={transferValue}
        >
          {" "}
          Add Document
        </Button>
      </Box>
    </div>
  );
}

export default DocumentForm;
