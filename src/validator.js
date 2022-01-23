const validator = {
  // ...
  isValid(creditCardNumber) {

    //verifica se foi digitado somente números 
    for (var i = 0; i < creditCardNumber.length; i++) {
      console.log("index:" + i + " - " + creditCardNumber.charAt(i));
      if (isNaN(creditCardNumber.charAt(i)) || creditCardNumber.charAt(i) == " ") {
        console.log("Cartão Inválido!")
        return "Cartão Inválido";
      }
    }

    // algoritmo de Luhn
    var soma = 0;
    for (var i = 0; i < creditCardNumber.length; i++) {
      if ((i % 2) == 0) {
        if (creditCardNumber.charAt(i) < 5) {
          var posicaoPar = creditCardNumber.charAt(i) * 2;
          soma = soma + parseInt(posicaoPar, 10);

        } else {
          var posicaoPar = creditCardNumber.charAt(i) * 2;
          posicaoPar = posicaoPar - 10;
          soma = soma + 1 + parseInt(posicaoPar, 10);
        }

      } else {
        soma = soma + parseInt(creditCardNumber.charAt(i), 10);
      }
    }

    console.log('A soma dos números é ' + soma);

    if ((soma % 10) == 0) {
      console.log("Cartão Válido")
      return "Cartão Válido";
    }
    console.log("Cartão Inválido")
    return "Cartão Inválido";
  },

  maskify(creditCardNumber) {

    var cartaoMascarado = "";

    for (var i = 0; i < creditCardNumber.length; i++) {
      //cartaoMascarado = cartaoMascarado + creditCardNumber.charAt(i);
      if (i < (creditCardNumber.length - 4)) {
        cartaoMascarado = cartaoMascarado + "X";
      } else {
        cartaoMascarado = cartaoMascarado + creditCardNumber.charAt(i);
      }

    }

    console.log("Cartão Mascarado = " + cartaoMascarado);

  }

};

export default validator;
