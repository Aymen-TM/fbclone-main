import { Avatar, AvatarBadge, Box, Flex, Heading, HStack, Icon, IconButton, Text, VStack } from "@chakra-ui/react"
import {BsThreeDots} from "react-icons/bs"
import {AiOutlineSearch} from 'react-icons/ai'
import {FaVideo} from "react-icons/fa"
import Contact from "./Contact"

function RightSide() {
  return (
   <VStack style={{zIndex:'1'}}  display={{base:"none",lg:"flex"}} p={2} mt={5} minWidth={"300px"} position="sticky" zIndex={'sticky'} top="0"  >
     <Flex justifyContent={"space-between"} alignItems={"center"} width="100%">
       <Heading fontSize={"large"} fontWeight="semibold" color={"gray.600"} >Contact</Heading>
       <HStack>
         <IconButton size={"xs"} icon={<FaVideo />} />
         <IconButton size={"xs"} icon={<AiOutlineSearch />} />
         <IconButton size={"xs"} icon={<BsThreeDots />} />
       </HStack>
     </Flex>
     <Contact name={"Elon musk"} image={'/elon.jpg'} />
     <Contact name={"Jeff bezzos"} image={'/jeff.jpg'} />
   </VStack>
  )
}

export default RightSide