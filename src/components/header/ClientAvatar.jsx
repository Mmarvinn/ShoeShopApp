import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function stringAvatar(name, bgcolor) {
  const style = {
    bgcolor: bgcolor,
    color: 'black',
  };

  if (name.includes(' ')) {
    return {
      sx: style,
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  } else {
    return {
      sx: style,
      children: `${name.split(' ')[0][0]}`,
    };
  }
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
        style={styleForAvatar}
        {...stringAvatar(clientFullName, bgcolor)}
      />
    </Stack>
  );
}
