import { AspectRatio, Avatar, Box, Image, Text } from "@chakra-ui/react"


function Story({name,src,profile}) {
  return (
    <Box role={"group"} position="relative"  rounded={"lg"} overflow="hidden" cursor="pointer">
       <Image     src={src} _groupHover={{transform:"scale(1.1) rotate(5deg);",transition:"all 0.5s ease-in-out"}} objectFit="cover" filter={"auto"} brightness="70%"  />
       <Avatar display={{base:"none",sm:"flex"}} src={src} position="absolute" size="xs" borderWidth={2}  borderColor={"twitter.500"} zIndex={50} top={2} left={2} />
       <Text  display={{base:"none",sm:"flex"}} position='absolute' color={"white"} fontSize="xs" fontWeight="semibold" bottom={2} left={2} zIndex={50} >{name}</Text>
    </Box>
  )
}

export default Story