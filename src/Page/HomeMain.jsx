import React from "react";
import { Box, Grid, VStack } from "@chakra-ui/react";
import NavGrp from "../Components/NavGrp";
import Top from "../Components/Top";
import NoteBook from "./NoteBook";
import BubbleBags from "./BubbleBags";
import Books from "../Components/Books";
import Collection from "../Components/Collection";
import Files from "./Files";
export const HomeMain = () => {
  return (
    <Box as={"section"} py={{ base: 10, sm: 16, md: 20 }}>
      <Box>
        <VStack spacing={"100px"}>
          <Box>
            <Top />
          </Box>

          <Box>
            <BubbleBags />
          </Box>

          <Box>
            <Books />
          </Box>

          <Box>
            <NoteBook/>
          </Box>

          <Box>
            <Collection />
          </Box>

          <Box>
            <Files />
          </Box>
        </VStack>
        {/* NoteBOOK */}
      </Box>

      {/* <VStack w={"100%"} > 
          <Grid  gridTemplateColumns={"max-content 1fr"} w={"100%"}  >
            <Box
              width={"227px"}
              h={"1498px"}  
              border={"0.5px solid #2D2D2D "}
              borderRadius={"10px"} mt={"-1rem"}
            >
              <NavGrp/> 
            </Box>
          </Grid>
          
      </VStack> */}
    </Box>
  );
};
export default HomeMain;
