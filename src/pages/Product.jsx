import { FiPlus, FiMinus, FiShoppingCart } from 'react-icons/fi';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartReducer';

const Product = () => {
  const id = useParams().id;
  const [like, setLike] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { data, error, loading } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className='flex flex-col-reverse md:flex-row p-10'>
      {error ? (
        'Something went wrong'
      ) : loading ? (
        'Loading '
      ) : (
        <>
          {/* left */}
          <div className='flex-1'>
            {/* image area 1 */}
            <div className='grid grid-cols-2'>
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=''
                className=''
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=''
                className=''
              />
            </div>
            {/* desc */}
            <div className='my-4 p-10 bg-white dark:bg-black dark:text-gray-300 shadow space-y-3'>
              <h5 className='text-sm'>Yeni Ürün</h5>
              <p>{data?.attributes?.desc}</p>
              <div className='space-y-3'>
                <h4>Beden - Modelin boyu: 176cm/5'9" Bedeni: M</h4>
                <h4>Kesim - Rahat kesim</h4>
                <h4>ÜRÜN İÇERİĞİ - Polyester 50%, Akrilik 40%, Poliamid 10%</h4>
                <h4>Ürün No - 1133708002</h4>
              </div>
            </div>
            {/* image area 2 */}
            <div className='grid grid-cols-2'>
              {/* <img src={data[2]} alt='' className='' />
              <img src={data[3]} alt='' className='' />
              <img src={data[4]} alt='' className='' />
              <img src={data[5]} alt='' className='' /> */}
            </div>
          </div>
          {/* right */}
          <div className='flex flex-col  p-5 md:w-1/3 top-0 md:sticky lg:h-screen bg-gray-100 dark:bg-black'>
            <div className='flex items-center justify-between dark:text-gray-300'>
              <h3 className='text-2xl mb-2 '>{data?.attributes?.title}</h3>
              <button onClick={() => setLike(!like)}>
                {like === true ? (
                  <BsHeart size={24} />
                ) : (
                  <BsHeartFill className='text-red-500' size={24} />
                )}
              </button>
            </div>
            <h2 className='dark:text-gray-300'>{data?.attributes?.price} TL</h2>
            <div className='flex mb-3 space-x-5 mt-5'>
              <select
                name=''
                id=''
                className='bg-white p-4 w-full outline-none'
              >
                <option value='1'>sm</option>
                <option value='2'>md</option>
                <option value='3'>lg</option>
                <option value='4'>xl</option>
              </select>
            </div>
            <div className='flex items-center bg-white w-fit p-4 mb-3'>
              <FiMinus
                className='cursor-pointer'
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              />
              <button disabled className='w-14 text-center'>
                {quantity}
              </button>
              <FiPlus
                className='cursor-pointer'
                onClick={() => setQuantity((prev) => prev + 1)}
              />
            </div>
            <button
              className='flex justify-center items-center bg-black dark:bg-[#9A0680] text-white p-4'
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <FiShoppingCart className='mr-3' />
              Sepete Ekle
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
