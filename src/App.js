import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { NotFound } from './routes/NotFound';
import { RegisterModal } from './modules/auth/RegisterModal';
import { LogInModal } from './modules/auth/LogInModal';
import { ModalAddToFavouriteWhenNotAuth } from './modules/auth/ModalAddToFavouriteWhenNotAuth';
import { useLocation } from 'react-router-dom';
import { OneProductInfoModal } from './modules/product/OneProductInfoModal';
import { useUserLogin } from './modules/auth/hooks/useUserLogin';
import { UserSettings } from './modules/user/UserSettings';
import { OrderDetailsModal } from './modules/user/OrderDetailsModal';

function App() {
  const location = useLocation();

  const slicePathname = (lastPath) => {
    if (location.pathname.includes(lastPath)) {
      const newPath = location.pathname.slice(
        0,
        location.pathname.length - lastPath.length
      );
      return newPath + lastPath;
    }
  };

  useUserLogin();

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/home/*" element={<HomePage />} />
          <Route path="/settings/*" element={<UserSettings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Routes>
          <Route
            path={slicePathname('/register')}
            element={<RegisterModal />}
          />
          <Route path={slicePathname('/login')} element={<LogInModal />} />
          <Route
            path={slicePathname('/add-to-favourite')}
            element={<ModalAddToFavouriteWhenNotAuth />}
          />
          <Route
            path="/home/product/:productId"
            element={<OneProductInfoModal />}
          />
          <Route
            path="/settings/order-details/:orderId"
            element={<OrderDetailsModal />}
          />
        </Routes>
        <Routes></Routes>
      </Layout>
    </div>
  );
}

export default App;
