import { FiTrash } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/cartReducer';
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from '../makeRequest';

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };
  const stripePromise = loadStripe(
    'pk_test_51KYdxRAwzRRHEP2FFmA4XkO6x4ikmLosnNlN8Gbxir8w3fvFSxXKmr762XZ2tHtZfHUjF0k5hpLaJ4cmruCqt6KV00CdQlBQ4w'
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post('/orders', { products });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='absolute z-50 top-16 right-0 md:right-10 bg-white shadow p-3 w-full min-w-[320px] md:w-fit dark:bg-[#000] dark:text-gray-300'>
      <div className='space-y-3 overflow-y-auto scrollbar-hide max-h-64'>
        {products.map((item) => (
          <div key={item.id} className='flex justify-between items-center'>
            <div className='flex'>
              <img
                src={process.env.REACT_APP_UPLOAD_URL + item.img}
                alt=''
                className='w14 h-24 object-cover'
              />
              <div className='p-3'>
                <h3 className='text-sm'>{item.title}</h3>
                <h5 className='text-sm my-1'>{item.price}₺</h5>
                <h5 className='text-xs'>Adet: {item.quantity}</h5>
                <h5 className='text-xs'>Beden: Md</h5>
              </div>
            </div>
            <button onClick={() => dispatch(removeItem(item.id))}>
              <FiTrash
                size={18}
                className='cursor-pointer hover:text-red-400'
              />
            </button>
          </div>
        ))}
      </div>
      <hr className='my-3 dark:border-gray-700' />
      <div className='flex items-center justify-between mb-2'>
        <h4 className='text-sm'>Sipariş Bedeli</h4>
        <h4 className='text-sm'>{totalPrice()}₺</h4>
      </div>
      <div className='flex items-center justify-between'>
        <h4 className='text-sm'>Teslimat</h4>
        <h4 className='text-sm'>0₺</h4>
      </div>
      <hr className='my-3 dark:border-gray-700' />
      <div className='flex items-center justify-between'>
        <h4>Toplam</h4>
        <h4 className='font-bold'>{totalPrice()}₺</h4>
      </div>
      <div className='flex flex-col space-y-2 mt-4'>
        <button
          className='px-4 py-3 text-center bg-black text-white dark:bg-[#9A0680]'
          onClick={handlePayment}
        >
          Ödeme
        </button>
        <button className='px-4 py-3 text-center border border-black dark:border-white'>
          Sepete Git
        </button>
      </div>
    </div>
  );
};

export default Cart;
