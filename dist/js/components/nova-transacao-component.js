import conta from "../types/Conta.js";
import SaldoComponent from "./saldo-component.js";
//trecho omitido
const elementoFormulario = document.querySelector(".block-nova-transacao form"); // fazendo uma tipagem para um elemente de formulario html 
elementoFormulario.addEventListener("submit", function (event) {
    try {
        event.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert("Por favor, preencha todos os campos da transação!");
            return;
        }
        const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao"); // fazendo tipagem de um tipo select
        const inputValor = elementoFormulario.querySelector("#valor"); // tipagem de um input
        const inputData = elementoFormulario.querySelector("#data");
        let tipoTransacao = inputTipoTransacao.value; // aqui estamo definindo uma enum com typescript que  esta em outro arquivo 
        let valor = inputValor.valueAsNumber; // definindo que é um numero com typescript 
        let data = new Date(inputData.value); // definindo  que é uma data com typescript
        //  lembrando que devemos seguir as regras do typescript!!!
        //  no codigo acima para evitar erros de digitação foi definido por enums e a regra de negocios foi aplicada nas condoções acima 
        const novaTransacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data,
        };
        conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        elementoFormulario.reset();
    }
    catch (error) {
        alert(error.message);
    }
});
