import { IconButton } from '@chakra-ui/react'
import React from 'react'

function HeaderNavItem({Icon}) {
  return (
    <IconButton 
    aria-label="nav-item"
    bgColor="transparent"
    height="100%"
    pr={8}
    pl={8}

    fontSize={20}
    icon={Icon} 
    _focus={{color:"#1b74e4",borderBottom:"2px",borderBottomColor:"#1b74e4",bgColor:"transparent",borderBottomRadius:"0"}}
    />
  )
}

export default HeaderNavItem