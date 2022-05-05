import { Avatar, Box, Heading, HStack, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import HeaderRightNavItem from './HeaderRightNavItem'
import {FaBell,FaCaretDown} from 'react-icons/fa'
import {CgMenuGridO} from 'react-icons/cg'
import {BsMessenger} from 'react-icons/bs'
import {RiLogoutBoxRLine} from 'react-icons/ri'

import {signOut, useSession} from 'next-auth/react'

function HeaderRight() {
const {data} = useSession()

return (
<HStack justifyContent="flex-end">
  <HStack display={["none","none","flex"]} maxW="100px">
    <Avatar name='Mustapha' size="xs" src={data.user.image} />
    <Heading size="xs" maxW="xs" isTruncated>{data.user.name}</Heading>
  </HStack>
  <HeaderRightNavItem Icon={<CgMenuGridO />} />
  <HeaderRightNavItem Icon={<BsMessenger />}/>
  <HeaderRightNavItem Icon={<FaBell />}/>
  <Menu>
    <MenuButton size="sm" rounded="full" as={IconButton}>
      <Icon as={FaCaretDown} />
    </MenuButton>
    <MenuList>
      <MenuItem  icon={<RiLogoutBoxRLine fontSize={20} />} onClick={()=>signOut()}>Log Out</MenuItem>
    </MenuList>
  </Menu>
</HStack>
)
}

export default HeaderRight