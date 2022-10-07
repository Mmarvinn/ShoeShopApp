import verticalLine from '../../images/vertical-line.svg';
import { OpenAuthModal } from '../../modules/auth/OpenAuthModal';
import { HeaderIcons } from './HeaderIcons';

export const HeaderRegister = () => {
  return (
    <div className="header--register-wrapper">
      <HeaderIcons />
      <div className="header--register">
        <OpenAuthModal buttonName="SIGN IN" pathname="/register" />
        <img src={verticalLine} />
        <OpenAuthModal buttonName="LOG IN" pathname="/login" />
      </div>
    </div>
  );
};
