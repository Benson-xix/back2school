import React from 'react'
import { Box, Button, Heading, HStack, Image, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from '@chakra-ui/react'
import Pin from './Pin'
import { IoCard } from 'react-icons/io5'
import Confirmation from './Confirmation'
import Pin2 from './Pin2'

const CardConfirm = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Box w={"100%"} mt={"10px"} >
       <VStack>
           <Heading fontSize={"24px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"700"}lineHeight={"144.8%"}>Confirm Payment</Heading>
           <Text fontSize={"16px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}>Augue platea est risus et</Text>

           <Box w={"322px"} h={"105px"}  background={"rgba(132, 23, 184, 0.1)"} borderRadius={"9px"}>
              <VStack mt={"20px"}>
              <Text  fontSize={"16px"} color={"#3A3A3A"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"700"}lineHeight={"141.6%"}>N300,000</Text>
              <Text fontSize={"16px"} color={"#3A3A3A"}fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}>will be deducted from your wallet</Text>
              </VStack>
           </Box>
           
           <Box mt={"30px !important"} ml={"280px !important"}>
              <HStack>
              <IoCard color={"#8417B8"} bgColor={"rgba(132, 23, 184, 0.1)"} />
              <Text fontSize={"14px"} color={"#8417B8"}fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"13px"}>Card</Text>
              </HStack>
           </Box>

           <Box mt={"30px !important"}>
              <HStack>
              <Button w={"172px"} h={"60px"} bgColor={"#FFFFFF"} transition={"opacity linear .5s"}  onClick={onClose} border={"0.5px solid #8417B8"} borderRadius={"5px"}  color={"#8417B8"} fontSize={"14px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}  _hover={{ bgColor:"#FFFFFF", color:"#8417B8" }} >Close</Button>
               <Button w={"172px"} h={"60px"} bgColor={"#8417B8"} onClick={onOpen} color={"#FFFFFF"} borderRadius={"5px"} fontSize={"14px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}  _hover={{ bgColor:"#8417B8", color:"#FFFFFF" }}  >Proceed</Button>
              </HStack>
           </Box>
       </VStack>
   </Box>

   <Modal isOpen={isOpen} onClose={onClose}>
       <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
       <ModalContent w={"439px"} h={"465px"} bgColor={"#FFFFFF"}>
       <ModalCloseButton mr={"390px"}  rounded={"2xl"} />
       <ModalHeader >
       <Box bgColor={" rgba(132, 23, 184, 0.1)"} mt={"-10px"}  p={"3"} ml={"180px"} w={"57px"} h={"57px"} rounded={"100px"}>
            <Image w={"25px"}h={"25px"} mt={"5px"} ml={"4px"} objectFit='fit !important' src='../public/images/Union.png'alt='#'>
            </Image>
            </Box>
       </ModalHeader>
           <Pin2/>
       </ModalContent>
     </Modal>
   </>
  )
}

export default CardConfirm