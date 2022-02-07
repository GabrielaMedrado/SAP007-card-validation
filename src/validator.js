const validator = {
  // ...
  isValid(creditCardNumber) {

    if ((creditCardNumber == null) || (creditCardNumber.length == 0)) {
      return false;
    }
    //verifica se foi digitado somente números 
    for (let i = 0; i < creditCardNumber.length; i++) {

      if (isNaN(creditCardNumber.charAt(i)) || creditCardNumber.charAt(i) == " ") {

        return false;
      }
    }


    // algoritmo de Luhn

    const numeroEmArray = creditCardNumber.split("");//divide uma string em uma lista de substrings em um array
    const inverseCreditCardNumber = numeroEmArray.slice(0).reverse();//retorna a cópia do array e inverte a ordem com reverse 

    let sum = 0;
    for (let i = 0; i < inverseCreditCardNumber.length; i++) {
      if (((i + 1) % 2) == 0) {
        let element = inverseCreditCardNumber[i] * 2;
        if (inverseCreditCardNumber[i] < 5) {
          sum = sum + parseInt(element, 10);
        } else {
          element = element - 9;
          sum = sum + parseInt(element, 10);
        }
      } else {
        sum = sum + parseInt(inverseCreditCardNumber[i], 10);
      }
    }
    if ((sum != 0) && (sum % 10) == 0) {

      return true; //retorna a mensagem de Cartão Válido
    }

    return false; // retorna a mensagem de Cartão Inválido

  },


  maskify(creditCardNumber) {

    let ocultNumber = "";

    for (let i = 0; i < creditCardNumber.length; i++) {

      if (i < (creditCardNumber.length - 4)) {
        ocultNumber = ocultNumber + "#";
      } else {
        ocultNumber = ocultNumber + creditCardNumber.charAt(i);
      }

    }

    return ocultNumber;

  }

};

export default validator;
