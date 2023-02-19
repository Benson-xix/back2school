import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FiChevronDown } from "react-icons/fi";
import Card from './Card';
import Cash from './Cash';
import Split from './Split';

const Pay = () => {
  return (
    <>
    <Box h={"477px"} >
        <VStack mt={"60px"}  spacing={3}>
            <Box>
                <Text  fontSize={"24px"}  fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"700"}lineHeight={"144.8%"}color={"#1B1B1B"}>Select Payment Method</Text>
            </Box>

            <Box mb={"10px !important"}>
                <Text fontSize={"16px"} w={"100%"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"144.8%"} letterSpacing={"-0.07em"} color={" #949292"} >
                    change to your desired currency and proceed to payment
                </Text>
            </Box>

            <Box>
                <Button background={"rgba(132, 23, 184, 0.1)"}  borderRadius={"10px"} _hover={{ bgColor:"rgba(132, 23, 184, 0.1)"  }}  >
                    <HStack spacing={5}>
                        <Text fontSize={"16px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"700"}lineHeight={"141%"}  color={" #3A3A3A"}>N300,000</Text> 
                        <FiChevronDown/>
                    </HStack>
                </Button>
            </Box>


            <Box>
             <Cash/>
            </Box>
            
            <Box>
            <Card/>
            </Box>
            
            <Box>
            <Split/>
            </Box>
        </VStack>
    </Box>
    </>
  )
}

export default Pay