import { Button, Flex,Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {signIn} from 'next-auth/react'

function Login() {
return (
<Flex direction={"column"} justifyContent="center" alignItems="center" height="100vh" >
    <Image src="/facebook-logo.svg"  width={150} height={150} objectFit="container" />
    <Button
        onClick={()=>signIn()}
        w={'full'}
        maxW={'md'}
        mt={10}
        bgColor={'#1877f2'}
        color="white"
        _hover={{bgColor:'rgba(24, 119, 242,0.9)'}}
        _active={{bgColor:'rgba(24, 119, 242,0.9)'}}
        leftIcon={<FaFacebook />}>
          <Text>LogIn with Facebook</Text>
      </Button>
</Flex>
)
}

export default Login