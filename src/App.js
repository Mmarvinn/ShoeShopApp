import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { NotFound } from './routes/NotFound';
import { RegisterModal } from './modules/auth/RegisterModal';
import { LogInModal } from './modules/auth/LogInModal';
import { ModalAddToFavouriteWhenNotAuth } from './modules/auth/ModalAddToFavouriteWhenNotAuth';

function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/register" element={<RegisterModal />} />
            <Route path="/login" element={<LogInModal />} />
            <Route
              path="/add-to-favourite"
              element={<ModalAddToFavouriteWhenNotAuth />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
