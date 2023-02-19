import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SplitCard from '../Components/SplitCard'
import SplitCash from '../Components/SplitCash'

const SplitPaymentConfirmation = () => {
  return (
    <>
    <Box w={"100%"} h={"485"}>
        <VStack spacing={"5"}>
        <Heading fontSize={"24px"} mt={"3rem"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"700"}lineHeight={"144.8%"}>Remaining payment balance</Heading>
        <Text fontSize={"16px"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"400"}lineHeight={"141.6%"}>Confirm your payment to proceed</Text>

        <Box w={"106px"} p={"4"} h={"55px"}  background={"rgba(132, 23, 184, 0.1)"} borderRadius={"9px"}>
        <Text fontSize={"16px"} textAlign={"center"} color={"#3A3A3A"} fontFamily={"Opificio"}fontStyle={"normal"}fontWeight={"700"}lineHeight={"141.6%"}>N50,000</Text>
        </Box>

        <Box>
            <SplitCard/>
        </Box>

        <Box>
            <SplitCash/>
        </Box>
        </VStack>
    </Box>
    </>
  )
}

export default SplitPaymentConfirmation