import { Box, Image, Center, Text } from '@chakra-ui/react';
import React from 'react';

function Products({ productData }) {
  // console.log(' products', productData);
  return (
    <>
      <Box
        borderRadius="lg"
        boxShadow="md"
        _hover={{
          boxShadow: '2xl',
        }}
        p="3"
      >
        <Center>
          <Image src={productData.image} w="150px" h="180px" />
        </Center>
        <Box d="flex" flexDirection="column">
          <Text fontSize="md" textAlign="left">
            {productData.brand}
          </Text>

          <Text textAlign="left" fontWeight="semibold" fontSize="lg">
            {productData.title}
          </Text>

          <Box d="flex" justifyContent="space-between" alignItems="center">
            <Text textAlign="left" as="b">
              ₹{productData.price}
            </Text>
            <Text fontSize="lg">Ratings :{productData.rating.rate}</Text>
          </Box>

          <Text textAlign="left" fontSize="md">
            Size: &nbsp;&nbsp;
            {productData.size.map(sizes => (
              <Text as="span">{sizes} </Text>
            ))}
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Products;
