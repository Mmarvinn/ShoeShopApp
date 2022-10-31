import verticalLine from '../../images/vertical-line.svg';
import { OpenAuthModal } from '../../modules/auth/OpenAuthModal';
import { HeaderIcons } from './HeaderIcons';

export const HeaderRegister = () => {
  return (
    <div className="header--register-wrapper">
      <HeaderIcons />
      <div className="header--register">
        <OpenAuthModal buttonName="SIGN IN" pathname="/home/register" />
        <img
          className="header--vertical-line"
          src={verticalLine}
          alt="only orange line"
        />
        <OpenAuthModal buttonName="LOG IN" pathname="/home/login" />
      </div>
    </div>
  );
};
