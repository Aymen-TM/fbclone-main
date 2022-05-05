import { IconButton } from '@chakra-ui/react'
import React from 'react'
import {BsMessenger} from 'react-icons/bs'

function HeaderRightNavItem({Icon}) {
  return (
    <IconButton
    icon={Icon}
    size="sm"
    rounded="full"
    />
  )
}

export default HeaderRightNavItem