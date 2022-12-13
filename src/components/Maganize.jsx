import React from 'react';
import { Link } from 'react-router-dom';
import MagazineCard from './MagazineCard';

const Maganize = () => {
  const data = [
    {
      id: 1,
      title: 'Bir Sanal evren tasarım hikayesi',
      image:
        'https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/h-m-magazine-2022/november_2022/2016a/2016-Innovation-3x2-Magazine-Article-Top-image-1688x1126.jpg]&scale=size[1200]&sink=format[jpeg],quality[80]',
      category: 'inside-store',
    },
    {
      id: 2,
      title: '2022 en iyi erkek giyim trendleri',
      image:
        'https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/h-m-magazine-2022/november_2022/3216/3216-Editorial-Lookbook-Magazine-Top-image.jpg]&scale=size[1200]&sink=format[jpeg],quality[80]',
      category: 'inside-store',
    },
    {
      id: 3,
      title: 'STORE Zlaten İbrahimovic ile iş birliği yapıyor',
      image:
        'https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/h-m-magazine-2022/october_2022/adam/adam/Magazine-HM-Move-1-Top-image-1688x1126.jpg]&scale=size[1200]&sink=format[jpeg],quality[80]',
      category: 'inside-store',
    },
  ];
  return (
    <div className='py-10 bg-gray-100 dark:bg-black'>
      <div className='px-10 lg:px-64'>
        <div className='text-center p-4 dark:text-gray-300'>
          <h3 className='text-3xl'>MAGAZINE</h3>
          <p>A WORLD OF INSPIRATION</p>
          <Link to='' className='underline'>
            Read STORE Magazine
          </Link>
        </div>
        <div className='grid md:grid-cols-3 gap-5'>
          {data.map((item) => (
            <MagazineCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Maganize;
