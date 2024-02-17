const elementoFormulario = document.querySelector(".block-nova-transacao form"); // fazendo uma tipagem para um elemente de formulario html 
elementoFormulario.addEventListener("submit", function (event) {
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
    if (tipoTransacao == TipoTransacao.DEPOSITO) {
        saldo += valor;
    }
    else if (tipoTransacao == TipoTransacao.TRANSFERENCIA || tipoTransacao == TipoTransacao.BOLETO) {
        saldo -= valor;
    }
    else {
        alert("Tipo de Transação é inválido!");
        return;
    }
    //  no codigo acima para evitar erros de digitação foi definido por enums e a regra de negocios foi aplicada nas condoções acima 
    elementoSaldo.textContent = formatarMoeda(saldo); // chamando a  função que formata a moeda
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data,
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
});
