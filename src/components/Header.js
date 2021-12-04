import React from 'react';
import { Box, Text, Input} from '@chakra-ui/react';
// import { ColorModeSwitcher } from '../ColorModeSwitcher';

function Header() {
  return (
    <>
      <Box bg="#2874F0" p={5} d="flex" justifyContent="space-evenly">
        <Text color="white">Flipkart</Text>
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        
          <Input placeholder="search here" w="60vw" />
        
      </Box>
    </>
  );
}

export default Header;
