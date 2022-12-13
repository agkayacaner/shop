import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  return (
    <Link to='/product/1' className='dark:text-gray-300'>
      <div key={item.id} className=''>
        <img src={item.image} alt='' className='mb-2' />
        <h5 className='text-sm'>{item.name}</h5>
        <h5 className='text-sm'>{item.price} TL</h5>
      </div>
    </Link>
  );
};

export default Card;
