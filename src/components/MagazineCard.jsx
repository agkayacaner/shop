import React from 'react';
import { Link } from 'react-router-dom';

const MagazineCard = ({ item }) => {
  return (
    <Link to='' key={item.id} className='bg-white dark:bg-[#121212]'>
      <img src={item.image} alt='' />
      <div className='p-3 text-center dark:text-gray-300'>
        <h5 className='text-xs mb-2'>{item.category}</h5>
        <h3 className='text-sm'>{item.title}</h3>
      </div>
    </Link>
  );
};

export default MagazineCard;
