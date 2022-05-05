import { VStack } from '@chakra-ui/react'
import React from 'react'
import InputBox from './InputBox'
import Posts from './Posts'
import Stories from './Stories'

function Feed() {
  return (
    <VStack  flexBasis={"550px"} maxWidth="550px" height={"600px"}  flexGrow={1} py={5} px={5} >
        <Stories />
        <InputBox />
        <Posts />
    </VStack>
  )
}

export default Feed