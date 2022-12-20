import { useState } from 'react';
import { useParams } from 'react-router';
import List from '../components/List';
import useFetch from '../hooks/useFetch';

const Products = () => {
  const catID = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sort, setSort] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);

  const { data, error, loading } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catID}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCategory(
      isChecked
        ? [...selectedSubCategory, value]
        : selectedSubCategory.filter((item) => item !== value)
    );
  };

  return (
    <div className='flex flex-col md:flex-row p-10 min-h-[70vh]'>
      {/* left */}
      <div className='grid grid-cols-2 mb-10 space-y-5 md:w-64 md:flex md:flex-col top-0 md:sticky h-fit dark:text-gray-300'>
        {/* Katergoriler */}
        <div className=''>
          <h4 className='mb-2 font-bold'>Kategoriler</h4>
          <div className=''>
            {data?.map((item) => (
              <div key={item.id} className='flex items-center space-x-2'>
                <input
                  type='checkbox'
                  name=''
                  id={item.id}
                  value={item.id}
                  onChange={handleChange}
                />
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            ))}
          </div>
        </div>
        {/* Fiyata Göre */}
        <div className=''>
          <h4 className='mb-2 font-bold'>Fiyata Göre</h4>
          <div className='flex items-center space-x-3'>
            <span>0</span>
            <input
              type='range'
              name=''
              id=''
              min={0}
              max={10000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        {/* Artan & Azalan Fiya Göre */}
        <div className=''>
          <h4 className='mb-2 font-bold'>Sırala</h4>
          <div className=''>
            <div className='flex items-center space-x-2'>
              <input
                type='radio'
                name='price'
                id='asc'
                onChange={(e) => setSort('asc')}
              />
              <label htmlFor='asc'>Fiyata Göre ( Azalan )</label>
            </div>
            <div className='flex items-center space-x-2'>
              <input
                type='radio'
                name='price'
                id='desc'
                onChange={(e) => setSort('desc')}
              />
              <label htmlFor='desc'>Fiyata Göre ( Artan ) </label>
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className='flex-1'>
        <List
          catID={catID}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCategory}
        />
      </div>
    </div>
  );
};

export default Products;
