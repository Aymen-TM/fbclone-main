import { HStack } from '@chakra-ui/react'
import React from 'react'
import Story from './Story'
const stories =[
      {
        name: "Elon Musk",
        src: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
        profiles: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
      },
      {
        name: "Elon Musk",
        src: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
        profiles: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
      },
      {
        name: "Elon Musk",
        src: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
        profiles: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
      },
      {
        name: "Elon Musk",
        src: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
        profiles: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
      },
      {
        name: "Elon Musk",
        src: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
        profiles: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
      },
    ]

function Stories() {
  return (
    <HStack justifyContent={"center"} spacing={3} >
        {stories.map(story=>(
            <Story name={story.name} key={story.name} src={story.src} profiles={story.profiles} />
        ))}
    </HStack>
  )
}

export default Stories