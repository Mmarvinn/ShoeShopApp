import { HeaderLogo } from './HeaderLogo';
import { HeaderOnLogin } from './HeaderOnLogin';
import { HeaderRegister } from './HeaderRegister';

export const Header = () => {
  return (
    <header>
      <div className="header">
        <HeaderLogo />
        <HeaderRegister />
        {/* <HeaderOnLogin /> */}
      </div>
    </header>
  );
};
