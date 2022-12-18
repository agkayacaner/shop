import { Link } from 'react-router-dom';
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiMenu,
} from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';
import Cart from './Cart';
import Searchbox from './Searchbox';

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', maybeHandler);

    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });

  return domNode;
};

const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  let domNode = useClickOutside(() => {
    setIsOpen(false);
  });

  return (
    <div className='grid grid-cols-3 px-10 py-5 bg-white dark:bg-[#000]'>
      <button className='md:hidden'>
        <FiMenu size={24} className='dark:text-gray-300' />
      </button>
      <div className='hidden md:flex items-center space-x-4 dark:text-gray-300'>
        <Link to='/products/1'>Erkek</Link>
        <Link to='/products/2'>Kadın</Link>
        <Link to='/products/3'>Çocuk</Link>
        <Link to='/products/4'>Aksesuar</Link>
        <FiSearch
          ref={domNode}
          size={18}
          onClick={() => setOpenSearch(!openSearch)}
          className='cursor-pointer'
        />
      </div>
      <div className='flex items-center justify-center'>
        <Link
          to='/'
          className='font-bold text-2xl tracking-widest text-red-500 dark:text-[#fff]'
        >
          STORE
        </Link>
      </div>
      <div className='flex items-center justify-end space-x-4 relative dark:text-gray-300'>
        <div className='space-x-4 hidden lg:flex'>
          <Link to=''>Müşteri Hizmetleri</Link>
          <Link to=''>Mode Haberleri</Link>
        </div>
        {/* Icons */}
        <div className='flex space-x-4'>
          <FiUser size={18} />
          <FiHeart size={18} />
          <div
            ref={domNode}
            className='relative cursor-pointer'
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <FiShoppingCart size={18} />
            <span className='absolute flex justify-center items-center -right-4 -top-3 text-xs text-white font-semibold bg-red-500 dark:bg-[#9A0680] h-5 w-5 rounded-full'>
              0
            </span>
          </div>
        </div>
      </div>
      {isOpen && <Cart />}
      {openSearch && <Searchbox />}
    </div>
  );
};

export default Navbar;
