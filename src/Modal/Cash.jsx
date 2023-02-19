import { Box, Button, HStack, Image, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoWalletSharp } from 'react-icons/io5'
import { IoChevronForwardOutline } from 'react-icons/io5'
import CashPayment from './CashPayment'

const Cash = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = useState('md')

    const sizes = ['md']
    
    const handleSizeClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }

  return (
    <>

                  {sizes.map((size)  => (
                  
                  <Button border={"0.8px solid #949292"} h={"60px"} w={"400px"} transition={"opacity linear .5s"} bgColor={"#ffffff"} borderRadius={"9px"} _hover={{ bgColor:"#ffffff", color:  "#8417B8"  }} onClick={() => handleSizeClick(size)} key={size}>
                          <HStack spacing={3}>
                          <IoWalletSharp bgColor={"#8417B8"}  color={"#8417B8"} w={"20px"} h={"20px"}  />
                          <Text color={"#8417B8"} mr={"200px !important"}  fontSize={"16px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"84.8%"}>
                          Pay with Wallet
                          </Text> 
                          <IoChevronForwardOutline w={"16px"} h={"16px"}  />
                      </HStack>
                          </Button>


                  ))}



        <Modal isOpen={isOpen} size={size} onClose={onClose}>
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
        <ModalContent w={"439px"} h={"460px"}  bgColor={"#FFFFFF"}>
        <ModalCloseButton mr={"390px"}  rounded={"2xl"} />
        <ModalHeader >
          <Box bgColor={" rgba(132, 23, 184, 0.1)"} mt={"-10px"}  p={"3"} ml={"180px"} w={"57px"} h={"57px"} rounded={"100px"}>
            <Image w={"25px"}h={"25px"} mt={"5px"} ml={"4px"} objectFit='fit !important' src='../public/images/Union.png'alt='#'>
            </Image>
          </Box>  
        </ModalHeader>
            <CashPayment/>
        </ModalContent>
      </Modal>
  
    </>
  )
}

export default Cash