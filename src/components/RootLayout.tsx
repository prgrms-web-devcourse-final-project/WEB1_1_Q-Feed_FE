import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div>
      <Header />
      <main className='container'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
