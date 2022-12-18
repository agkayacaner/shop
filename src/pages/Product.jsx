import { FiPlus, FiMinus, FiShoppingCart } from 'react-icons/fi';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { useState } from 'react';

const Product = () => {
  const data = [
    'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F77%2F88%2F77884b73d1db33b20c1af5b0c12e25c25c502e73.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
    'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F40%2F8b%2F408b3d03199b7942d1a52cf7156348ef1e63c60f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
    'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fdb%2F28%2Fdb281fc7aea6f4938abd5c7c3149426e825de847.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
    'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fa3%2F99%2Fa39959475490d672c95173b713f4c04acacbbcb7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
    'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe1%2Fec%2Fe1ec2a167b286de553e316c5f09658620204d639.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
    'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F1c%2Fdc%2F1cdc7227996c6c6210249e684ac41b06914840a5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
  ];
  const [like, setLike] = useState(false);
  const [quantity, setQuantity] = useState(1);
  return (
    <div className='flex flex-col-reverse md:flex-row px-10'>
      {/* left */}
      <div className='flex-1'>
        {/* image area 1 */}
        <div className='grid grid-cols-2'>
          <img src={data[0]} alt='' className='' />
          <img src={data[1]} alt='' className='' />
        </div>
        {/* desc */}
        <div className='my-4 p-10 bg-white dark:bg-black dark:text-gray-300 shadow space-y-3'>
          <h5 className='text-sm'>Yeni Ürün</h5>
          <p>
            Yumuşak jakarlı triko kazak. Rahat kesimli, yuvarlak yakalı, oldukça
            düşük omuzlu, uzun kollu. Yakası, manşetleri ve etek ucu lastik
            örgülü.
          </p>
          <div className='space-y-3'>
            <h4>Beden - Modelin boyu: 176cm/5'9" Bedeni: M</h4>
            <h4>Kesim - Rahat kesim</h4>
            <h4>ÜRÜN İÇERİĞİ - Polyester 50%, Akrilik 40%, Poliamid 10%</h4>
            <h4>Ürün No. - :1133708002</h4>
          </div>
        </div>
        {/* image area 2 */}
        <div className='grid grid-cols-2'>
          <img src={data[2]} alt='' className='' />
          <img src={data[3]} alt='' className='' />
          <img src={data[4]} alt='' className='' />
          <img src={data[5]} alt='' className='' />
        </div>
      </div>
      {/* right */}
      <div className='flex flex-col  p-5 md:w-1/3 top-0 md:sticky lg:h-screen bg-gray-100'>
        <div className='flex items-center justify-between dark:text-gray-300'>
          <h3 className='text-2xl mb-2 '>Jakarlı Triko Kazak</h3>
          <button onClick={() => setLike(!like)}>
            {like === true ? (
              <BsHeart size={24} />
            ) : (
              <BsHeartFill className='text-red-500' size={24} />
            )}
          </button>
        </div>
        <h2 className='dark:text-gray-300'>619.00 TL</h2>
        <div className='flex mb-3 space-x-5 mt-5'>
          <select name='' id='' className='bg-white p-4 w-full'>
            <option selected>Beden Seçiniz</option>
            <option value='1'>sm</option>
            <option value='1'>md</option>
            <option value='1'>lg</option>
            <option value='1'>xl</option>
          </select>
        </div>
        <div className='flex items-center bg-white w-fit p-4 mb-3'>
          <FiMinus
            className='cursor-pointer'
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          />
          <button disabled className='w-14 text-center'>
            {quantity}
          </button>
          <FiPlus
            className='cursor-pointer'
            onClick={() => setQuantity((prev) => prev + 1)}
          />
        </div>
        <button className='flex justify-center items-center bg-black dark:bg-[#9A0680] text-white  p-4'>
          <FiShoppingCart className='mr-3' />
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Product;
