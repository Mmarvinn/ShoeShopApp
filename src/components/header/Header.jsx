import { HeaderLogo } from './HeaderLogo';
import { HeaderOnLogin } from './HeaderOnLogin';
import { HeaderRegister } from './HeaderRegister';

export const Header = ({ isLoggedIn, onUserAuth }) => {
  return (
    <header>
      <div className="header">
        <HeaderLogo />
        {isLoggedIn ? (
          <HeaderOnLogin onUserAuth={onUserAuth} />
        ) : (
          <HeaderRegister />
        )}
      </div>
    </header>
  );
};
