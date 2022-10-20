import { Header } from './header/Header';
import { Footer } from './Footer';

export const Layout = ({ children, isLoggedIn, onUserAuth }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} onUserAuth={onUserAuth} />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};
