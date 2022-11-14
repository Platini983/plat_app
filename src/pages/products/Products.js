import React from 'react';
import './Products.css';
import ProductItem from "../ProductItem";


function Products() {
  return (
    <div className='products'>
      <h1> Check these Products Gallery Out</h1>
      <div className='product_container'>
        <ul className='products_items'>
          <ProductItem
            src={ require('../../assets/image/platini2.jpg') }
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Adventure'
            path='/products'
          />
          <ProductItem
            src={ require('../../assets/image/platini2.jpg') }
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Adventure'
            path='/products'
          />
          <ProductItem
            src={ require('../../assets/image/platini2.jpg') }
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Adventure'
            path='/products'
          />
          <ProductItem
            src={ require('../../assets/image/platini2.jpg') }
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Adventure'
            path='/products'
          />
        </ul>
        <ul className='products_items'>
          <ProductItem
            src={ require('../../assets/image/mike.jpg') }
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Adventure'
            path='/products'
          />
          <ProductItem
            src={ require('../../assets/image/mike.jpg') }
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Adventure'
            path='/products'
          />
        </ul>
      </div>
    </div>
   
  );
}

export default Products