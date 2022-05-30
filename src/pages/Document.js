import { Box } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../components/Sidebar'

export default function Document() {
  return (
    <Box display={'flex'} >
        <Sidebar />
        <Box ml="20vw" fontSize={"4xl"}>
        Document
      </Box>
    </Box>
  )
}
