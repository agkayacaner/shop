import { FaTimes } from 'react-icons/fa';
const Searchbox = () => {
  return (
    <div className='absolute top-16 left-0 right-0 bg-white z-40 hidden md:flex shadow-lg border-t'>
      <input
        type='search'
        name=''
        id=''
        ß
        placeholder='Aramak istediğiniz şeyi yazın'
        className='p-5 outline-none w-full'
      />
      <button className='px-2'>
        <FaTimes size={24} />
      </button>
    </div>
  );
};

export default Searchbox;
