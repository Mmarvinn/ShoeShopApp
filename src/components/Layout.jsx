import { Header } from './header/Header';
import { Footer } from './Footer';

export const Layout = ({ children, user, toggleUserLogin }) => {
  return (
    <>
      <Header user={user} toggleUserLogin={toggleUserLogin} />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};
