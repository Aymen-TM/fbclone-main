import { Flex } from '@chakra-ui/react'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Login from '../components/Login'
import RightSide from '../components/RightSide'
import SideBar from '../components/SideBar'

export default function Home({session}) {
  if(!session) return <Login />
  return (
    <div style={{backgroundColor:"#f0f2f5",overflow:"hidden",height:"100vh"}}>
      <Head>
        <title>Facebook</title>
      </Head>
      
      {/* header */}
      <Header />

      <Flex as={"main"} overflow={'scroll'} justifyContent={{base:"space-between"}}>
        {/* side bar */}
        <SideBar />
        {/* feed */}
        <Feed />
        {/* Right Side */}
        <RightSide />
       
      </Flex>
    </div>
  )
}

export async function getServerSideProps(context){
const session = await getSession(context)

return {
  props:{
    session
  }
}
}
