import NavbarItem from './NavbarItem';

const Navbar = () => (
  <div className='flex justify-center p-4 dark:bg-gray-600 bg-amber-100 lg:text-lg'>
    <NavbarItem title='Trending' param='fetchTrending' />
    <NavbarItem title='Top Rated' param='fetchTopRated' />
  </div>
);

export default Navbar;
