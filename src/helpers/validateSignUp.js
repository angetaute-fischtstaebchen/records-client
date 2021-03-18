const validatePasswordsEquality = (password, repeatedPassword) =>
  password === repeatedPassword;

const checkPassword = (password) => {
  // at least one number, one lowercase and one uppercase letter
  // at least six characters
  const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  return re.test(password);
};

export const validateSingUp = ({ password, repeatedPassword }) => {
  if (!checkPassword(password)) return 'passwordStrength';
  if (!validatePasswordsEquality(password, repeatedPassword))
    return 'passwordEquality';

  return false;
};
