import { Box, Flex, Heading, HStack, Image, Radio, RadioGroup, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
const Banner = () => {
  return (
    <Box py={{ base: 10, sm: 16, md: 20 }}>
    <HStack> 
      <Box 
            backgroundImage="url('../public/images/Rectangle956.png')"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"  w={"1500px"} h={"340px"} position={"absolute"} top={"150px"} left={"150px"} mt={"2em"} rounded={"20px"}>
            <Stack spacing={6} position={"absolute"} top={"90px"} left={"161px"}>
              <Heading as='h1' size='3xl' noOfLines={2} fontFamily={"Opificio"} fontStyle={"normal"} fontWeight={"800"} lineHeight={"56px"} color={"#FFFFFF"} letterSpacing={"-0.03em"}>
               Your one stop
              </Heading>
              <Heading as='h2' size='3xl' noOfLines={1} fontFamily={"Opificio"} fontStyle={"normal"} fontWeight={"800"} lineHeight={"56px"} color={"#FFFFFF"} letterSpacing={"-0.03em"}>
                Back to School store
              </Heading>
              </Stack>
              <Image w={"531px"}  h={"327px"} objectFit='fit'  position={"absolute"} roundedBottom={"md"} boxShadow={" .1px 1px .2px rgba(0, 0, 0, 0.15)"} top={"15px"}left={"970px"} src='../src/assets/images/Layer011.png' alt='#' ></Image>
              <Box bgColor={"#FFFFFF"} width={"1120px"} h={"53px"} roundedBottom={"md"} position={"absolute"} top={"290px"} left={".1px"} boxShadow={" .1px 1px .2px rgba(0, 0, 0, 0.15)"}></Box>
             
      </Box>
    </HStack>

    <RadioGroup  position={"absolute"} top={"519.12px"} left={"900px"} py={"3em"} width={"73.05px"} height={""}>
      <Stack direction='row'>
        <Radio bgColor={" #8417B8"} value='1'></Radio>
        <Radio bgColor={" #D9D9D9"} value='2'></Radio>
        <Radio bgColor={" #D9D9D9"}  value='3'></Radio>
        <Radio bgColor={" #D9D9D9"}  value='4'></Radio>
        
      </Stack>
    </RadioGroup>



    </Box>

  )
}

export default Banner