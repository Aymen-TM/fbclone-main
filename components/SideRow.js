import { HStack, Icon, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

function SideRow({src,RowIcon,title}) {
return (
<HStack  px={3} py={3}  cursor="pointer" borderRadius={{base:"full",md:"none"}} _hover={{bgColor:"rgba(0,0,0,0.1)"}} _active={{bgColor:"rgba(0,0,0,0.2)"}}>
    {src &&
    <Image src={src} width={20} height={20} layout={"fixed"} style={{borderRadius:"50%"}} />
    }
    {RowIcon &&
    <Icon as={RowIcon}  color="twitter.500" />
    }
    <Text display={{base:"none",md:"block"}} transition="all" transitionDuration={"0.3s"}  as={"p"} fontSize={'sm'} >{title}</Text>
</HStack>
)
}

export default SideRow