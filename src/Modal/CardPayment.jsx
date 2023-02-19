import { Box, Button, Heading, HStack, Image, Input, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { CiLock } from 'react-icons/ci'
import CardConfirm from './CardConfirm'

const CardPayment = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box w={"100%"} mt={"10px"}>
        <VStack spacing={"5"}>
          <Heading fontSize={"24px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"700"}lineHeight={"144.8%"}>Input card details</Heading>
          <Input size={"lg"} placeholder='Card Number' w={"324px"} h={"60px"} borderRadius={"9px"} />
          <HStack>
          <Input w={"148px"} h={"60px"} borderRadius={"9px"} size={"md"} placeholder='Expiry date' />
          <Input w={"148px"} h={"60px"} borderRadius={"9px"} size={"md"} placeholder='CVV' /> 
          </HStack>
          <HStack>
            <Text fontSize={"14px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}>Can't use your debit card?</Text> 
            <Link>
            <Text fontSize={"14px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%" } color={"#8417B8"}>Try Zodiac wallet </Text>
            </Link>
          </HStack>

            <HStack>
              <CiLock/>
              <Text fontSize={"12px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}>Your information is encrypted and securely transmitted using SSL</Text>
            </HStack>

            <HStack>
               <Button w={"172px"} h={"60px"} bgColor={"#FFFFFF"} onClick={onClose} border={"0.5px solid #8417B8"} borderRadius={"5px"}  color={"#8417B8"} fontSize={"14px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}  _hover={{ bgColor:"#FFFFFF", color:"#8417B8" }} >Close</Button>
                <Button w={"172px"} h={"60px"} bgColor={"#8417B8"} transition={"opacity linear .5s"}  onClick={onOpen} color={"#FFFFFF"} borderRadius={"5px"} fontSize={"14px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}  _hover={{ bgColor:"#8417B8", color:"#FFFFFF" }}  >Proceed</Button>
               </HStack>

        </VStack>
      </Box>

      
    <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
        <ModalContent w={"439px"} h={"465px"} bgColor={"#FFFFFF"} transition={"opacity linear 5s"}>
        <ModalCloseButton mr={"390px"}  rounded={"2xl"} />
        <ModalHeader>
        <Box bgColor={" rgba(132, 23, 184, 0.1)"} mt={"-10px"}  p={"3"} ml={"180px"} w={"57px"} h={"57px"} rounded={"100px"}>
            <Image w={"25px"}h={"25px"} mt={"5px"} ml={"4px"} objectFit='fit !important' src='../public/images/Union.png'alt='#'>
            </Image>
            </Box>
        </ModalHeader>
           <CardConfirm/>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CardPayment