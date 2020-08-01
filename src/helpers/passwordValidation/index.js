const passwordValidation = (password) => {
  if (password && password.length) {
    return password.length < 8;
  }

  return password !== undefined;
};

export default passwordValidation;
