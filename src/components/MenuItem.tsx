import MenuItemTypes from '@/types/MenuItem';
import Link from 'next/link';

const MenuItem = ({ title, path, Icon }: MenuItemTypes) => (
  <div>
    <Link href={path} className='mx-4 lg:mx-6 hover:text-amber-600'>
      <Icon className='mx-4 text-2xl sm:hidden' />
      <p className='hidden my-2 text-sm sm:inline'>{title}</p>
    </Link>
  </div>
);

export default MenuItem;
