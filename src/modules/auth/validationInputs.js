export const validatePassword = (values) => {
  const special = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  return !special.test(values.password);
};

export const validateFullName = (values) => {
  if (
    values.fullName === '' ||
    values.fullName === ' ' ||
    values.fullName.length < 3
  ) {
    return true;
  } else {
    return false;
  }
};

export const validateEmail = (values) => {
  if (values.email === '' || values.email === ' ' || values.email.length < 3) {
    return true;
  } else {
    return false;
  }
};

export const validatePhone = (values) => {
  if (values.phone === '' || values.phone === ' ' || values.phone.length < 8) {
    return true;
  } else {
    return false;
  }
};

export const validateRegisterInputs = (values) => {
  if (
    values.email === '' ||
    values.fullName === '' ||
    values.phone === '' ||
    values.password === ''
  ) {
    return false;
  } else {
    return true;
  }
};

export const validateLoginInputs = (values) => {
  if (values.email === '' || values.password === '') {
    return false;
  } else {
    return true;
  }
};
