import { Box, Button, Input, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from "uuid";

const DatePick = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

export default function FileForm() {
  const [value, setValue] = useState();
  const [submitting, setSubmitting]=useState(false)

  const handleSubmit=()=>{
    if(value){
      setSubmitting(true);
    }
    
  }
  const generate = () => {
    setValue(uuidv4);
  };
  let companyItems=JSON.parse(window.localStorage.getItem("company"));

  let documentItems= JSON.parse(window.localStorage.getItem("document"));

  const handleClick = () => {
    generate();
  };
  return (
    <Box display="flex" flexDirection="column" w="60vw">
      <Box display={"flex"} mb="5">
        <Box mr="3vw" px="5" w="25vw" py="2" color="white" bg={"teal.300"}>
          Company Name
        </Box>
        {companyItems&&<Select borderColor={"blackAlpha.400"} maxW="60vw">
          {companyItems.map((data) => {
            return <option>{data.name}</option>;
          })}
        </Select>}
      </Box>
      <Box display={"flex"} mb="5">
        <Box mr="3vw" w="25vw" px="6" py="2" color="white" bg={"teal.300"}>
          Client Name
        </Box>
        <Input borderColor={"blackAlpha.400"} type="text" />
      </Box>
      <Box display={"flex"} mb="5">
        <Box mr="3vw" w="25vw" px="6" py="2" color="white" bg={"teal.300"}>
          Create Date
        </Box>
        <DatePick style={{ borderColor: "black", color: "black" }} />
      </Box>
      <Box display={"flex"} mb="5">
        <Box mr="3vw" w="25vw" px="6" py="2" color="white" bg={"teal.300"}>
          Revision
        </Box>
        <Input borderColor={"blackAlpha.400"} type="text" />
      </Box>
      <Box display={"flex"} mb="5">
        <Box mr="3vw" w="25vw" px="5" py="2" color="white" bg={"teal.300"}>
          Document Type
        </Box>
        {documentItems&&<Select borderColor={"blackAlpha.400"} maxW="60vw">
          {documentItems.map((data) => {
            return <option>{data.name}</option>;
          })}
        </Select>}
      </Box>
      <Box display={"flex"} mb="5">
        <Box mr="3vw" w="25vw" px="6" py="2" color="white" bg={"teal.300"}>
          Ref ID
        </Box>
        <Input borderColor={"blackAlpha.400"} type="text" value={value} />
      </Box>
      <Input
        bg={"teal.300"}
        mr="10"
        type="file"
        color="white"
        onChange={handleClick}
      />
      <Box display={"flex"} mb="5">
        <Button ml="10" mt="10" maxW="30vw" _hover={{ bg: "teal.300" }}>
          {" "}
          Cancel
        </Button>
        <Button ml="10" mt="10" maxW="30vw" _hover={{ bg: "teal.300" }} onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
      {submitting&&<Box fontSize={40}>Thank you for your response</Box>}
    </Box>
  );
}
