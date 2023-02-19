import { Box, Button, Heading, HStack, Image, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, PinInput, PinInputField, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'
import Confirmation from './Confirmation'

const Otp = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
     <Box w={"100%"} mt={"10px"}>
        <VStack spacing={10}>
            <Heading fontSize={"24px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"700"}lineHeight={"144.8%"}>An OTP was sent to your email</Heading>
          

        <Box mt={"70px !important"}>
            <HStack>
            <PinInput defaultValue='8888'  size='lg' borderColor={"none"} >
                    <PinInputField  fontSize={"24px"} borderRadius={"none"} border={"2px solid"}  fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"700"}lineHeight={"144.8%"} _hover={{ borderBottomStyle:"10.5px solid #8417B8 !important" }} borderTopStyle= {"hidden"} borderColor={"none"} borderRightStyle= {"hidden"} borderLeftStyle= {"hidden"} borderBottomStyle= {"10.5px solid #8417B8 !important"} color={"#8417B8"} />
                    <PinInputField  fontSize={"24px"} borderRadius={"none"} border={"2px solid"}  fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"700"}lineHeight={"144.8%"} _hover={{ borderBottomStyle:"10.5px solid #8417B8 !important" }} borderTopStyle= {"hidden"} borderColor={"none"} borderRightStyle= {"hidden"} borderLeftStyle= {"hidden"} borderBottomStyle= {"10.5px solid #8417B8 !important"} color={"#8417B8"} />
                    <PinInputField  fontSize={"24px"} borderRadius={"none"} border={"2px solid"}  fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"700"}lineHeight={"144.8%"} _hover={{ borderBottomStyle:"10.5px solid #8417B8 !important" }} borderTopStyle= {"hidden"} borderColor={"none"} borderRightStyle= {"hidden"} borderLeftStyle= {"hidden"} borderBottomStyle= {"10.5px solid #8417B8 !important"} color={"#8417B8"} />
                    <PinInputField  fontSize={"24px"} borderRadius={"none"} border={"2px solid"}  fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"700"}lineHeight={"144.8%"} _hover={{ borderBottomStyle:"10.5px solid #8417B8 !important" }} borderTopStyle= {"hidden"} borderColor={"none"} borderRightStyle= {"hidden"} borderLeftStyle= {"hidden"} borderBottomStyle= {"10.5px solid #8417B8 !important"} color={"#8417B8"} />
                </PinInput>
            </HStack>
            </Box>

            <Box mt={"50px !important"}>
               <HStack>
               <Button w={"172px"} h={"60px"} bgColor={"#FFFFFF"} onClick={onClose} border={"0.5px solid #8417B8"} borderRadius={"5px"}  color={"#8417B8"} fontSize={"14px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}  _hover={{ bgColor:"#FFFFFF", color:"#8417B8" }} >Close</Button>
                <Button w={"172px"} h={"60px"} bgColor={"#8417B8"} onClick={onOpen} transition={"opacity linear .5s"}  color={"#FFFFFF"} borderRadius={"5px"} fontSize={"14px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}  _hover={{ bgColor:"#8417B8", color:"#FFFFFF" }}  >Proceed</Button>
               </HStack>
            </Box>

        </VStack>
    </Box>

    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
        <ModalContent w={"439px"} h={"665px"} bgColor={"#FFFFFF"}>
        <ModalCloseButton mr={"390px"}  rounded={"2xl"} />
        <ModalHeader >
        <Box bgColor={" rgba(132, 23, 184, 0.1)"} mt={"-10px"}  p={"3"} ml={"180px"} w={"57px"} h={"57px"} rounded={"100px"}>
            <Image w={"25px"}h={"25px"} mt={"5px"} ml={"4px"} objectFit='fit !important' src='../public/images/Union.png'alt='#'>
            </Image>
            </Box>
        </ModalHeader>
            <Confirmation/>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Otp