import validator from './validator.js';

console.log(validator);

const cardNumber = document.getElementById("cardNumber");
const botao1 = document.getElementById("botao1");
const validationResult = document.getElementById("validationResult");

botao1.addEventListener("click", validarCartao);

function validarCartao() {

    const dadosInput = cardNumber.value; //variável que recebe o número digitado
    if (validator.isValid(dadosInput)) {//chamada de função do validator e passa como parâmetro os dados do cartão
        console.log("Dados ok!")
        const cartaoMascarado = validator.maskify(dadosInput); //constante que guarda o valor do input após passar a funçao maskify
        validationResult.textContent = "Cartão Válido ";
        cardNumber.value = cartaoMascarado;
    } else {
        console.log("Dados incorretos!")
        validationResult.textContent = "Cartão Inválido";
        cardNumber.value = "";
    }
    console.log("Passou aqui" + dadosInput);




}
