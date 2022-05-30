import React, { useState } from "react";
import DocumentForm from "./DocumentForm";
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

function DocumentTable() {
  const data = [{ id: "", name: "", code: "" }];
  const [documentData, setDocumentData] = useState(data);

  const tableRows = documentData.map((info) => {
    return (
      <Tr>
        <Td>{info.id}</Td>
        <Td>{info.name}</Td>
        <Td>{info.code}</Td>
      </Tr>
    );
  });

  const addRows = (data) => {
    const totalDocuments = documentData.length;
    console.log(totalDocuments)
    data.id = totalDocuments;
    const updatedDocumentData = [...documentData];
    console.log(updatedDocumentData)

    updatedDocumentData.push(data);
    setDocumentData(updatedDocumentData);
    console.log(documentData);
  };

  return (
    <Box>
      <DocumentForm func={addRows} />
      <TableContainer mt={'10vh'}>
      <Box bg={'teal'} fontSize={'30'}><center>Document List </center></Box>
        <Table variant="striped" colorScheme="teal" size='lg'>
          <Thead>
            <Tr>
              <Th>Document ID</Th>
              <Th>Document Name</Th>
              <Th>Document Code</Th>
            </Tr>
          </Thead>
          <Tbody>{tableRows}</Tbody>
        </Table>
      </TableContainer>
      
    </Box>
  );
}

export default DocumentTable;