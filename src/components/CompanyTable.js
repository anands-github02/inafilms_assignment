import React, { useState } from "react";
import CompanyForm from "./CompanyForm";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
} from "@chakra-ui/react";

function CompanyTable() {
  
  const data = [{ id: "", name: "", code: " " }];

  const [companyData, setCompanyData] = useState(data);
  window.localStorage.setItem("company", JSON.stringify(data)); //comment this line.

  let dataForCompanyTableRows = JSON.parse(
    window.localStorage.getItem("company")
  );

  const tableRows = dataForCompanyTableRows.map((info) => {
    return (
      <Tr>
        <Td>
          <center>{info.id}</center>
        </Td>
        <Td>
          <center>{info.name}</center>
        </Td>
        <Td>
          <center>{info.code}</center>
        </Td>
      </Tr>
    );
  });

  const addRows = (data) => {
    const totalCompanies = companyData.length;
    data.id = totalCompanies;
    const updatedCompanyData = [...companyData];
    updatedCompanyData.push(data);
    setCompanyData(updatedCompanyData);
    window.localStorage.setItem("company", JSON.stringify(updatedCompanyData));
  };

  return (
    <Box>
      <CompanyForm func={addRows} />

      <TableContainer mt={20}>
        <Box bg={"teal"} fontSize={"30"}>
          <center>Company List </center>
        </Box>

        <Table variant="striped" colorScheme="teal" size="lg">
          <Thead>
            <Tr>
              <Th>Company ID</Th>
              <Th>Company Name</Th>
              <Th>Company Code</Th>
            </Tr>
          </Thead>
          {dataForCompanyTableRows&&<Tbody>{tableRows}</Tbody>}
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CompanyTable;
