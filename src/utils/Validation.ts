const regxValidationEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
const regxValidationPassword =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$_%^&*-]).{8,}$/;
const regexValidationHasNumberCaracterSpecial =
  /^[a-zA-Z0-9!\-\.\_\@\)\(+=._-]+$/;

export const validationEmail = (email: string) => {
  const hasSymbolNameReceptorNumber =
    validationEmailHaveSymbolNameReceptorNumber(email);
  const hasNumberAndSpecial = validationEmailHasNumbersSpecialCaracter(email);
  return hasSymbolNameReceptorNumber && hasNumberAndSpecial;
};

const validationEmailHaveSymbolNameReceptorNumber = (email: string) => {
  if (regxValidationEmail.test(email)) {
    return true;
  } else {
    return false;
  }
};

const validationEmailHasNumbersSpecialCaracter = (password: string) => {
  if (regexValidationHasNumberCaracterSpecial.test(password)) {
    return true;
  } else {
    return false;
  }
};

export const validationPassword = (password: string) => {
  const isPasswordLengthValid = validationPasswordLength(password);
  const hasPasswordUpperLowerOneLetterSpecial =
    validationPasswordHasUpperLowerOneLetterSpecial(password);
  console.log(isPasswordLengthValid && hasPasswordUpperLowerOneLetterSpecial);
  return isPasswordLengthValid && hasPasswordUpperLowerOneLetterSpecial;
};

const validationPasswordLength = (password: string) => {
  if (password.length >= 8) {
    return true;
  } else {
    return false;
  }
};

const validationPasswordHasUpperLowerOneLetterSpecial = (password: string) => {
  if (regxValidationPassword.test(password)) {
    return true;
  } else {
    return false;
  }
};
