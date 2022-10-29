import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout';
import { Products } from './components/Products';
import { NotFound } from './routes/NotFound';
import { RegisterModal } from './modules/auth/RegisterModal';
import { LogInModal } from './modules/auth/LogInModal';
import { ModalAddToFavouriteWhenNotAuth } from './modules/auth/ModalAddToFavouriteWhenNotAuth';
import { useLocation } from 'react-router-dom';
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
          <Route path="/home/*" element={<Products />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/settings/*" element={<UserSettings />} />
        </Routes>
        <Routes>
          <Route
            path="/settings/orders/order-details/:orderId"
            element={<OrderDetailsModal />}
          />
          <Route
            path={slicePathname('/register')}
            element={<RegisterModal />}
          />
          <Route path={slicePathname('/login')} element={<LogInModal />} />
          <Route
            path={slicePathname('/add-to-favourite')}
            element={<ModalAddToFavouriteWhenNotAuth />}
          />
        </Routes>
        <Routes></Routes>
      </Layout>
    </div>
  );
}

export default App;
