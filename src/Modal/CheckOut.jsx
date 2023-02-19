import { Box, Button, HStack, Image, Input, Modal, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure, useNumberInput, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Pay from "./Pay";

const CheckOut = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

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





const [size, setSize] = useState('lg')
const sizes = ['lg']

const handleSizeClick = (newSize) => {
  setSize(newSize)
  onOpen()
}


  return (  

  <Box h={"511px"} w={"100%"} ml={"80px"} mt={"20px"}>
    <HStack>
    <VStack spacing={"4"} ml={"130px"} w={"50%"}>
        <Text mr={"780px"} mt={"60px"} fontSize={"24px"}  fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"700"}lineHeight={"73px"}color={"#0B0B0B"}>
          Cart[2]
        </Text>

        <Box
          w={"620px"}
          mr={"240px !important"}
          h={"154px"}
          borderRadius={"10px"}
          border={"0.5px solid #C1C1C1"}
        >
          <HStack >
            <Image
              mt={"20px"}
              ml={"20px"}
              w={"78.5px"}
              h={"78.5px"}
              border={"0.5px solid #C1C1C1"}
              borderRadius={"7.88872px"}
              objectFit='fit'
              src='../public/images/grey-mailing-bags-13-x-17.png'
              alt='#'
            ></Image>
            <Box>
              <VStack spacing={"30px"} >
                <Text
                  fontSize={"18px"}
                  mt={"20px"}
                  mr={"40px !important"}
                  fontFamily={"Opificio"}
                  fontStyle={"normal"}
                  fontWeight={"700"}
                  lineHeight={"24px"}
                  color={"#0B0B0B"}
                >
                  Grey bubble potal bag
                </Text>

                <Box mr={"105px !important"} >
                  <HStack spacing={4}>
                    <RiDeleteBin6Fill w={"16px"} h={"16px"} color={"#A31515"} />
                    <Text
                      fontFamily={"Opificio"}
                      fontSize={"14px"}
                      fontStyle={"normal"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      color={"#A31515"}
                    >
                      Remove item
                    </Text>
                  </HStack>
                </Box>
              </VStack>
            </Box>


            <Box>
                <VStack >
                    <Text mt={"30px"} w={"101px"} h={"24px"} fontSize={"24px"}    fontFamily={"Opificio"}
                      fontStyle={"normal"}
                      fontWeight={"700"}
                      lineHeight={"20px"}  ml={"107px"}>N300,000</Text>

                    <Box  border={"1.394436px solid #8417B8"}  borderRadius={"4px"} w={"197px"} h={"48px"}  ml={"5px !important"}  >
                  <Button ml={"10px"}  size={"xs"} bgColor={"#8417B8"} color={"white"} _hover={{ bgColor:"#8417B8", color:  "white"  }} {...inc} >+</Button> 
                  <Input fontFamily={"Opificio"} mt={"2px"} ml={"30px"} boxShadow={"none !important"}  fontStyle={"normal"} p={"22px"} fontWeight={"400"} lineHeight={"20px"} color={"#8417B8"}      border={"none"}  w={"30%"} {...input} _hover={{ border:"none" }} />
                  <Button size={"xs"} ml={"40px"}   bgColor={"#8417B8"} color={"white"} _hover={{ bgColor:"#8417B8", color:  "white"  }} {...dec}>-</Button>
                    </Box>
                </VStack>
            </Box>
          </HStack>
        </Box>

        <Box
          w={"620px"}
          h={"154px"}
          mr={"240px !important"}
          borderRadius={"10px"}
          border={" 0.5px solid #C1C1C1"}
        >
  <HStack >
            <Image
             
              ml={"20px"}
              w={"78.5px"}
              h={"78.5px"}
              border={"0.5px solid #C1C1C1"}
              borderRadius={"7.88872px"}
              objectFit='fit'
              src='../public/images/grey-mailing-bags-13-x-17.png'
              alt='#'
            ></Image>
            <Box>
              <VStack spacing={"30px"} ml={"5px"}>
                <Text
                  fontSize={"18px"}
                  mt={"10px"}
                  mr={"40px !important"}
                  fontFamily={"Opificio"}
                  fontStyle={"normal"}
                  fontWeight={"700"}
                  lineHeight={"24px"}
                  color={"#0B0B0B"}
                >
                  Grey bubble potal bag
                </Text>
            <Box  mt={"5px !important"} mr={"15px !important"}>
              <Text   fontSize={"10px"}
                      fontFamily={"Opificio"}
                      fontStyle={"normal"}
                      fontWeight={"400"}
                      lineHeight={"20px"} color={"#C1C1C1"}>
                Seller: Jameson | Color:black | Size [S]
              </Text>
            </Box>
                <Box mt={"5px !important"} mr={"110px !important"}>
                  <HStack spacing={2}>
                    <RiDeleteBin6Fill w={"16px"} h={"16px"} color={"#A31515"} />
                    <Text
                    fontSize={"14px"}
                      fontFamily={"Opificio"}
                      fontStyle={"normal"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      color={"#A31515"}
                    >
                      Remove item
                    </Text>
                  </HStack>
                </Box>
              </VStack>
            </Box>


            <Box>
                <VStack >
                    <Text mt={"30px"} w={"101px"} h={"24px"} fontSize={"24px"}    fontFamily={"Opificio"}
                      fontStyle={"normal"}
                      fontWeight={"700"}
                      lineHeight={"20px"}  ml={"107px"}>N300,000</Text>

                    <Box  border={"1.394436px solid #8417B8"} borderRadius={"4px"} w={"197px"} h={"48px"}  ml={"5px !important"}  >
                  <Button ml={"10px"} size={"xs"} bgColor={"#8417B8"} color={"white"} _hover={{ bgColor:"#8417B8", color:  "white"  }} {...inc} >+</Button> 
                  <Input fontFamily={"Opificio"} mt={"2px"} ml={"30px"} p={"22px"} boxShadow={"none !important"}  fontStyle={"normal"} fontWeight={"400"} lineHeight={"20px"} color={"#8417B8"}      border={"none"}  w={"30%"} {...input} _hover={{ border:"none" }} />
                  <Button size={"xs"} ml={"40px"}  bgColor={"#8417B8"} color={"white"} _hover={{ bgColor:"#8417B8", color:  "white"  }} {...dec}>-</Button>
                    </Box>
                </VStack>
            </Box>
          </HStack>



        </Box>
      </VStack>

      <Box border={"0.5px solid #C1C1C1"} borderRadius={"7px"} w={"30%" } ml={"-37px  !important"} mt={"85px  !important"} >
        <VStack spacing={6}>
        <Text mr={"85px"} mt={"10px"} fontSize={"18px"}  fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"700"}lineHeight={"24px"}color={"#0B0B0B"}>
            Cart Summary
        </Text>
      <HStack spacing={5}>
      <Text ml={"-25px"} fontSize={"12px"}  fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"24px"}color={"#0B0B0B"}>Total</Text>
      <Box>
        <Text ml={"5rem !important"} fontSize={"18px"}  fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"24px"} color={"#0B0B0B"} >N600,000</Text>
      </Box>
      
      </HStack>

      <HStack  spacing={5}>
        <Text ml={"-24px"} fontSize={"12px"}  fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"24px"} color={" #94929"}>Delivery Fee</Text>
        <Box>
            <Text ml={"4.5rem !important"}  fontSize={"12px"}  fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"24px"} color={" #94929"}>N4.00</Text>
        </Box>
        
      </HStack>
      
      <HStack  spacing={5}>
        <Text ml={"-20px"} fontSize={"12px"}  fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"24px"} color={" #94929"}>Service Fee</Text>
        <Box >
            <Text  fontSize={"12px"} ml={"5rem !important"}  fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"24px"} color={" #94929"}>N4.00</Text>
        </Box>
      </HStack>

      {sizes.map((size)  => (
       <Button onClick={() => handleSizeClick(size)} key={size} transition={"opacity linear .5s"} w={"200px"} bgColor={"#8417B8"} fontSize={"14px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"700"}lineHeight={"24px"} color={"white"} mb={"20px !important"} _hover={{ bgColor:"#8417B8", color:  "white"  }}>
        Checkout
      </Button>
      ) )   } 

    
    

      <Modal  isOpen={isOpen} size={size}  onClose={onClose}  >
        <ModalOverlay  bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
        <ModalContent  bgColor={"#FFFFFF"}   >
        <ModalCloseButton mr={"450px"} bgColor={"blackAlpha.600"} rounded={"2xl"}  />
         <Pay/>
        </ModalContent>
     </Modal>
        </VStack>
     
        </Box>

     
    </HStack>


    </Box>

       


  
  
  );
};

export default CheckOut;
