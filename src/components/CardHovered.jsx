import React from 'react';
import { Link } from 'react-router-dom';

const CardHovered = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className='dark:text-gray-300'>
      <div key={item.id} className='relative'>
        <img
          src={
            process.env.REACT_APP_UPLOAD_URL +
            item.attributes?.img.data.attributes.url
          }
          alt=''
          className='mb-2'
        />
        <img
          src={
            process.env.REACT_APP_UPLOAD_URL +
            item.attributes?.img2.data.attributes.url
          }
          alt=''
          className='mb-2 absolute top-0 opacity-0 hover:opacity-100'
        />
        <h5 className='text-sm'>{item?.attributes.title}</h5>
        <h5 className='text-sm'>{item?.attributes.price} TL</h5>
      </div>
    </Link>
  );
};

export default CardHovered;
