const MAXIMUM_USERNAME_LENGTH = 20;
const MINIMUM_USERNAME_LENGTH = 3;

const isUsernameOk = username => {
  if (username.length < MINIMUM_USERNAME_LENGTH)
    return `Username should be at least ${MINIMUM_USERNAME_LENGTH} characters long.`;

  if (username.length > MAXIMUM_USERNAME_LENGTH)
    return `Username should be maximum ${MAXIMUM_USERNAME_LENGTH} characters long.`;

  return true;
};

export default isUsernameOk;
