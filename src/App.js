import './App.css';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';

import { PrivateRoute } from './HOKs/PrivateRoute';
import { RedirectRoute } from './HOKs/RedirectRoute';
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
    return location.pathname + lastPath;
  };

  useUserLogin();

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="/home/*" element={<Products />} />
          <Route
            path="/settings/*"
            element={
              <PrivateRoute>
                <UserSettings />
              </PrivateRoute>
            }
          />
          <Route path="/cart/*" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Routes>
          <Route
            path={slicePathname('/register')}
            element={
              <RedirectRoute>
                <RegisterModal />
              </RedirectRoute>
            }
          />
          <Route
            path={slicePathname('/login')}
            element={
              <RedirectRoute>
                <LogInModal />
              </RedirectRoute>
            }
          />
          <Route
            path={slicePathname('/add-to-favourite')}
            element={
              <RedirectRoute>
                <ModalAddToFavouriteWhenNotAuth />
              </RedirectRoute>
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
