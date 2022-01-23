const validator = {
  // ...
  isValid(creditCardNumber) {

    //verifica se foi digitado somente números 
    for (var i = 0; i < creditCardNumber.length; i++) {
      console.log(creditCardNumber.charAt(i));
      if (isNaN(creditCardNumber.charAt(i)) || creditCardNumber.charAt(i) == " ") {
        console.log("Cartão Inválido!")
        return "Cartão Inválido";
      }
    }

    // algoritmo de Luhn
    for (var i = 0;  )





  },
  maskify(creditCardNumber) {

  }

};

export default validator;
