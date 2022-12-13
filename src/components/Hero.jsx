import { Link } from 'react-router-dom';

const Hero = () => {
  const data = [
    {
      id: 1,
      title: 'Kış Şıklığı',
      desc: 'Kış gardıropuna moda güncellemesi',
      url: '/products/3',
      image:
        'https://lp2.hm.com/hmgoepprod?source=url%5Bhttps://www2.hm.com/content/dam/ladies_s06/december_2022/1086f/1086F-3x2.jpg%5D&scale=size%5B960%5D&sink=format%5Bjpeg%5D,quality%5B80%5D',
    },
  ];
  return (
    <div className='lg:mx-64'>
      {data.map((item) => (
        <div key={item.id} className='relative'>
          <img
            src={item.image}
            alt=''
            className='h-[620px] w-full object-cover'
          />
          <div className='absolute w-full bottom-0 left-0 p-10 flex flex-col items-center space-y-4 bg-gradient-to-t from-black'>
            <h3 className='text-white text-3xl'>{item.title}</h3>
            <p className='text-white'>{item.desc}</p>
            <Link
              to={item.url}
              className='transition duration-150 bg-white hover:bg-slate-200 px-4 py-2 text-center'
            >
              Şimdi satın al
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
