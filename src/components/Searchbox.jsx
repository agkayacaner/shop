import React from 'react';

const Searchbox = () => {
  return (
    <div className='absolute top-16 left-0 right-0 bg-white z-40 hidden md:flex'>
      <input
        type='search'
        name=''
        id=''
        placeholder='Ara'
        className='p-5 outline-none w-full'
      />
    </div>
  );
};

export default Searchbox;
