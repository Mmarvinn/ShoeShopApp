export const validatePassword = (value) => {
  const regEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  return !regEx.test(value);
};

export const validateFullName = (values) => {
  const regEx = /^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,1}$/;
  return !regEx.test(values.fullName);
};

export const validateEmail = (values) => {
  if (values.email === '' || values.email === ' ' || values.email.length < 3) {
    return true;
  } else {
    return false;
  }
};

export const validatePhone = (values) => {
  const regEx = /^(\+)?([0-9]){10,14}$/;
  return !regEx.test(values.phone);
};

export const validateInputLessThanThree = (value) => {
  if (value.length < 3) {
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

export const validateUserMainInfoInputs = (values) => {
  if (values.email === '' || values.fullName === '' || values.phone === '') {
    return false;
  } else {
    return true;
  }
};
