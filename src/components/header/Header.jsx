import { HeaderLogo } from './HeaderLogo';
import { HeaderOnLogin } from './HeaderOnLogin';
import { HeaderRegister } from './HeaderRegister';

export const Header = ({ user, toggleUserLogin }) => {
  return (
    <header>
      <div className="header">
        <HeaderLogo />
        {user ? (
          <HeaderOnLogin toggleUserLogin={toggleUserLogin} user={user} />
        ) : (
          <HeaderRegister />
        )}
      </div>
    </header>
  );
};
