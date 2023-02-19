import { Box, Button, Flex, Heading, HStack, Image, Img, Input, InputGroup, InputLeftElement, Modal, ModalCloseButton, ModalContent, ModalOverlay, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { RiSearchFill } from "react-icons/ri";
import { MdShoppingCart } from "react-icons/md";
import React from 'react'
import Login from './Login';
import SignUp from './SignUp';
import Cart from '../Modal/Cart';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box py={{ base: 10, sm: 16, md: 20 }}> 
    <Flex w={"1170px"} h={"10px"} >
      <Box mb={"20px"}>
      <VStack  w={"60px"}  filter= {"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"} ml={"15rem"}> 
        <Image w={"72px"} position={"absolute"} bottom={"20px"} h={"25.86px"}  objectFit='fit'  src='../public/images/Vector1.png' alt='#' ></Image>
        <Image w={"30px"} position={"absolute"}  bottom={"2px"}  h={"25.86px"}   objectFit='fit' src='../public/images/Vector.png' alt='#'></Image>
        <Image w={"80px"}  h={"20.86px"} position={"absolute"}  top={"-13px"}   objectFit='fit' src='../public/images/Vector2.png' alt='#'></Image>
        </VStack>
      </Box>
      

    <HStack spacing='10' mb={"20px"}> 

       

      <Box ml={"15rem"} py={{ base: 10, sm: 16, md: 20 }} >
        <InputGroup size='lg'>
      <Input
      w={"700px"} h={"50px"} rounded={"20px"}
      />
      <InputLeftElement width='3rem'>
          <RiSearchFill/>
        
      </InputLeftElement>
      </InputGroup>
      </Box>
       

      <Stack spacing={4} direction='row' align='center' gap={"6px"} >
  <Button py={"10px"} bgColor={"#FFFFFF "} color={"#8417B8"} fontFamily={"Opificio !important"}  fontStyle={"normal"} fontWeight={"700"} lineHeight={"20px"}  alignItems={"flex-start"} _hover={{ bg:"none" }}  border={"0.5px solid #8417B8 "}  borderColor={"#8417B8"}   w={"119px"} h={"47px"}>
    <Login />
  </Button>
  <Button  py={"10px"} bgColor={"#8417B8"} color={"white"} fontFamily={"Opificio"}  fontStyle={"normal"} fontWeight={"700"} lineHeight={"20px"}  alignItems={"flex-start"}  w={"119px"} h={"47px"} _hover={{ bgColor:"#8417B8", color:  "white"  }} >
    <SignUp/>
  </Button>
  <Button onClick={onOpen} bgColor={"#FFFFFF"} border={"0.5px solid #8417B8 "} fontFamily={"Opificio"}  fontStyle={"normal"} fontWeight={"700"} lineHeight={"20px"}  borderColor={"#8417B8"} _hover={{ bg:"none" }}  w={"66px"} h={"50px"} justifyContent={"center"}  alignItems={"flex-start"} >
    <MdShoppingCart size={"50px"} color={"#8417B8"} />
  </Button>
  
</Stack>


   
    
      
    </HStack>
    </Flex>
    <Box w={"1900px"} h={"35px"} bgColor={"#FFFFFF"} boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.15)"}>

</Box>
<Modal isOpen={isOpen}   onClose={onClose}>
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
        <ModalContent  w={"570px"} h={"323px"}  bgColor={"#FFFFFF"}>
        <ModalCloseButton mr={"400px"} mt={"1px"}  rounded={"2xl"}  />
      <Cart/>
        </ModalContent>
      </Modal>


    </Box>
  )
}

export default Header