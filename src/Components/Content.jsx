import { Avatar, Box, HStack, IconButton, Image, Text, VStack, Icon, Button, ScaleFade, useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Cart from '../Modal/Cart'
import View from '../Modal/View'

const Content = ({ image,title, price,icon}) => {
  const { isOpen, onOpen, onClose} = useDisclosure()
  const [size, setSize] = useState('6xl')

  const sizes = ['6xl']

  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }


  return (
    <>
    {sizes.map((size) => ( 
 <Button  onClick={() => handleSizeClick(size)} key={size} outline={"none"} bg={"none"} transition={"opacity linear .5s"}  _hover={{ bg:"none" }} >
   
 <Box py={{ base: 5, sm: 10, md: 15 }}>
<HStack position={"relative"} display={"grid"} mt={"-2rem"}>
<Box  width={"205.87px"} h={"181.87px"}  border={"0.5px solid #C1C1C1"}  borderRadius={"7.88872px"}>
<Image src={image} objectFit={"cover"}  w={"130px"}  h={"135px"} m={"1rem"} />
</Box>

<Box w={"35px"} >
<Button w={"35px"} h={"36px"}  py={".3em"}   px={".3em"} bgColor={"#ffff"} border={"0.394436px solid #000000"} ml={"5px"} position={"absolute"} top={"1rem"} left={"155px"}  borderRadius={"7.88872px"}>
 {icon} 
</Button>
</Box>

</HStack> 

<VStack spacing={"-5"}>

<Box mr={"8rem"}  >
<Text  textAlign={"left"} fontFamily={"Opificio"} fontStyle={"normal"} fontWeight={"400"} lineHeight={"56px"} fontSize={"26px"}  color={"#212121"} letterSpacing={"-1%"}>{price}</Text>
<Text fontFamily={"Opificio"}  mt={"-1rem"}   textAlign={"left"} fontStyle={"normal"} fontWeight={"700"} lineHeight={"20px"} fontSize={"16px"}  color={"#212121"} letterSpacing={"-1%"} >{title}</Text>

</Box>



</VStack>
</Box>

</Button>

    ))}
   
      
    <Modal  isOpen={isOpen} size={size} onClose={onClose}  >
        <ModalOverlay  bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
        <ModalContent bgColor={"#FFFFFF"}   >
        <ModalCloseButton mr={"1100px"} bgColor={"blackAlpha.600"} rounded={"2xl"}  />
         <View/>
        </ModalContent>
     </Modal>

     

    </>
  )
}

export default Content