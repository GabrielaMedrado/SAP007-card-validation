const validator = {
  // ...
  isValid(creditCardNumber) {

    //verifica se foi digitado somente números 
    for (let i = 0; i < creditCardNumber.length; i++) {
      console.log(creditCardNumber.charAt(i));
      if (isNaN(creditCardNumber.charAt(i)) || creditCardNumber.charAt(i) == " ") {
        console.log("Cartão Inválido! Não é número")
        return false;
      }
    }


    // algoritmo de Luhn

    const numeroEmArray = creditCardNumber.split("");
    const inverseCreditCardNumber = numeroEmArray.slice(0).reverse();
    console.log("O número do cartão invertido " + inverseCreditCardNumber);
    let soma = 0;
    for (let i = 0; i < inverseCreditCardNumber.length; i++) {
      if (((i + 1) % 2) == 0) {
        if (inverseCreditCardNumber[i] < 5) {
          let posicaoPar = inverseCreditCardNumber[i] * 2;
          soma = soma + parseInt(posicaoPar, 10);

        } else {
          let posicaoPar = inverseCreditCardNumber[i] * 2;
          posicaoPar = posicaoPar - 9;
          soma = soma + parseInt(posicaoPar, 10);
        }

      } else {
        soma = soma + parseInt(inverseCreditCardNumber[i], 10);
      }
    }


    if ((soma % 10) == 0) {
      console.log("Cartão Válido")
      return true;

    }
    console.log("Cartão Inválido")
    return false;

  },



  maskify(creditCardNumber) {

    let cartaoMascarado = "";

    for (let i = 0; i < creditCardNumber.length; i++) {

      if (i < (creditCardNumber.length - 4)) {
        cartaoMascarado = cartaoMascarado + "#";
      } else {
        cartaoMascarado = cartaoMascarado + creditCardNumber.charAt(i);
      }

    }

    console.log("Cartão Mascarado = " + cartaoMascarado);

    return cartaoMascarado;

  }

};

export default validator;
