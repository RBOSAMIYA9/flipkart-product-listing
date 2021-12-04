import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  Grid,
  Select,
 
} from '@chakra-ui/react';
import Products from './Products';
import Sidebar from './Sidebar';
import AllProducts from '../data';

function Home() {
  const [sort, setSort] = useState('');
  const [products, setProducts] = useState(AllProducts);
  const [brands, setBrands] = useState([]);
  const [size, setSize] = useState([]);
  const [idealFor, setIdealFor] = useState([]);


  useEffect(() => {
    getDataForFilters();
  }, []);

  const sortProducts = e => {
    // console.log(e.target.value)
    setSort(e.target.value);
    if (e.target.value === 'lowToHigh') {
      let ac = products.sort(function (a, b) {
        // console.log(parseFloat(a.price) - parseFloat(b.price))
        return parseFloat(a.price) - parseFloat(b.price);
      });
      // console.log('ar after sort ac', ac);
      setProducts(ac);
    } else if (e.target.value === 'highToLow') {
      let dc = products.sort(function (c, d) {
        return parseFloat(d.price) - parseFloat(c.price);
      });
      setProducts(dc);
      // console.log('ar after sort dc', dc);
    }
  };
  const getDataForFilters = () => {
    let brands = AllProducts.map(product => product.brand);
    brands = new Set(brands);
    let allbrands = [...brands];
    setBrands(allbrands);

    let sizes = [];
    AllProducts.forEach(product => {
      sizes = product.size.map(size => size);
    });
    setSize(sizes);

    let idealFor = AllProducts.map(product => product.idealFor);
    idealFor = new Set(idealFor);
    let allidealFor = [...idealFor];
    setIdealFor(allidealFor);
    // console.log("idealFor",allidealFor)
  };


  return (
    <>
      <Box d="flex">
        <Sidebar brands={brands} size={size} idealFor={idealFor} products={products} setProducts={setProducts}  />
        <Box minH="100vh" minW="20vw" p={8} bg="white" m={8}>
          <Box d="flex" >
            <Box flexGrow="1"></Box>
            <Box d="flex" justifySelf="flex-end" alignItems="center">
              <Text fontSize="sm" mx={5}>SortBy </Text>
              <Select
                placeholder="Select option"
                onChange={sortProducts}
                value={sort}
              >
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High To Low</option>
              </Select>
            </Box>
          </Box>
          <Grid templateColumns="repeat(4, 1fr)" gap={2} mt={4} >
            {products.length >0 ? products.map(product => (
              <Products productData={product} />
            ))
           :<>
             <Text>Seems like no data Found  clear Filter</Text>

           </>
            }
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Home;
