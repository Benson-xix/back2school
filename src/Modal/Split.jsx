import { Box, Button, HStack, Image, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { ImTree } from 'react-icons/im'
import { IoChevronForwardOutline } from 'react-icons/io5'
import SplitPayment from './SplitPayment'

const Split = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = useState('lg')

    const sizes = ['lg']
    
    const handleSizeClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }

  return (
    <>

                    {sizes.map((size)  => ( 
                <Button border={"0.5px solid #949292"} h={"60px"} w={"400px"}  bgColor={"#FFFFFF"} transition={"opacity linear .5s"}  borderRadius={"9px"} _hover={{ bgColor:"#FFFFFF", color:  "#8417B8"  }} onClick={() => handleSizeClick(size)} key={size}>
                <HStack spacing={3}>
                <ImTree  color={"#8417B8"} w={"20px"} h={"20px"} />
                <Text color={"#8417B8"} fontSize={"16px"} mr={"200px !important"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"84.8%"}>
                    Split payment
                </Text>
                <IoChevronForwardOutline w={"16px"} h={"16px"}  />
              </HStack>
                </Button>
              ))}
      

        <Modal isOpen={isOpen} size={size} onClose={onClose}>
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
        <ModalContent h={"465px"} bgColor={"#FFFFFF"}>
        <ModalCloseButton mr={"450px"} bgColor={"blackAlpha.600"} rounded={"2xl"} />
        <ModalHeader >
        <Box bgColor={" rgba(132, 23, 184, 0.1)"} mt={"-10px"}  p={"3"} ml={"200px"} w={"57px"} h={"57px"} rounded={"100px"}>
            <Image w={"25px"}h={"25px"} mt={"5px"} ml={"4px"} objectFit='fit !important' src='../public/images/Union.png'alt='#'>
            </Image>
            </Box>
        </ModalHeader>
            <SplitPayment/>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Split