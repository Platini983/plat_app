import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem(props) {
  return (
    <>
      <li className='products_item'>
        <Link className='products_item_link' to={props.path}>
          <figure className='products_item_pic-wrap' data-category={props.label}>
            <img
              className='products_item_img'
              alt='Travel_Image'
              src={props.src}
            />
          </figure>
          <div className='products_item_info'>
            <h5 className='products_item_text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ProductItem;
