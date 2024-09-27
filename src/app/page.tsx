import Navbar from '@/app/component/Navbar';
import Header from './component/Header';

export default function Home() {
  return (
    <div className=' relative'>
      <Navbar />
      <div className='max-w-[1350px] mx-auto  px-10'>
        <Header />
      </div>
    </div>
  );
}
