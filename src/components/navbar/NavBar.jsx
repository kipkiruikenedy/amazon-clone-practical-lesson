import React from 'react';
import { Link } from 'react-router-dom';
import logoamazon from '../../assets/images/logoamazon.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux'

const NavBar = () => {
  const count = useSelector((state) => state.counter.value)
  return (
 <div className='bg-slate-800 flex justify-between text-white items-center py-1'>
  {/* logo */}
  <div className='h-10 w-15 item-center flex'>
    <img className='h-15 w-15' src={logoamazon} alt='logo'/>
  </div>
  {/* delivery */}
  <div className='flex items-center'>
    <div><LocationOnIcon /></div>
    <div className=''>
      <span>Deliver to</span><br/>
      <span>Kenya</span>
    </div>
  </div>
  {/* search */}
  <div className='flex items-center w-2/4 bg-white rounded  text-blue-900 justify-between'>
  <div className='flex'>
  <div className='bg-gray-200 px-3 py-2'>All</div>
  <div className='flex items-center pl-2'>search amazon</div>
  </div>
    <div className='bg-yellow-400 px-3 rounded py-2'><SearchIcon /></div>
  </div>
  {/* language */}
  <div className='flex items-center'>
    <p>flag</p>
    <p>EN</p>
  </div>
  {/* sign in */}
  <div className=' items-center'>
    <p>hello, sign in</p>
    <p>Account &List</p>
  </div>
  {/* order */}
  <div>
    <p>Return</p>
    <p>& Orders</p>
  </div>
  {/* cat */}
  <div className='flex items-center'>
    <div><ShoppingCartIcon /></div>
    <p>Cart</p>
    <p className='absolute top-0 right-9 text-red-300 font-bold'>{count}</p>
  </div>
 </div>
  );
}

export default NavBar;
