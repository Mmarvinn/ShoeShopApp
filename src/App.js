import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

import { PrivateRoute } from './HOKs/PrivateRoute';
import { Layout } from './components/Layout';
import { Products } from './components/Products';
import { NotFound } from './routes/NotFound';
import { RegisterModal } from './modules/auth/RegisterModal';
import { LogInModal } from './modules/auth/LogInModal';
import { ModalAddToFavouriteWhenNotAuth } from './modules/auth/ModalAddToFavouriteWhenNotAuth';
import { useUserLogin } from './modules/auth/hooks/useUserLogin';
import { UserSettings } from './modules/user/UserSettings';
import { Cart } from './modules/cart/Cart';

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
          <Route
            path="/settings/*"
            element={
              <PrivateRoute>
                <UserSettings />
              </PrivateRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
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
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
