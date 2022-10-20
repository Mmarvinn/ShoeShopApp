import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { NotFound } from './routes/NotFound';
import { RegisterModal } from './modules/auth/RegisterModal';
import { LogInModal } from './modules/auth/LogInModal';
import { ModalAddToFavouriteWhenNotAuth } from './modules/auth/ModalAddToFavouriteWhenNotAuth';
import { useLocation } from 'react-router-dom';
import { OneProductInfoModal } from './modules/product/OneProductInfoModal';
import { getJwtToken } from './services/localStorage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(getJwtToken());
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

  const onUserAuth = (tokenOrNull) => {
    setIsLoggedIn(tokenOrNull);
  };

  return (
    <div className="App">
      <Layout isLoggedIn={isLoggedIn} onUserAuth={onUserAuth}>
        <Routes>
          <Route path="/home/*" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Routes>
          <Route
            path={slicePathname('/register')}
            element={<RegisterModal onUserAuth={onUserAuth} />}
          />
          <Route
            path={slicePathname('/login')}
            element={<LogInModal onUserAuth={onUserAuth} />}
          />
          <Route
            path={slicePathname('/add-to-favourite')}
            element={<ModalAddToFavouriteWhenNotAuth />}
          />
          <Route
            path="/home/product/:productId"
            element={<OneProductInfoModal />}
          />
        </Routes>
        <Routes></Routes>
      </Layout>
    </div>
  );
}

export default App;
