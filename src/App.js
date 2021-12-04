import React from 'react';
import {
  ChakraProvider,
  Box,
  
  theme,
} from '@chakra-ui/react';


import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" bg="#F1F3F6">
      <Header/>
      <Home/>
      
        
      </Box>
    </ChakraProvider>
  );
}

export default App;
