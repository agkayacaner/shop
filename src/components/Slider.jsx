import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Slider = () => {
  const [currentSlide, sestCurrentSlide] = useState(0);
  const data = [
    'https://images.unsplash.com/photo-1627483297929-37f416fec7cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8ZmFzaGlvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1612731486606-2614b4d74921?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhc2hpb258ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1493655161922-ef98929de9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGZhc2hpb258ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  ];
  const prevSlide = () => {
    sestCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    sestCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className='relative w-[100%] h-[50vh] lg:h-[calc(100vh-80px)] overflow-hidden'>
      {/* container */}
      <div
        className='flex w-[300vw] h-full transition duration-700 ease-out'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt='' className='w-[100vw] object-cover h-full' />
        <img src={data[1]} alt='' className='w-[100vw] object-cover h-full' />
        <img src={data[2]} alt='' className='w-[100vw] object-cover h-full' />
      </div>
      {/* controllers */}
      <div className='absolute top-1/2 -translate-y-1/2 w-full flex justify-between items-center p-4 text-white'>
        <FiChevronLeft
          size={54}
          onClick={prevSlide}
          className='cursor-pointer'
        />
        <FiChevronRight
          size={54}
          onClick={nextSlide}
          className='cursor-pointer'
        />
      </div>
    </div>
  );
};

export default Slider;
