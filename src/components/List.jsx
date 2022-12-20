import React from 'react';
import useFetch from '../hooks/useFetch';
import CardHovered from './CardHovered';

const List = ({ subCats, maxPrice, sort, catID }) => {
  const { data, error, loading } = useFetch(
    `/products?sort[0]=createdAt%3Adesc&populate=*&[filters][categories][id]=${catID}
    ${subCats.map((item) => `&[filters][sub_categories][id][$eq]=${item}`)}
    `
    // &[filters][price][$lte]=${maxPrice}&sort=price:${sort}
  );
  return (
    <div className='grid grid-cols-2 gap-5 lg:grid-cols-4'>
      {loading
        ? 'Loading...'
        : data?.map((item) => <CardHovered key={item.id} item={item} />)}
    </div>
  );
};

export default List;
