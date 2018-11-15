const MINIMUM_PASSWORD_LENGTH = 8;

const isPasswordOk = (password, repeatedPassword) => {
  if (password.length < MINIMUM_PASSWORD_LENGTH)
    return `Password should contain at least ${MINIMUM_PASSWORD_LENGTH} characters.`;

  if (password !== repeatedPassword) return 'Passwords do not match.';
  return true;
};

export default isPasswordOk;
