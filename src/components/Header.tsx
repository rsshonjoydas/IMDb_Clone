import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import DarkModeSwitch from './DarkModeSwitch';
import MenuItem from './MenuItem';

const Header = () => (
  <div className='flex items-center justify-between max-w-6xl py-6 mx-2 sm:mx-auto'>
    <div className='flex'>
      <MenuItem title='Home' path='/' Icon={AiFillHome} />
      <MenuItem title='About' path='/about' Icon={BsFillInfoCircleFill} />
    </div>

    <div className='flex items-center space-x-5 md:mr-4'>
      <DarkModeSwitch />
      <Link href='/'>
        <h2 className='text-2xl'>
          <span className='px-2 py-1 mr-1 font-bold rounded-lg bg-amber-500'>IMDb</span>
          <span className='hidden text-xl sm:inline'>Clone</span>
        </h2>
      </Link>
    </div>
  </div>
);

export default Header;
