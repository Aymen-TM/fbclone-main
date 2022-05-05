import { Avatar, AvatarBadge, HStack, Text } from '@chakra-ui/react'
import React from 'react'

function Contact({name,image}) {
  return (
    <HStack justifyContent={"start"} width='100%' p={2} cursor={'pointer'} _hover={{backgroundColor:'rgb(228, 230, 232)',color:"rgb(43, 113, 210)"}}>
    <Avatar size={"sm"} name={name} src={image}>
      <AvatarBadge boxSize='1.25em' bg='green.500' />
    </Avatar>
    <Text fontWeight={"medium"} fontSize={"sm"}>{name}</Text>
   </HStack>
  )
}

export default Contact