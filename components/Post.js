import { Avatar, Box, Button, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import {AiOutlineLike} from 'react-icons/ai'
import {GoComment} from 'react-icons/go'
import {RiShareForwardLine} from 'react-icons/ri'


function Post({name,image,timestamp,postimage,message}) {
  return (
    <Box width='100%' mt={4} >
        <Box  bgColor={"white"} p={4}>
        <HStack >
            <Avatar name={name} src={image} size={"md"} />
            <VStack  alignItems={'start'} >
                <Text textAlign={'start'} fontSize={"md"} fontWeight={'bold'} as={'h4'}>{name}</Text>
                <Text fontSize={"xs"} color='gray.600' as={'h3'}>{new Date(timestamp.toDate()).toLocaleString()}</Text>
            </VStack>
        </HStack>
        <Text >{message}</Text>
        </Box>
        <Box height={['56','96']} position="relative">
          {postimage && <Image src={postimage} objectFit='cover' layout='fill'  /> }  
        </Box>
        <HStack bgColor='white' rounded={"md"}>
            <Box rounded={"md"} flexGrow={1} display={"flex"} p={2} mr={1} alignItems={"center"} justifyContent={'center'} _hover={{backgroundColor:'rgb(242, 242, 242)'}} cursor={"pointer"}>
                <Icon as={AiOutlineLike} />
                <Text ml={2}>Like</Text>
            </Box>
            <Box rounded={"md"} flexGrow={1}  display={"flex"} p={2} mr={1}  alignItems={"center"} justifyContent={'center'} _hover={{backgroundColor:'rgb(242, 242, 242)'}} cursor={"pointer"}>
                <Icon as={GoComment} />
                <Text ml={2}>Comment</Text>
            </Box>
            <Box rounded={"md"} flexGrow={1}  display={"flex"} p={2} mr={1}  alignItems={"center"} justifyContent={'center'}  _hover={{backgroundColor:'rgb(242, 242, 242)'}} cursor={"pointer"}>
                <Icon as={RiShareForwardLine} />
                <Text ml={2}>Share</Text>
            </Box>
        </HStack>
    </Box>
  )
}

export default Post