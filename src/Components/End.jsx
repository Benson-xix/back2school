import { Box, Divider, Flex, HStack, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { IoLogoInstagram, IoLogoTwitter } from 'react-icons/io'
import { AiOutlineFacebook } from 'react-icons/ai'
import FooterContent from './FooterContent'

const End = () => {
  return (
    <>
    <Box as={"footer"} w={"100%"} h={"80vh"}  py={{ base: 10, sm: 16, md: 20 }} bgColor={"#F5F5F5"}>
        <Flex py={{ base: 5, sm: 10, md: 15 }}>
    <Box w='20%' h='30vh' ml={"30px"} >
    <Box  w={"60px"}  filter= {"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"} ml={"8rem"} mt={"6rem"} > 
        <Image w={"72px"} position={"absolute"} bottom={"25px"} h={"25.86px"}  objectFit='fit'  src='../src/assets/images/Vector1.png' alt='#' ></Image>
        <Image w={"30px"} position={"absolute"}  bottom={"3px"} left={"1rem"}  h={"25.86px"}   objectFit='fit' src='../src/assets/images/Vector.png' alt='#'></Image>
        <Image w={"80px"}  h={"20.86px"} position={"absolute"}  top={"-5px"}   objectFit='fit' src='../src/assets/images/Vector2.png' alt='#'></Image>
        </Box>

        <Box mt={"500px"} ml={"210px"}>  <Text fontFamily={"Opificio"} fontWeight={"700"} fontStyle={"normal"} fontSize={"18px"} lineHeight={"53px"} color={"#2D2D2D"}>Legal</Text></Box>
    </Box>
    <Spacer />
    <Box w='60%' h='30vh' mr={"20px"} >
        <FooterContent/>

        
   <Box mt={"50px"}>
    <HStack spacing={"200px"}>
        <Text  fontFamily={"Opificio"} fontWeight={"700"} fontStyle={"normal"} fontSize={"18px"} lineHeight={"53px"} color={"#8417B8"}>Terms of use</Text>
        <Text fontFamily={"Opificio"} fontWeight={"700"} fontStyle={"normal"} fontSize={"18px"} lineHeight={"53px"} color={"#8417B8"}>Privacy policy</Text>

       <HStack ml={"11rem !important"} spacing={"5"}>
       <IoLogoTwitter size={"30px"}  color={"#8417B8"} />
        <AiOutlineFacebook  size={"30px"}  color={"#8417B8"} />
        <IoLogoInstagram  size={"30px"}  color={"#8417B8"} />
       </HStack>
    </HStack>
   </Box>
        </Box> 

       
        </Flex>
 <Divider
          w={" 1519.5px"}  mt={"10rem"} ml={"15em"}
          borderColor=' .1px solid #DEDEDE'
        
        ></Divider>
    </Box> 
   
    
    </>
  )
}

export default End