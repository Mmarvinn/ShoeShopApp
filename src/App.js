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
import { UserSettingsPage } from './components/UserSettingsPage';
import { useUserLogin } from './modules/auth/hooks/useUserLogin';

function App() {
  const [user, setUser] = useUserLogin();
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

  const toggleUserLogin = (userOrNull) => {
    setUser(userOrNull);
  };

  return (
    <div className="App">
      <Layout user={user} toggleUserLogin={toggleUserLogin}>
        <Routes>
          <Route path="/home/*" element={<HomePage />} />
          <Route path="/settings" element={<UserSettingsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Routes>
          <Route
            path={slicePathname('/register')}
            element={<RegisterModal toggleUserLogin={toggleUserLogin} />}
          />
          <Route
            path={slicePathname('/login')}
            element={<LogInModal toggleUserLogin={toggleUserLogin} />}
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
