import { Box, Button, Heading, HStack, Image, Input, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'
import SplitPaymentConfirmation from './SplitPaymentConfirmation'

const SplitPayment = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Box w={"100%"} mt={"10px"}>
    <VStack spacing={"5"}>
      <Heading fontSize={"24px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"700"}lineHeight={"144.8%"}>Amount</Heading>
      <Text fontSize={"16px"} boxShadow={" none !important"}  fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}>Enter the amount you are paying from your  wallet</Text>
      <Input  size={"lg"} textAlign={"center"} fontSize={"24px"} boxShadow={" none !important"}  fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"} background={"rgba(132, 23, 184, 0.1)"} border={"none"} placeholder='input your amount' color={"black"} w={"325px"} h={"55px"} borderRadius={"10px"} />       
          <Box ml={"160px !important"}>
            <VStack>
              <Text fontSize={"14px"} color={"#8417B8"}fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"13px"}>-Wallet balance - N1200,000</Text>
              <Text fontSize={"14px"} color={"#e21313"}fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"13px"}>Remeaning balance - N50,000</Text>
            </VStack>
          </Box>
          <HStack>
               <Button w={"172px"} h={"60px"} bgColor={"#FFFFFF"} onClick={onClose} border={"0.5px solid #8417B8"} borderRadius={"5px"}  color={"#8417B8"} fontSize={"14px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}  _hover={{ bgColor:"#FFFFFF", color:"#8417B8" }} >Close</Button>
                <Button w={"172px"} h={"60px"} bgColor={"#8417B8"} onClick={onOpen} color={"#FFFFFF"} borderRadius={"5px"} fontSize={"14px"} fontFamily={"Opificio"} transition={"opacity linear .5s"}  fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}  _hover={{ bgColor:"#8417B8", color:"#FFFFFF" }}  >Proceed</Button>
               </HStack>
    </VStack>
    </Box>

    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
        <ModalContent w={"439px"} h={"465px"} bgColor={"#FFFFFF"}>
        <ModalCloseButton mr={"390px"}  rounded={"2xl"} />
        <ModalHeader >
        <Box bgColor={" rgba(132, 23, 184, 0.1)"} mt={"-10px"}  p={"3"} ml={"180px !important"} w={"57px"} h={"57px"} rounded={"100px"}>
            <Image w={"25px"}h={"25px"} mt={"5px"} ml={"4px"} objectFit='fit !important' src='../public/images/Union.png'alt='#'>
            </Image>
            </Box>
        </ModalHeader>
          <SplitPaymentConfirmation/>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SplitPayment