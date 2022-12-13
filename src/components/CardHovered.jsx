import React from 'react';
import { Link } from 'react-router-dom';

const CardHovered = ({ item }) => {
  return (
    <Link to='/product/1' className='dark:text-gray-300'>
      <div key={item.id} className='relative'>
        <img src={item.image} alt='' className='mb-2' />
        <img
          src={item.image2}
          alt=''
          className='mb-2 absolute top-0 opacity-0 hover:opacity-100'
        />
        <h5 className='text-sm'>{item.name}</h5>
        <h5 className='text-sm'>{item.price} TL</h5>
      </div>
    </Link>
  );
};

export default CardHovered;
