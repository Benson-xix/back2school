import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavGrp from "./NavGrp";
import HomeMain from "../Page/HomeMain";

const MainMain = () => {
  return (
    <>
      <Grid templateColumns='60px 1fr' gap={6} py={{ base: 10, sm: 16, md: 20 }}>
        <GridItem pl='2' area={"nav"}>
          <Box w={"220px"} h={"1500px"}  border={"0.5px solid #C1C1C1"} mt={"270"}  borderRadius={"7.88872px"} >
            <NavGrp />
          </Box>
        </GridItem>
        <GridItem pl='2' area={"main"}>
          <HomeMain />
        </GridItem>
      </Grid>
    </>
  );
};

export default MainMain;
