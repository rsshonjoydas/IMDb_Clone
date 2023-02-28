import Image from 'next/image';

const Loading = () => (
  <div className='flex justify-center'>
    <Image className='h-96' src='spinner.svg' width={550} height={384} alt='loading...' />
  </div>
);

export default Loading;
