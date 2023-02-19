import { Box, Button, Heading, HStack, Image, Input, Modal, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure, useNumberInput, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CheckOut from './CheckOut'

const Cart = () => {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: "1",
      min: 1,
      max: 20,
      precision: 0,
    })
  
  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = useState('5xl')

const sizes = ['5xl']

const handleSizeClick = (newSize) => {
  setSize(newSize)
  onOpen()
}




  return (
    <>
    <Box w={"100%"}>
        <VStack>
            <Box mt={"50px"} mr={"150px"}>
            <Heading fontFamily={"Opificio"}  fontStyle={"normal"} color={"#2D2D2D"} fontSize={"18px"} fontWeight={"700"} lineHeight={"20px"}>Please select the variation </Heading>
            </Box>

            <Box>
                <HStack spacing={10}>
               <Box>
               <Image mt={"20px"} ml={"5px"} w={"65.87px"} h={"65.87px"} border={"0.5px solid #C1C1C1"} borderRadius={"7.88872px"} objectFit='fit'src='../public/images/grey-mailing-bags-13-x-17.png'alt='#'></Image>
               </Box>

               <Box >
                <VStack>
                    <Text  mt={"30px"} ml={"-30px"} fontFamily={"Opificio"} color={"#2D2D2D"}  fontStyle={"normal"} fontSize={"18px"} fontWeight={"400"} lineHeight={"20px"}>Misolo cleaner</Text>

                    <Text ml={"-110px !important"}  fontFamily={"Opificio"} color={"#2D2D2D"} fontStyle={"normal"} fontSize={"14px"} fontWeight={"700"} lineHeight={"20px"}>N300,000</Text>

                    <Link>
                    <Text ml={"-80px"} textDecoration={"underline"} color={"#8417B8"} fontFamily={"Opificio"}  fontStyle={"normal"} fontSize={"12px"} fontWeight={"700"} lineHeight={"20px"}>
                    See details
                    </Text>
                    </Link>
                </VStack>
               </Box>

             
            <Box  border={"0.5px solid #C1C1C1"} h={"48px"} w={"137px"} ml={"55px !important"} borderRadius={"4px"} >
            <Button ml={"25px"} size={"xs"} bgColor={"#8417B8"} color={"white"} _hover={{ bgColor:"#8417B8", color:  "white"  }} {...inc} >+</Button> 
            <Input fontFamily={"Opificio"} boxShadow={"none !important"}    fontStyle={"normal"} fontWeight={"400"} lineHeight={"20px"} color={"#8417B8"}      border={"none"}  w={"30%"} {...input} _hover={{ border:"none" }} />
            <Button size={"xs"}   bgColor={"#8417B8"} color={"white"} _hover={{ bgColor:"#8417B8", color:  "white"  }} {...dec}>-</Button>
            </Box>



                </HStack>
            </Box>


            <Box mt={"30px !important"}>
               <HStack>
               <Button w={"172px"} h={"60px"} bgColor={"#FFFFFF"}  border={"0.5px solid #8417B8"} borderRadius={"5px"}  color={"#8417B8"} fontSize={"14px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}  _hover={{ bgColor:"#FFFFFF", color:"#8417B8" }} >Continue shopping</Button>
               {sizes.map((size) => (
                <Button w={"172px"} h={"60px"} bgColor={"#8417B8"}  onClick={() => handleSizeClick(size)} key={size} transition={"opacity linear .5s"}   color={"#FFFFFF"} borderRadius={"5px"} fontSize={"14px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}  _hover={{ bgColor:"#8417B8", color:"#FFFFFF" }}  >View and check out</Button>
                ))}  
               </HStack>
            </Box>

            <Modal isOpen={isOpen} size={size} onClose={onClose}>
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
        <ModalContent  bgColor={"#FFFFFF"}>
        <ModalCloseButton mr={"950px"} mt={"20px"} bgColor={"blackAlpha.600"} rounded={"2xl"}  />
            <CheckOut/>
        </ModalContent>
      </Modal>

        </VStack>
    </Box>
    </>
  )
}

export default Cart