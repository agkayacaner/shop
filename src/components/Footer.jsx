import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className='dark:text-gray-300'>
      <div className='grid gap-10 grid-cols-2 p-10 lg:grid-cols-4'>
        {/* Item 1 */}
        <div className='text-sm flex flex-col space-y-2'>
          <h5 className='font-bold'>Online Alışveriş</h5>
          <Link to='' className='w-fit'>
            Kadın
          </Link>
          <Link to='' className='w-fit'>
            Erkek
          </Link>
          <Link to='' className='w-fit'>
            Çocuk
          </Link>
          <Link to='' className='w-fit'>
            Aksesuar
          </Link>
        </div>
        {/* Item 2 */}
        <div className='text-sm flex flex-col space-y-2'>
          <h5 className='font-bold'>Kurumsal Bilgiler</h5>
          <Link to='' className='w-fit'>
            Store Karıyer
          </Link>
          <Link to='' className='w-fit'>
            Store Hakkında
          </Link>
          <Link to='' className='w-fit'>
            Sürdürülebilirlik
          </Link>
          <Link to='' className='w-fit'>
            Basın
          </Link>
        </div>
        {/* Item 3 */}
        <div className='text-sm flex flex-col space-y-2'>
          <h5 className='font-bold'>Yardım</h5>
          <Link to='' className='w-fit'>
            Müşteri Hizmetleri
          </Link>
          <Link to='' className='w-fit'>
            Hesabım
          </Link>
          <Link to='' className='w-fit'>
            İletişim
          </Link>
          <Link to='' className='w-fit'>
            Çerez Bildirimi
          </Link>
          <Link to='' className='w-fit'>
            Çerez Ayarları
          </Link>
        </div>
        {/* Item 4 */}
        <div className='text-sm flex flex-col space-y-2'>
          <h5 className='font-bold'>STORE Member ol ve %10 indirim kazan</h5>
          <Link to='' className='w-fit'>
            Store Member ol
          </Link>
          <Link to='' className='w-fit'>
            Daha Fazla Bilgi
          </Link>
        </div>
      </div>
      <div className='lg:px-96 pb-10 flex flex-col items-center space-y-5 mt-10'>
        {/* Social */}
        <div className='flex items-center space-x-5'>
          <Link to=''>
            <FiFacebook size={18} />
          </Link>
          <Link to=''>
            <FiTwitter size={18} />
          </Link>
          <Link to=''>
            <FiInstagram size={18} />
          </Link>
          <Link to=''>
            <FiYoutube size={18} />
          </Link>
        </div>
        <p className='text-xs'>
          Bu sayfanın içeriği telif hakları ile korunmaktadır ve STORE'ye
          aittir.
        </p>
        <Link
          to='/'
          className='font-bold text-2xl tracking-widest text-red-500 dark:text-[#fff]'
        >
          STORE
        </Link>
        <span className='text-xs'>Türkiye | TL</span>
      </div>
    </div>
  );
};

export default Footer;
