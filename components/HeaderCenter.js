import { HStack } from '@chakra-ui/react'
import React from 'react'
import HeaderNavItem from './HeaderNavItem'
import {HiUserGroup} from 'react-icons/hi'
import {AiFillHome} from 'react-icons/ai'
import {FaStore} from 'react-icons/fa'
import {SiFacebookgaming} from 'react-icons/si'
import {BsCollectionPlay} from 'react-icons/bs'
function HeaderCenter() {
  return (
    <HStack display={["none","none","flex"]} flexGrow={1}  justifyContent="center" spacing={3} >
      <HeaderNavItem Icon={<AiFillHome />} />
      <HeaderNavItem Icon={<BsCollectionPlay />} />
      <HeaderNavItem Icon={<FaStore />} />
      <HeaderNavItem Icon={<HiUserGroup />} />
      <HeaderNavItem Icon={<SiFacebookgaming />} />
    </HStack>
  )
}

export default HeaderCenter