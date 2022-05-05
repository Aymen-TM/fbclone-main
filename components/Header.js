import { Box, Flex, HStack, IconButton, Input, InputGroup, InputLeftElement} from '@chakra-ui/react'


import React from 'react'
import HeaderCenter from './HeaderCenter'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'




function Header() {
return (
<Flex as="nav" height="45px" width="100vw" position="sticky" zIndex={'sticky'} top="0" justifyContent="space-between" px={3} backgroundColor="white" shadow="md">
  <HeaderLeft />
  <HeaderCenter />
  <HeaderRight />
</Flex>
)
}

export default Header