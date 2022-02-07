import validator from './validator.js';


const cardNumber = document.getElementById("cardNumber");
const botton1 = document.getElementById("button1");
const validationResult = document.getElementById("validationResult");

botton1.addEventListener("click", cardValidator);

function cardValidator() {

    const dadosInput = cardNumber.value; //variável que recebe o número digitado
    if (validator.isValid(dadosInput)) {//chamada de função do validator e passa como parâmetro os dados do cartão
        const ocultNumber = validator.maskify(dadosInput); //constante que guarda o valor do input após passar a funçao maskify
        validationResult.textContent = "Cartão Válido ";
        cardNumber.value = ocultNumber;
    } else {

        validationResult.textContent = "Cartão Inválido";
        cardNumber.value = "";
    }

}
