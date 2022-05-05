import { Avatar, Box, Button, CloseButton, FormControl, HStack, IconButton, Image, Input, VStack } from "@chakra-ui/react"
import { useSession } from "next-auth/react"
import {FaVideo,FaImages} from "react-icons/fa"
import {MdOutlineEmojiEmotions} from "react-icons/md"
import {useRef, useState} from "react"
import { collection, addDoc,Timestamp, setDoc,doc } from "firebase/firestore"; 
import {db,storage} from '../firebase'
import { getDownloadURL, ref, uploadString } from "firebase/storage"


function InputBox() {
const {data} = useSession()
const inputref = useRef(null)
const imagepicker = useRef(null)
const [imageToPost, setimageToPost] = useState(null)

function post(e){
e.preventDefault()
if(!inputref.current.value) return;
try {
    const postsRef =  addDoc(collection(db, "Posts"), {
      message:inputref.current.value,
      name: data.user.name,
      email: data.user.email,
      image:data.user.image,
      timestamp:Timestamp.now()
    }).then(document =>{
        if(imageToPost){
            const storageRef = ref(storage, `images/${document.id}`);
            // 'file' comes from the Blob or File API
            uploadString(storageRef, imageToPost, 'data_url').then(() => {
              //download image url  
              getDownloadURL(storageRef).then((url)=>{
                // attache callback to get url and set it as a field to the document   
                setDoc(doc(db,'Posts',document.id),{postImage:url},{merge:true})   
                 
                })
            });
        }
    })
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const addImageToPost = (e)=>{
    const reader = new FileReader();
    if(e.target.files[0]){
        reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent)=>{
        setimageToPost(readerEvent.target.result)
    }
}
const removeImage = ()=>{
    setimageToPost(null)
}

return (
<VStack bgColor="white" rounded='lg' p={3}  shadow={"md"} width={"100%"}>
    <HStack width={"100%"}>
        <Avatar size="sm" src={data.user.image} />
        <form style={{width:"100%",display:'flex',justifyContent:"center",alignItems:"center"}}>
            <FormControl>
                <Input ref={inputref} borderRadius={"full"}  bgColor="#f0f2f5" isTruncated _placeholder={{color:"#77797c"}} placeholder={"anything new "+data.user.name}  />
            </FormControl>
        <Button onClick={(e)=>post(e)}
            colorScheme={"twitter"} ml={2} type='submit' size="sm">
                Submit
                </Button>
        </form>
      <Box as={"div"} position={"relative"} maxWidth={"50px"} display={imageToPost?'block':'none'}>
        <Image 
               objectFit='contain'
               src={imageToPost}/>
        <CloseButton onClick={()=>removeImage()} color={"red.500"} _focus={{outline:"none"}}  size={"sm"} position={"absolute"} top={-4} right={-2} />
    </Box>
    </HStack>
    <HStack width={"100%"} >
        <Button  display={{base:"none",lg:"flex"}} bgColor={"transparent"} size="sm" flexBasis={"33.3%"} leftIcon={<FaVideo fontSize={21} color={"red"} />} >Live
        </Button>
        <Button onClick={()=>imagepicker.current.click()}  display={{base:"none",lg:"flex"}} bgColor={"transparent"} size="sm" flexBasis={"33.3%"} leftIcon={<FaImages fontSize={21} color={"green"}   />}  >Images/Videos
        <Input onChange={(e)=>addImageToPost(e)} ref={imagepicker} type={"file"} display={"none"}  />
        </Button>
        <Button display={{base:"none",lg:"flex"}} bgColor={"transparent"} size="sm" flexBasis={"33.3%"} leftIcon={<MdOutlineEmojiEmotions fontSize={21} color={"orange"} />}  >Emojis</Button>

        <IconButton display={{base:"flex",lg:"none"}} bgColor={"transparent"}  flexBasis={"33.3%"} icon={<FaVideo fontSize={21}   color={"red"} />} /> 
        <IconButton onClick={()=>imagepicker.current.click()}  display={{base:"flex",lg:"none"}} bgColor={"transparent"}  flexBasis={"33.3%"} icon={<FaImages fontSize={21}  color={"green"} />}>
            <Input onChange={(e)=>addImageToPost(e)} ref={imagepicker} type={"file"} display={"none"}  />    
        </IconButton> 
        <IconButton display={{base:"flex",lg:"none"}} bgColor={"transparent"}  flexBasis={"33.3%"} icon={<MdOutlineEmojiEmotions fontSize={21} color={"yellow"} />} /> 
      

    </HStack>
</VStack>
)
}

export default InputBox