import { Link } from 'react-router-dom';
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiChevronRight,
} from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';
import Cart from './Cart';
import Searchbox from './Searchbox';
import { FaTimes } from 'react-icons/fa';
import useScrollPosition from '../helpers/useScrollPosition';
import { useSelector } from 'react-redux';

const Navbar = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  const products = useSelector((state) => state.cart.products);

  const scrollPosition = useScrollPosition();

  let [isOpen, setIsOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const leftNav = [
    { title: 'Kadın', url: 'products/1' },
    { title: 'Erkek', url: 'products/2' },
    { title: 'Çocuk', url: 'products/3' },
    { title: 'Aksesuar', url: 'products/4' },
  ];

  return (
    <div
      className={classNames(
        scrollPosition > 0 ? 'shadow' : 'shadow-none',
        'sticky top-0 z-20 bg-white transition-shadow'
      )}
    >
      <div className='grid grid-cols-3 px-10 py-5 bg-white dark:bg-[#000]'>
        <button
          className='md:hidden'
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <FiMenu size={24} className='dark:text-gray-300' />
        </button>
        <div className='hidden md:flex items-center space-x-4 dark:text-gray-300'>
          {leftNav.map((item) => (
            <Link key={item.title} to={item.url}>
              {item.title}
            </Link>
          ))}
          <button onClick={() => setOpenSearch(!openSearch)}>
            <FiSearch size={18} className='cursor-pointer' />
          </button>
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
              // ref={domNode}
              className='relative cursor-pointer'
              onClick={() => setIsOpen(!isOpen)}
            >
              <FiShoppingCart size={18} />
              <span className='absolute flex justify-center items-center -right-4 -top-3 text-xs text-white font-semibold bg-red-500 dark:bg-[#9A0680] h-5 w-5 rounded-full'>
                {products.length}
              </span>
            </div>
          </div>
        </div>
        {isOpen && <Cart />}
        {openSearch && <Searchbox />}
      </div>
      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className='fixed top-0 left-0 z-50 bg-orange-50 shadow-2xl h-full w-[80%] flex flex-col'>
          <button
            className='flex items-center bg-white p-5'
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <FaTimes size={32} />
            <span className='ml-3'>Kapat</span>
          </button>
          <div className='flex flex-col space-y-5 mt-5 p-5'>
            {leftNav.map((item) => (
              <Link
                className='flex justify-between text-xl'
                key={item.title}
                to={item.url}
              >
                {item.title}
                <FiChevronRight size={18} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
