const regx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

export const validationEmail = (email: string) => {
  if (regx.test(email)) {
    return true;
  } else {
    return false;
  }
};

const validationPasswordLenght = (password: string) => {
  if (password.length < 5) {
    return false;
  } else {
    return true;
  }
};

const validationPasswordHasOneUpperCaseLetter = (password: string) => {
  return true;
};

export const validationPassword = (password: string) => {
  const isPasswordLenghtValid = validationPasswordLenght(password);
  const hasPasswordUpperCaseLetter =
    validationPasswordHasOneUpperCaseLetter(password);
  return isPasswordLenghtValid && hasPasswordUpperCaseLetter;
};

// bloco password
//   if (password === null || password === '') {
//     let letterUpper = false;
//     let letterLower = false;
//     let haveNumber = false;
//     let haveSpecialCharacter = false;

//     // Mínimo de 8 caracteres.
//     if (password.length < 8) {
//       listErrors.push('A senha precisa de pelo menos 8 caracteres');
//     }

//     // Pelo menos 1 caractere maiúsculo.
//     // Pelo menos 1 caractere minúsculo.
//     // Pelo menos 1 dígito.
//     for (let i = 0; i < password.length; i++) {
//       // UpperCase
//       const character = password.charAt(i);
//       if (
//         character === character.toUpperCase() &&
//         character !== character.toLowerCase()
//       )
//         letterUpper = true;

//       // LowerCase
//       if (
//         character === character.toLowerCase() &&
//         character !== character.toUpperCase()
//       )
//         letterLower = true;

//       // IsNumeric
//       if (!isNaN(parseFloat(character)) && isFinite(parseInt(character))) {
//         haveNumber = true;
//       }

//       if (!/^[a-zA-Z0-9]+$/.test(character)) {
//         haveSpecialCharacter = true;
//       }
//     }

//     if (!letterUpper)
//       listErrors.push('A senha precisa de pelo menos 1 caracter maiusculo');

//     if (!letterLower)
//       listErrors.push('A senha precisa de pelo menos 1 caracter minusculo');

//     if (!haveNumber) {
//       listErrors.push('A senha precisa de pelo menos 1 digito');
//     }

//     if (haveSpecialCharacter) {
//       listErrors.push('A senha precisa de pelo menos 1 caracter especial');
//     }
//   }
//   return listErrors;
// };
