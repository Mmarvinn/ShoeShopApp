import { useSelector } from 'react-redux';

import { ClientAvatar } from './ClientAvatar';
import { HeaderIcons } from './HeaderIcons';
import { HeaderMenu } from './HeaderMenu';

const getUserName = (user) => {
  if (!user) return '';
  let userName = '';

  if (user.fullName.includes(' ')) {
    userName = user.fullName.slice(0, user.fullName.indexOf(' '));
  } else {
    userName = user.fullName;
  }
  return userName;
};

const styleOnClientAvatar = {
  marginLeft: '15px',
  border: '2px solid',
  borderColor: 'var(--orange-main)',
  borderRadius: '50%',
};

export const HeaderOnLogin = () => {
  const user = useSelector((state) => state.user.data);
  const userName = getUserName(user);

  return (
    <div className="header-on-login">
      <HeaderIcons />
      <div className="header-on-login--client">
        <p>Welcome, {userName}</p>
        <ClientAvatar
          clientFullName={user.fullName}
          style={styleOnClientAvatar}
          bgcolor="white"
        />
        <HeaderMenu userFullName={user.fullName} userEmail={user.email} />
      </div>
    </div>
  );
};
