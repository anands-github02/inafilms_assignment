import { Box } from '@chakra-ui/react'
import React from 'react'
import DocumentTable from '../components/DocumentTable'
import Sidebar from '../components/Sidebar'

export default function Document() {
  return (
    <Box display={'flex'} >
    <Sidebar />
    <Box ml='20vw' w='80vw' h='100vh' display={'flex'} alignItems={'center'}  flexDirection='column'>
    <Box fontSize={'30px'} mb='10vh' bg={'teal'} w='100%'h='6vh'><center>DOCUMENT DATA</center></Box>
    <DocumentTable />
  </Box>
</Box>
  )
}
