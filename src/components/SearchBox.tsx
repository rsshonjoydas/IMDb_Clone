'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SearchBox = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!search) return;
    router.push(`/search/${search}`);
  };

  return (
    <div>
      <form
        action=''
        onSubmit={handleSubmit}
        className='flex items-center justify-between max-w-6xl px-5 mx-auto'
      >
        <input
          type='text'
          placeholder='Search keywords...'
          className='flex-1 w-full placeholder-gray-500 bg-transparent rounded-sm outline-none h-1/4'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit' disabled={!search} className='text-amber-600 disabled:text-gray-400'>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
