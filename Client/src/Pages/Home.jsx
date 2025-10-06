import React from 'react';
import { useLoaderData } from 'react-router';

import ProductCard from '../components/ProductCard';

const Home = () => {

  
  const products = useLoaderData();
  console.log(products);
  // 
  
    return (
        <div className='w-10/12 mx-auto p-10 my-10'>
          <h2 className='text-center mb-10 text-2xl font-bold'>My ALl {products.length} products</h2>  
          <div className='grid xl:lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20'>
            {
              products.map(product => <ProductCard key={product.id} product={product}/>)
            }
          </div>
        </div>
    );
};

export default Home;<h2>Hello Alif</h2>