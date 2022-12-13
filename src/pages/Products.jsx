import { useState } from 'react';
import { useParams } from 'react-router';
import CardHovered from '../components/CardHovered';
import List from '../components/List';

const Products = () => {
  const catID = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setMSort] = useState(null);

  const data = [
    {
      id: 1,
      name: 'Saç Örgüsü Kazak',
      image:
        'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc0%2Ffc%2Fc0fc42faf3f853f12814dc42b64c3432e62ca924.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      image2:
        'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F69%2F78%2F697898fde5f677fee699bc3fc98345802f5d71eb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
      price: '429.99',
      oldPrice: '699.99',
      quantity: '1',
      isNew: 'True',
    },
    {
      id: 2,
      name: 'Kabarık Tüylü Ceket',
      image:
        'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F01%2Fab%2F01ab196b793f1906da84b6b344fc21dadc3f593e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      image2:
        'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd5%2F71%2Fd571331ca565acbf16b8908f9f60d1ba53e1c1db.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
      price: '879.99',
      oldPrice: '699.99',
      quantity: '1',
      isNew: 'True',
    },
    {
      id: 3,
      name: 'Jakarlı Triko Kazak',
      image:
        'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F77%2F88%2F77884b73d1db33b20c1af5b0c12e25c25c502e73.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      image2:
        'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe1%2Fec%2Fe1ec2a167b286de553e316c5f09658620204d639.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
      price: '619.99',
      oldPrice: '699.99',
      quantity: '1',
      isNew: 'False',
    },
    {
      id: 4,
      name: 'Yün Karışımlı Saç Örgüsü Kazak',
      image:
        'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb5%2F59%2Fb559b4ce38d5c00f2802f1c3edfbca3f0df2807f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      image2:
        'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fbd%2F6e%2Fbd6ebc233a119222b2bac3f9c5cb271a957f5c95.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
      price: '879.99',
      oldPrice: '699.99',
      quantity: '1',
      isNew: 'False',
    },
  ];
  return (
    <div className='flex flex-col md:flex-row p-10'>
      {/* left */}
      <div className='grid grid-cols-2 mb-10 space-y-5 md:w-64 md:flex md:flex-col top-0 md:sticky h-fit dark:text-gray-300'>
        {/*  */}
        <div className=''>
          <h4 className='mb-2 font-bold'>Kategoriler</h4>
          <div className=''>
            <div className='flex items-center space-x-2'>
              <input type='checkbox' name='' id='1' value={1} />
              <label htmlFor='1'>Elbise</label>
            </div>
            <div className='flex items-center space-x-2'>
              <input type='checkbox' name='' id='2' value={2} />
              <label htmlFor='2'>Tişört</label>
            </div>
            <div className='flex items-center space-x-2'>
              <input type='checkbox' name='' id='3' value={3} />
              <label htmlFor='3'>Kazak</label>
            </div>
          </div>
        </div>
        {/*  */}
        <div className=''>
          <h4 className='mb-2 font-bold'>Fiyata Göre</h4>
          <div className='flex items-center space-x-3'>
            <span>0</span>
            <input
              type='range'
              name=''
              id=''
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        {/*  */}
        <div className=''>
          <h4 className='mb-2 font-bold'>Sırala</h4>
          <div className=''>
            <div className='flex items-center space-x-2'>
              <input
                type='radio'
                name='price'
                id='asc'
                onChange={(e) => setMSort('asc')}
              />
              <label htmlFor='asc'>Fiyata Göre ( Azalan )</label>
            </div>
            <div className='flex items-center space-x-2'>
              <input
                type='radio'
                name=''
                price
                id='desc'
                onChange={(e) => setMSort('desc')}
              />
              <label htmlFor='desc'>Fiyata Göre ( Artan ) </label>
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className='flex-1'>
        <List catID={catID} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
