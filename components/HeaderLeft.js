import { HStack, IconButton, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

function HeaderLeft() {
  return (
    <HStack>
    <Image src="/facebook-logo.svg" width={40} height={40} />
    <IconButton display={["flex","none"]} rounded="50%" icon={<AiOutlineSearch  color="#727375" fontSize={16}  />} />
    <InputGroup size="sm" display={["none","block"]} >
    <InputLeftElement >
      <AiOutlineSearch  color="#727375" fontSize={16}  />
    </InputLeftElement>
     <Input rounded="30px" width="200px"  backgroundColor="#f0f2f5"  type='text' _focus={{outline:"none"}} placeholder='Search on Facebook' _placeholder={{color:"#727375",fontSize:"0.75rem"}} pb={1} />
    </InputGroup>
  </HStack>
  )
}

export default HeaderLeft