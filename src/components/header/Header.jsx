import { useSelector } from 'react-redux';

import { HeaderLogo } from './HeaderLogo';
import { HeaderOnLogin } from './HeaderOnLogin';
import { HeaderRegister } from './HeaderRegister';

export const Header = () => {
  const user = useSelector((state) => state.user.data);

  return (
    <header>
      <div className="header">
        <HeaderLogo />
        {user ? <HeaderOnLogin /> : <HeaderRegister />}
      </div>
    </header>
  );
};
