import { Box, Button, Divider, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { HiShare } from 'react-icons/hi'
import { RiArrowDropDownLine } from 'react-icons/ri'

const Confirmation = () => {
  return (
    <>
    <Box w={"400px"}  ml={"20px"} mt={"10px"}   h={"981px"}>
      <VStack>
        <Heading fontSize={"24px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"700"}lineHeight={"144.8%"}>Order Confirmed</Heading>
        <Text color={"#949292"} fontSize={"14px"} textAlign={"center"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}>
          A confirmation email has been sent to your email you provided at the time of booking
        </Text>
       <HStack spacing={50}>
        <Box mr={"90px"}>
          <VStack>
            <Text color={"#949292"}  fontSize={"14px"} textAlign={"center"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}>2z bubble postal bag</Text>
            <Text color={"#949292"} fontSize={"14px"} textAlign={"center"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}>2z bubble postal bag</Text>
            <Text color={"#949292"}  fontSize={"14px"} textAlign={"center"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}>2z bubble postal bag</Text>
            <Text color={"#949292"} fontSize={"14px"} textAlign={"center"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}>2z bubble postal bag</Text>
            <Text color={"#949292"} fontSize={"14px"} textAlign={"center"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}>2z bubble postal bag</Text>
          </VStack>
        </Box>

        <Box ml={"4rem !important"}>
        <VStack>
        <Text></Text>
            <Text color={"#1B1B1B"} fontSize={"16px"} textAlign={"center"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}>N30,000.00</Text>
            <Text  color={"#1B1B1B"} fontSize={"16px"} textAlign={"center"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}>N30,000.00</Text>
            <Text color={"#1B1B1B"} fontSize={"16px"} textAlign={"center"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}>N30,000.00</Text>
            <Text color={"#1B1B1B"} fontSize={"16px"} textAlign={"center"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}>N30,000.00</Text>
            <Text color={"#1B1B1B"} fontSize={"16px"} textAlign={"center"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}>N30,000.00</Text>
        </VStack>
        </Box>
       </HStack>

       <Divider
          w={"25em"}
          borderColor=' 0.5px solid #BDBDBD'
         
        ></Divider>

      <Box ml={"150px !important"}>
          <HStack spacing={10}>
            <Box>
              <VStack>
                <Text color={"#949292"} fontSize={"14px"} textAlign={"center"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}>Sub-amount</Text>
                <Text color={"#949292"} fontSize={"14px"} textAlign={"center"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}>Delivery fee</Text>
                <Text color={"#949292"} fontSize={"14px"} textAlign={"center"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}>Service fee</Text>
                <Text color={"#949292"} fontSize={"14px"} textAlign={"center"} ml={"-3rem !important"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}>Total</Text>
              </VStack>
            </Box>

            <Box mr={"-1rem !important"}>
              <VStack >
                <Text color={"#1B1B1B"} fontSize={"16px"} textAlign={"center"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}>N150,000.00</Text>
                <Text color={"#1B1B1B"} ml={"1rem !important"} fontSize={"16px"} textAlign={"center"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}>N1,500.00</Text>
                <Text color={"#1B1B1B"} ml={"1rem !important"} fontSize={"16px"} textAlign={"center"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}>N1,500.00</Text>
                <Text color={"#1B1B1B"} fontSize={"16px"} textAlign={"center"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"700"}lineHeight={"141.6%"}>N153,000.00</Text>
              </VStack>
            </Box>
          </HStack>
      </Box>

      <Box mt={"30px !important"}>
               <HStack>
               <Button w={"172px"} h={"60px"} bgColor={"#FFFFFF"}  border={"0.5px solid #8417B8"} borderRadius={"5px"}  color={"#8417B8"} fontSize={"14px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}  _hover={{ bgColor:"#FFFFFF", color:"#8417B8" }}>
                      <HStack>
                      <HiShare/>
                      <Text>Share</Text>
                      <RiArrowDropDownLine/>
                      </HStack>
                 </Button>
                <Button w={"172px"} h={"60px"} bgColor={"#8417B8"}  color={"#FFFFFF"} borderRadius={"5px"} fontSize={"14px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}  _hover={{ bgColor:"#8417B8", color:"#FFFFFF" }} >Close</Button>
               </HStack>
            </Box>

      </VStack>
    </Box>
    </>
  )
}

export default Confirmation