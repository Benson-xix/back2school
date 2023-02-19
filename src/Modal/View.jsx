import { Box, Button, Collapse, Container, Divider, Flex, Heading, HStack, Image, Input, InputGroup, InputLeftElement, InputRightElement, Modal, ModalCloseButton, ModalContent, ModalOverlay, Radio, RadioGroup, Stack, Text, useDisclosure, useNumberInput, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Books from '../Components/Books'
import CheckOut from '../Modal/CheckOut'

const View = () => {
  const [show, setShow] = useState(false)

  const handleToggle = () => setShow(!show)

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
    <Box  h={"871px"}   >
    <VStack h={"100%"}>
    <Flex w={"100%"} h={"70%"} >
        <Box w={"35%"} h={"100%"}>
          <VStack>
            <Image  w={"329px"} mt={"3rem"}  h={"329px"}  objectFit='fit'  src='../public/images/grey-mailing-bags-13-x-17.png' alt='#'></Image>
            <HStack mt={"2px"}>
            <Image  w={"78.5px"}  h={"78.5px"} border={"0.5px solid #C1C1C1"}    borderRadius={"7.88872px"} objectFit='fit'  src='../public/images/grey-mailing-bags-13-x-17.png' alt='#'></Image>
            <Image  w={"78.5px"}   h={"78.5px"}  border={"0.5px solid #C1C1C1"}   borderRadius={"7.88872px"}  objectFit='fit'  src='../public/images/grey-mailing-bags-13-x-17.png' alt='#'></Image>
            <Image  w={"78.5px"}  h={"78.5px"}  border={"0.5px solid #C1C1C1"}   borderRadius={"7.88872px"} objectFit='fit'  src='../public/images/grey-mailing-bags-13-x-17.png' alt='#'></Image>
            <Image  w={"78.5px"}  h={"78.5px"}  border={"0.5px solid #C1C1C1"}    borderRadius={"7.88872px"} objectFit='fit'  src='../public/images/grey-mailing-bags-13-x-17.png' alt='#'></Image>
            </HStack>
            
        <HStack >
          <Flex mr={"45px"} mt={"10px"} border={"0.5px solid #C1C1C1"} w={"300px"} borderRadius={"3.88872px"} >
             <Text ml={"10px"}  mt={"2px"} fontFamily={"Opificio"} fontSize={"14px"}  fontStyle={"normal"} fontWeight={"400"} lineHeight={"20px"} color={"#0B0B0B"} letterSpacing={"-2%"} >
            Color: 
            </Text> 
            <Box mt={"5px"} ml={"20px"}>
              <RadioGroup>
            <Radio bgColor={" #111111"} colorScheme={"#111111"} value='1'></Radio> 
            <Radio bgColor={"#db3f3f"} colorScheme={"#db3f3f"} ml={"7px"}value='2'></Radio>
            <Radio ml={"7px"}  bgColor={"#8417B8"} colorScheme={"#8417B8"}  value='3'></Radio>
            <Radio ml={"7px"}  bgColor={"#700ee0"} colorScheme={"#700ee0"} value='4'></Radio>
              </RadioGroup>
          
            </Box>
         
          </Flex>
           
        </HStack>
        
        <HStack >
          <Flex mr={"45px"} mt={"10px"} border={"0.5px solid #C1C1C1"} w={"300px"} borderRadius={"3.88872px"} >
             <Text ml={"10px"}  mt={"4px"} fontSize={"14px"} fontFamily={"Opificio"}  fontStyle={"normal"} fontWeight={"400"} lineHeight={"20px"} color={"#0B0B0B"} letterSpacing={"-2%"} >
            Size: 
            </Text> 

            <Stack direction='row' ml={"1rem"} spacing={.1} mt={"-6px"} align='center'  >
  <Button bg={"none"} _hover={{ bg:"none" }} color={"#C1C1C1"}  >
   S
  </Button>
  <Button bg={"none"} _hover={{ bg:"none" }} color={"#232021"} >
   M 
  </Button>
  <Button bg={"none"} _hover={{ bg:"none" }} color={"#C1C1C1"}  >
  L
  </Button>
  <Button bg={"none"} _hover={{ bg:"none" }} color={"#C1C1C1"}  >
    XL
  </Button>
  <Button bg={"none"} _hover={{ bg:"none" }} color={"#C1C1C1"}  >
    XXL
  </Button>
</Stack>
            <Box mt={"5px"} ml={"20px"}>
           
            </Box>
         
          </Flex>
           
        </HStack>

          </VStack>
        </Box>

        <Box w={"35%"} h={"100%"}   >
          <VStack spacing={1} mt={"50px"} >
               <Text  mr={"70px"} fontFamily={"Opificio"} fontSize={"24px"} colr={" #0B0B0B"}  fontStyle={"normal"} fontWeight={"700"} lineHeight={"73px"}>Grey Bubble poster bag</Text>
               <Box mt={"-20px !important"} ml={"15px !important"} ><Text fontSize='12px'mr={"240px"} fontFamily={"Opificio"} lineHeight={"20px"}  fontStyle={"normal"} fontWeight={"400"}  color={"#6B6B6B"} >Women,black, gown</Text></Box>
              <Box><Text fontSize='14px' mr={"295px"} mt={"20px"} fontFamily={"Opificio"}  fontStyle={"normal"} fontWeight={"400"} lineHeight={"20px"} color={"#6B6B6B"}>Details</Text></Box>
              <Box> <Text fontSize='1xl' ml={"20px"} mt={"10px"} fontFamily={"Opificio"}  fontStyle={"normal"} fontWeight={"400"} lineHeight={"20px"} color={"#6B6B6B"}>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
          </Text></Box>

          <Link><Text mr={"285px"} mt={"5px"} color={"#8417B8"} fontFamily={"Opificio"}  fontStyle={"normal"} fontWeight={"400"} lineHeight={"20px"} >Read More</Text></Link>

          <Divider
          w={"23em"}
          borderColor=' 0.5px solid #BDBDBD'
          mt={"1rem !important"}
          ml={"-.1rem !important"}
        ></Divider>

      <HStack spacing={"300px"} p={".1em"}>
      <Text fontFamily={"Opificio"}  fontStyle={"normal"} fontSize={"16px"} fontWeight={"400"} lineHeight={"20px"} color={"#0B0B0B"}>Details</Text>

      <IoIosArrowForward/>
      </HStack>
     

        <Divider
          w={"23em"}
          borderColor=' 0.5px solid #BDBDBD'
          mt={"1rem !important"}
          ml={"-.1rem !important"}
        ></Divider>

          <HStack spacing={"300px"} p={".5em"}>
                <Text fontFamily={"Opificio"}  fontStyle={"normal"} fontSize={"16px"} fontWeight={"400"} lineHeight={"20px"} color={"#0B0B0B"}>Details</Text>

                <IoIosArrowForward/>
                </HStack>

          </VStack>
       
        </Box>

        <Box w={"30%"} h={"100%"}>
        <VStack   >
            <Box h={"60%"} w={"89%"} mt={"70px"} border={"0.5px solid #C1C1C1"}  borderRadius={"7.88872px"}>
              <VStack mt={"30px"}>
                <Text mr={"150px"} fontFamily={"Opificio"}  fontStyle={"normal"}  fontSize={"24px"} fontWeight={"400"} lineHeight={"144.8%"} color={"#212121"} >N300,000</Text>
              <Box mt={"-10px !important"}><Text mr={"135px"} fontFamily={"Opificio"}  fontStyle={"normal"} fontSize={"12px"} fontWeight={"400"} lineHeight={"20px"} color={"#949292"} >N300,000 per item</Text></Box>

              <Box mr={"20px !important"}>
              <HStack>
                  <Text fontFamily={"Opificio"}  fontStyle={"normal"} fontWeight={"400"} fontSize={"12px"} lineHeight={"144.8%"} color={"#949292"} mr={"95px"}>Delivery Fee</Text> <Text fontFamily={"Opificio"}  fontStyle={"normal"} fontSize={"12px"} fontWeight={"400"} ml={".89rem !important"} lineHeight={"20px"} color={"#949292"}>N4.00</Text>
                </HStack>

                <HStack >
                  <Text fontFamily={"Opificio"}  fontStyle={"normal"} fontSize={"12px"}  fontWeight={"400"} lineHeight={"144.8%"} color={"#949292"} mr={"105px"}>Service Fee</Text> <Text fontFamily={"Opificio"}   fontStyle={"normal"} fontSize={"12px"} fontWeight={"400"} lineHeight={"20px"} color={"#949292"}>N4.00</Text>
                </HStack>

                <HStack  >
                  <Text fontFamily={"Opificio"}  fontStyle={"normal"} fontSize={"12px"}  fontWeight={"400"} lineHeight={"144.8%"} color={"#949292"} mt={"10px"} mr={"135px"}>Total</Text> <Text fontFamily={"Opificio"}  fontStyle={"normal"} fontSize={"12px"} fontWeight={"400"} lineHeight={"20px"} color={"#949292"}>N360,000</Text>
                </HStack>
              </Box>


                <Collapse  in={show} transition={"opacity linear .5s"}>
                  <HStack spacing={30} border={"1.394436px solid #8417B8"} w={"60%"} ml={"50px"} borderRadius={"7.88872px"} >
                    <Box ml={"15px"}>
                  <Button  size={"xs"} bgColor={"#8417B8"} mr={"10px"} color={"white"} _hover={{ bgColor:"#8417B8", color:  "white"  }} {...inc} >+</Button> 
                  <Input ml={"20px"} fontFamily={"Opificio"}  boxShadow={"none !important"}    fontStyle={"normal"} fontWeight={"400"} lineHeight={"20px"} color={"#8417B8"}  border={"none"}  w={"30%"} {...input} _hover={{ border:"none" }} />
                   
                  <Button size={"xs"} ml={"25px"}  bgColor={"#8417B8"} color={"white"} _hover={{ bgColor:"#8417B8", color:  "white"  }} {...dec}>-</Button>
                    </Box>
      
                </HStack>
                </Collapse>


                {sizes.map((size) => (  <Box>
            {show?   <Button  onClick={() => handleSizeClick(size)} key={size} px={"3em"} mb={"20px !important"} transition={"opacity linear .5s"} mt={"30px !important"} fontFamily={"Opificio"} fontSize={"14px"}   fontStyle={"normal"} fontWeight={"700"} lineHeight={"20px"}   bgColor={"#8417B8"} color={"white"} _hover={{ bgColor:"#8417B8", color:  "white"  }} >
                    procced to checkout
                  </Button>  :  <Button  px={"2em"} mb={"50px !important"} mt={"30px !important"} transition={"opacity linear .5s"} fontFamily={"Opificio"} onClick={handleToggle}  fontStyle={"normal"} fontSize={"14px"} fontWeight={"700"} lineHeight={"20px"}   bgColor={"#8417B8"} color={"white"} _hover={{ bgColor:"#8417B8", color:  "white"  }} >
                  Add to Cart
                  </Button>
                  }
            </Box> ))}
              
                <Modal  isOpen={isOpen} size={size} onClose={onClose}  >
        <ModalOverlay  bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
        <ModalContent bgColor={"#FFFFFF"} transition={"opacity linear 5s"}  >
        <ModalCloseButton mr={"950px"} mt={"20px"} bgColor={"blackAlpha.600"} rounded={"2xl"}  />
         <CheckOut/>
        </ModalContent>
     </Modal>

              
              </VStack>
            </Box>

            <Box>
              <VStack>
                <Text fontFamily={"Opificio"}  fontStyle={"normal"} fontWeight={"400"} fontSize={"12px"} lineHeight={"20px"} color={"#0B0B0B"}>100% satisfacton gurantee</Text>
                <Text fontFamily={"Opificio"}  fontStyle={"normal"} fontWeight={"400"} fontSize={"12px"} lineHeight={"20px"} color={"#0B0B0B"}  >place your order with peace of mind</Text>
              </VStack>
            </Box>
          </VStack>
        </Box>
    </Flex>

    <Box w={"50%"} h={"20%"}mr={"500px !important"} mt={"20px"}>
   <Box w={"100%"} h={"70%"} bgColor={"#F5F5F5"}    borderRadius={"7.88872px"}>
   <VStack mt={"5px"}>
     <HStack mt={"10px"}>
      <Image  w={"17px"}  h={"16px"}  objectFit='fit'  src='../public/images/fi-sr-exclamation.png' alt='#'></Image>
       <Text mr={"400px !important"}  fontFamily={"Opificio"} fontSize={"14px"} fontStyle={"normal"} fontWeight={"400"} lineHeight={"20px"} color={"#232021 "}> please note</Text></HStack>
      <Box>
      <Text ml={"50px !important"}  fontFamily={"Opificio"} fontSize={"14px"}  fontStyle={"normal"} fontWeight={"400"} lineHeight={"20px"} color={"#6B6B6B"}> anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia 
        cillum Lorem ullamco minim nostrud elit officia tempor esse quis.Sunt ad dolore quis aute  </Text>
      </Box>
      </VStack>
   </Box>
    </Box>
    </VStack>

      
    </Box>
    </>
  )
}

export default View