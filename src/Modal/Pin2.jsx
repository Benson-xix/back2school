import React from 'react'
import Confirmation from './Confirmation'
import { Box, Button, Heading, HStack, Image, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, PinInput, PinInputField, Text, useDisclosure, VStack } from '@chakra-ui/react'

const Pin2 = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
     <Box w={"100%"} mt={"10px"}>
        <VStack spacing={5}>
            <Heading fontSize={"24px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"700"}lineHeight={"144.8%"}>Input Wallet Pin</Heading>
            <Text fontSize={"16px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}>Augue platea est risus et</Text>

        <Box mt={"50px !important"}>
            <HStack>
            <PinInput defaultValue='8888'  size='lg' borderColor={"none"} >
                    <PinInputField  fontSize={"24px"} borderRadius={"none"} _hover={{ borderBottomStyle:"10.5px solid #8417B8 !important" }} border={"2px solid"}  fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"700"}lineHeight={"144.8%"} borderTopStyle= {"hidden"} borderColor={"none"} borderRightStyle= {"hidden"} borderLeftStyle= {"hidden"} borderBottomStyle= {"10.5px solid #8417B8 !important"} color={"#8417B8"} />
                    <PinInputField  fontSize={"24px"} borderRadius={"none"} border={"2px solid"} _hover={{ borderBottomStyle:"10.5px solid #8417B8 !important" }}  fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"700"}lineHeight={"144.8%"} borderTopStyle= {"hidden"} borderColor={"none"} borderRightStyle= {"hidden"} borderLeftStyle= {"hidden"} borderBottomStyle= {"10.5px solid #8417B8 !important"} color={"#8417B8"} />
                    <PinInputField  fontSize={"24px"} borderRadius={"none"} border={"2px solid"} _hover={{ borderBottomStyle:"10.5px solid #8417B8 !important" }}  fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"700"}lineHeight={"144.8%"} borderTopStyle= {"hidden"} borderColor={"none"} borderRightStyle= {"hidden"} borderLeftStyle= {"hidden"} borderBottomStyle= {"10.5px solid #8417B8 !important"} color={"#8417B8"} />
                    <PinInputField  fontSize={"24px"} borderRadius={"none"} border={"2px solid"} _hover={{ borderBottomStyle:"10.5px solid #8417B8 !important" }}  fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"700"}lineHeight={"144.8%"} borderTopStyle= {"hidden"} borderColor={"none"} borderRightStyle= {"hidden"} borderLeftStyle= {"hidden"} borderBottomStyle= {"10.5px solid #8417B8 !important"} color={"#8417B8"} />
                </PinInput>
            </HStack>
            </Box>

            <Box mt={"30px !important"}>
               <HStack>
               <Button w={"172px"} h={"60px"} bgColor={"#FFFFFF"} onClick={onClose} border={"0.5px solid #8417B8"} borderRadius={"5px"}  color={"#8417B8"} fontSize={"14px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}  _hover={{ bgColor:"#FFFFFF", color:"#8417B8" }} >Close</Button>
                <Button w={"172px"} h={"60px"} bgColor={"#8417B8"} transition={"opacity linear .5s"}  onClick={onOpen} color={"#FFFFFF"} borderRadius={"5px"} fontSize={"14px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}  _hover={{ bgColor:"#8417B8", color:"#FFFFFF" }}  >Proceed</Button>
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
      </Modal></>
  )
}

export default Pin2