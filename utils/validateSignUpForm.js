const MAXIMUM_USERNAME_LENGTH = 20;
const MINIMUM_USERNAME_LENGTH = 3;
const MINIMUM_PASSWORD_LENGTH = 8;

const isEmail = email => {
  return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(
    email
  );
};

const validateSignUpForm = (username, email, password, repeatedPassword) => {
  const errors = [];

  // Username validation
  if (username.length < MINIMUM_USERNAME_LENGTH)
    errors.push(
      `Username should be at least ${MINIMUM_USERNAME_LENGTH} characters long.`
    );

  if (username.length > MAXIMUM_USERNAME_LENGTH)
    errors.push(
      `Username should be maximum ${MAXIMUM_USERNAME_LENGTH} characters long.`
    );

  if (/[^\w\s]/gi.test(username))
    errors.push(
      `Username should not contain any special characters or whitespaces.`
    );

  // Email validation
  if (!isEmail(email))
    errors.push('This does not look like a proper e-mail address.');

  // Password validation
  if (password.length < MINIMUM_PASSWORD_LENGTH)
    errors.push(
      `Password should contain at least ${MINIMUM_PASSWORD_LENGTH} characters.`
    );

  if (password !== repeatedPassword) errors.push('Passwords do not match.');

  return errors;
};

export default validateSignUpForm;
