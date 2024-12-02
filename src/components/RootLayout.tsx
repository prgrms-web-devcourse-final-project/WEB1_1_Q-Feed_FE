import Footer from '@/components/common/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const RootLayout = () => {
  const location = useLocation();
  const isFooterHidden = location.pathname.startsWith('/chatroom');
  return (
    <div>
      <main className='container'>
        <Outlet />
      </main>
      {!isFooterHidden && <Footer />}
    </div>
  );
};

export default RootLayout;
