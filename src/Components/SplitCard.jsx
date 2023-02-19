import { Box, Button, HStack, Image, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { IoCard } from 'react-icons/io5'
import CardPayment from '../Modal/CardPayment'

const SplitCard = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Box >
        <Button transition={"opacity linear .5s"}  onClick={onOpen} w={"352px"} h={"50px"} p={"0px"} gap={"13px"} color={"#8417B8"} bgColor={"rgba(132, 23, 184, 0.1)"} _hover={{ bgColor:"rgba(132, 23, 184, 0.1)", color:"#8417B8" }} >
        <HStack>
              <IoCard color={"#8417B8"} />
              <Text fontSize={"14px"} color={"#8417B8"}fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"13px"}>Complete payment with your Card</Text>
              </HStack>
        </Button>
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
          <CardPayment/>
       </ModalContent>
     </Modal>
    </>
  )
}

export default SplitCard