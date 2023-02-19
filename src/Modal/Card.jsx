import { Box, Button, HStack, Image, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5'
import { AiFillCreditCard } from 'react-icons/ai'
import CardPayment from './CardPayment'

const Card = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = useState('xl')

    const sizes = ['xl']
    
    const handleSizeClick = (newSize) => {
      setSize(newSize)
      onOpen()
     
    }

  return (
    <>

                {sizes.map((size)  => (
                <Button border={"0.5px solid #949292"} h={"60px"} w={"400px"}  bgColor={"#ffffff"} borderRadius={"9px"} transition={"opacity linear .5s"}   _hover={{ bgColor:"#ffffff", color:  "#8417B8"  }}  onClick={() => handleSizeClick(size)} key={size} >
                <HStack spacing={3}>
                <AiFillCreditCard  color={"#8417B8"} w={"20px"} h={"20px"}/>
                <Text color={"#8417B8"} mr={"200px !important"} fontSize={"16px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"84.8%"}>
                    Pay with Card
                </Text>
                <IoChevronForwardOutline w={"16px"} h={"16px"}  />
                </HStack>
                </Button>

                ))}
   

                <Modal isOpen={isOpen} size={size} onClose={onClose}>
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
        <ModalContent  h={"555px"} bgColor={"#FFFFFF"}>
        <ModalCloseButton mr={"500px"} bgColor={"blackAlpha.600"} rounded={"2xl"} />
        <ModalHeader>
        <Box bgColor={" rgba(132, 23, 184, 0.1)"} mt={"-10px"}  p={"3"} ml={"230px"} w={"57px"} h={"57px"} rounded={"100px"}>
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

export default Card