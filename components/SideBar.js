import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import {FaUserFriends,FaStore,FaCaretDown} from 'react-icons/fa'
import {HiUserGroup} from 'react-icons/hi'
import {BsCollectionPlay} from 'react-icons/bs'
import SideRow from './SideRow'
import { useSession } from 'next-auth/react'

function SideBar() {
    const {data} = useSession()
  return (
    <Box  mt={5}  p={2}  minWidth={{base:"auto",md:"200px"}} position="sticky" zIndex={'sticky'} top="0">
        <SideRow src={data.user.image} title={data.user.name} />
        <SideRow RowIcon={FaUserFriends} title={"Friends"} />
        <SideRow RowIcon={FaStore} title={"Store"} />
        <SideRow RowIcon={HiUserGroup} title={"Groups"} />
        <SideRow RowIcon={BsCollectionPlay} title={"Watch"} />
        <SideRow RowIcon={FaCaretDown} title={"see more"} />
    </Box>
  )
}

export default SideBar