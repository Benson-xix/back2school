import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Collection = () => {
  return (
    <>
     <Box py={{ base: 5, sm: 10, md: 15 }}> <VStack>
         <HStack>
                <Flex    justifyContent={"space-between"} ml={"10rem"}> 
                  <Text
                    fontFamily={"Opificio"}
                    fontStyle={"normal"}
                    fontWeight={"700"}
                    fontSize={"18px"}
                  >
                    Files
                  </Text>

                  <Box ml={"67rem"}>
                       <Link
                  >
                    <Text    fontFamily={"Opificio"}
                    fontStyle={"normal"}
                    fontWeight={"400"}
                    fontSize={"14px"}
                    color={"#8417B8"}>
                      See all
                    </Text>
                  
                  </Link>
                  </Box>
                 
                </Flex>
              </HStack>
      </VStack>
     
     
            </Box>
    </>
  )
}

export default Collection