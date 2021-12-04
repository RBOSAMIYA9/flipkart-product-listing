import {
  Box,
  Text,
  RadioGroup,
  Radio,
  Stack,
  CheckboxGroup,
  Checkbox,
  Button,
} from '@chakra-ui/react';
import React, { useState, useEffect, useRef } from 'react';
import AllProducts from '../data';

function Sidebar({ brands, size, idealFor, products, setProducts }) {
  const [filterState, setfilterState] = useState({});
  const sizeRef = useRef();

  useEffect(() => {
    // console.log('filterState', filterState);
    let filteredProducts = AllProducts;
    if (filterState.idealFor) {
      // eslint-disable-next-line
      const filtered = filteredProducts.filter( (product) => {
        if (product.idealFor === filterState.idealFor) {
          return product;
        }
      });
      // console.log('filtered ideal for', filtered);
      filteredProducts = filtered;
      //   filteredProducts = [...filteredProducts,filtered];
    }

    if (filterState.size) {
      //   console.log('products', filteredProducts);
      // eslint-disable-next-line
      const filtered = filteredProducts.filter(function (product) {
        // console.log(product.size);
        if (product.size.includes(filterState.size)) return product;
      });
      //   console.log('filtered', filtered);
      filteredProducts = filtered;
    }

    if (filterState.brands) {
      if (filterState.brands.length > 0) {
        const filteredData = filterState.brands.map(function (brand) {
          // eslint-disable-next-line
          return filteredProducts.filter(function (product) {
            if (product.brand === brand) {
              return product;
            }
          });
        });

        filteredProducts = filteredData[0];
      }
    }

    // console.log('filterState', filterState);
    setProducts(filteredProducts);
    // eslint-disable-next-line 
  }, [filterState]);

  const clearFilter = () => {
    window.location.reload();
    setProducts(AllProducts);
  };

  const getSizeFilter = e => {
    let temp = { ...filterState, size: e };
    setfilterState(temp);
  };

  const getBrandFilter = e => {
    let temp = { ...filterState, brands: e };
    setfilterState(temp);
  };

  const getIdealForFilter = e => {
    // console.log(e);
    let temp = { ...filterState, idealFor: e };
    // console.log('idealFor:', temp);
    setfilterState(temp);
  };
  return (
    <>
      <Box minH="100vh" minW="20vw" p={12} bg="white" m={6}>
        <Box d="flex" flexDir="column" alignItems="flex-start">
          <Box
            d="flex"
            justifyContent="space-between"
            alignItems="center"
            w="100%"
          >
            <Text my={2}>Filters</Text>
            <Button colorScheme="blue" size="sm" onClick={clearFilter}>
              Clear
            </Button>
          </Box>

          <Box my={5}>
            <Text textAlign="left" fontSize="lg" fontWeight="semibold">
              Size
            </Text>
            <RadioGroup
              onChange={e => getSizeFilter(e)}
              name="size-radio-group"
              ref={sizeRef}
            >
              <Stack spacing={4} direction="row">
                {size.map(size => (
                  <>
                    <Radio value={size}>{size}</Radio>
                  </>
                ))}
              </Stack>
            </RadioGroup>
          </Box>

          <Box my={5}>
            <Text textAlign="left" fontSize="lg" fontWeight="semibold">
              Brand
            </Text>
            <CheckboxGroup onChange={getBrandFilter}>
              <Stack spacing={1} direction="column" mx={2}>
                {brands.map(brand => (
                  <>
                    <Checkbox value={brand}>{brand}</Checkbox>
                  </>
                ))}
              </Stack>
            </CheckboxGroup>
          </Box>

          <Box my={5}>
            <Text textAlign="left" fontSize="lg" fontWeight="semibold">
              Ideal for
            </Text>
            <Box>
              <RadioGroup onChange={getIdealForFilter}>
                <Stack spacing={4} direction="row">
                  {idealFor.map(ideal => (
                    <>
                      <Radio value={ideal}>{ideal}</Radio>
                    </>
                  ))}
                </Stack>
              </RadioGroup>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;
