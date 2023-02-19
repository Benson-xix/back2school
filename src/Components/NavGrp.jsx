import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  HStack,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const NavGrp = () => {
  return (
    <>
      <VStack spacing={4} align='stretch' py={{ base: 5, sm: 10, md: 15 }}> 
        <Text
          fontFamily={"Opificio"}
          fontStyle={"normal"}
          textAlign={"left"}
          py={"2"}
          fontWeight={"700"}
          fontSize={"18px"}
          color={"#2D2D2D"}
          lineHeight={"20px"}
          mt={"   1.5rem"}
          ml={"1rem"}
        >
          Categories
        </Text>
        <Divider
          w={"12em"}
          borderColor=' 0.5px solid #C1C1C1'
          ml={"1rem !important"}
        ></Divider>
        <Box w={"199px"} h={"42px"} py={{ base: 5, sm: 10, md: 15 }}>
          <RadioGroup ml={"1rem"} mt={"1rem"} >
            <Stack direction='column'>

                <Box  bgColor={" #F3F3F3"}   h={"42px"} w={"189px"}  borderRadius={"4px"} mt={"-1rem"}>
                  <Flex>
                    <Link to='/Bubblebags'  >
                      <HStack spacing={"67px"}>
                         <Text py={".5rem"} ml={"1"} textAlign={"left"} color={"#2D2D2D"} fontFamily={"Opificio"} lineHeight={"20px"} fontSize={"14px"} fontWeight={"400"} fontStyle={"normal"} >BubbleBags  </Text>
                         <Radio value='1' bgColor={" #d4d3d4"}/> 
                         
                      </HStack>
               
                
                </Link> 
                  </Flex>
                
                </Box>
             
            <Box bgColor={" #F3F3F3"} h={"42px"} w={"189px"}  borderRadius={"4px"} mt={"-1rem"}>
                   <Link to='/NoteBook'> 
                   <HStack spacing={"73px"}>
                         <Text py={".5rem"} ml={"3"} textAlign={"left"} color={"#2D2D2D"} fontFamily={"Opificio"} lineHeight={"20px"} fontSize={"14px"} fontWeight={"400"} fontStyle={"normal"} >NoteBook  </Text>
                         <Radio value='1' bgColor={" #8417B8"}/>      
                      </HStack>
                {/* <Radio value='2' ml={"1em"} bgColor={" "}></Radio> */}
              </Link>
            </Box>
           
    <Box bgColor={" #F3F3F3"}  h={"42px"} w={"189px"}  borderRadius={"4px"} mt={"-1rem"}>
           <Link to='/Files'>
           <HStack spacing={"110px"}>
                         <Text py={".5rem"} ml={"3"} textAlign={"left"} color={"#2D2D2D"} fontFamily={"Opificio"} lineHeight={"20px"} fontSize={"14px"} fontWeight={"400"} fontStyle={"normal"} > Files  </Text>
                         <Radio value='1' bgColor={" #d4d3d4"}/> 
                         
                      </HStack>
                {/* <Radio value='3' ml={"6em"} bgColor={" #8417B8"}></Radio> */}
              </Link>
    </Box>
           <Box bgColor={" #F3F3F3"}   h={"42px"} w={"189px"}   borderRadius={"4px"} mt={"-1rem"}>
             <Link to='/Pins'>
             <HStack spacing={"113px"}>
                         <Text py={".5rem"} ml={"3"} textAlign={"left"} color={"#2D2D2D"} fontFamily={"Opificio"} lineHeight={"20px"} fontSize={"14px"}fontWeight={"400"} fontStyle={"normal"} > Pins  </Text>
                         <Radio value='1' bgColor={" #d4d3d4"}/> 
                         
                      </HStack>
                {/* <Radio value='4' ml={"6em"} bgColor={" #8417B8"}></Radio> */}
              </Link >
           </Box>
            
    <Box bgColor={" #F3F3F3"}   h={"42px"} w={"189px"}   borderRadius={"4px"} mt={"-1rem"}>
            <Link to='/Stapler'>
            <HStack spacing={"95px"}>
                         <Text py={".5rem"} ml={"1"} textAlign={"left"} color={"#2D2D2D"} fontFamily={"Opificio"} lineHeight={"20px"} fontSize={"14px"} fontWeight={"400"} fontStyle={"normal"} > Stapler  </Text>
                         <Radio value='1' bgColor={" #d4d3d4"}/> 
                         
                      </HStack>
                {/* <Radio value='5' ml={"4.5em"} bgColor={" #8417B8"}></Radio> */}
            </Link>
    </Box>
             <Box bgColor={" #F3F3F3"}  h={"42px"} w={"189px"}   borderRadius={"4px"} mt={"-1rem"}>
                <Link to='/Stickers'>
                <HStack spacing={"90px"}>
                         <Text py={".5rem"} ml={"1"} textAlign={"left"} color={"#2D2D2D"} fontFamily={"Opificio"} lineHeight={"20px"} fontSize={"14px"}fontWeight={"400"} fontStyle={"normal"} >Stickers  </Text>
                         <Radio value='1' bgColor={" #d4d3d4"}/> 
                         
                      </HStack>
                {/* <Radio value='6' ml={"4em"} bgColor={" #8417B8"}></Radio> */}
              </Link>
             </Box>
              
            </Stack>
          </RadioGroup>
        </Box>
      </VStack>
    </>
  );
};

export default NavGrp;
