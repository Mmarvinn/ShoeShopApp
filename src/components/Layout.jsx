import { Header } from './header/Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};
