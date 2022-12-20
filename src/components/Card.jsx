import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className='dark:text-gray-300'>
      <div key={item.id} className=''>
        <img
          src={
            process.env.REACT_APP_UPLOAD_URL +
            item.attributes?.img.data.attributes.url
          }
          alt=''
          className='mb-2'
        />
        <h5 className='text-sm'>{item?.attributes.title.substring(0, 29)}</h5>
        <h5 className='text-sm'>{item?.attributes.price} TL</h5>
      </div>
    </Link>
  );
};

export default Card;
