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

export const HeaderOnLogin = ({ toggleUserLogin, user }) => {
  console.log(user);
  const userName = getUserName(user);

  return (
    <div className="header-on-login">
      <HeaderIcons />
      <div className="header-on-login--client">
        <p>Welcome, {userName}</p>
        <ClientAvatar clientFullName={user.fullName} />
        <HeaderMenu
          toggleUserLogin={toggleUserLogin}
          userFullName={user.fullName}
          userEmail={user.email}
        />
      </div>
    </div>
  );
};
