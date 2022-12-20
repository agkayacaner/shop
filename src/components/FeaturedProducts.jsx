import useFetch from '../hooks/useFetch';
import Card from './Card';

const FeaturedProducts = ({ type }) => {
  const { data, error, loading } = useFetch(
    `/products?sort[0]=createdAt%3Adesc&populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className='mx-10 lg:mx-64 my-5'>
      <h3 className='text-lg mb-3 font-bold dark:text-gray-300'>
        {type} Ürünler
      </h3>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
        {error
          ? 'Something went wrong'
          : loading
          ? 'Loading'
          : data?.slice(0, 4).map((item) => <Card key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
