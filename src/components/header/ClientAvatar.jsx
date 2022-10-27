import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function getUserInitials(name) {
  if (!name) {
    return '';
  }

  if (name.includes(' ')) {
    return `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`;
  }

  return `${name.split(' ')[0][0]}`;
}

export function ClientAvatar({
  clientFullName,
  style,
  bgcolor,
  styleForAvatar,
}) {
  return (
    <Stack direction="row" style={style}>
      <Avatar
        sx={{
          bgcolor: bgcolor,
          color: 'black',
        }}
        style={styleForAvatar}
      >
        {getUserInitials(clientFullName)}
      </Avatar>
    </Stack>
  );
}
