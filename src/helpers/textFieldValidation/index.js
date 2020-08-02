const textFieldValidation = (text) => {
  if (text && text.length) {
    return false;
  }

  return text !== undefined;
};

export default textFieldValidation;
