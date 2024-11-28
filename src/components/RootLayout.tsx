import Footer from '@/components/common/Footer';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div>
      <main className='container'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
