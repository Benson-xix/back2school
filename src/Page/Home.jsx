import { VStack } from '@chakra-ui/react'
import React from 'react'
import Banner from '../Components/Banner'
import End from '../Components/End'
import Header from '../Components/Header'
import Main from '../Components/Main'

const Home = () => {
  const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  }
  return (
    <>
    <VStack >
    <Header/>
    <Banner/>
    <Main/>
    <End/>
    </VStack>
    
    </>
  )
}

export default Home