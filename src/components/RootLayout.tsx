import Footer from '@/components/common/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const RootLayout = () => {
  const location = useLocation();
  const isFooterHidden =
    location.pathname === '/login' ||
    location.pathname === '/' ||
    location.pathname.startsWith('/chatroom') ||
    location.pathname === '/select' ||
    location.pathname.startsWith('/question') ||
    location.pathname.startsWith('/post');
  return (
    <div>
      <main className="container">
        <Outlet />
      </main>
      {!isFooterHidden && <Footer />}
    </div>
  );
};

export default RootLayout;
