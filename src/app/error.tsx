'use client';

import { useEffect } from 'react';

const Error = ({ error, reset }: any) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className='mt-10 text-center'>
      <h1>Something went wrong</h1>
      <button type='button' className='hover:text-amber-600' onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
};

export default Error;
