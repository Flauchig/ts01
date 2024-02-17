let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor"); //fazendo a tipagem para  um elemento HTML 
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoSaldo !== null) {
    elementoSaldo.textContent = formatarMoeda(saldo); // chamando a  função que formata a moeda
}
if (elementoDataAcesso !== null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso); // chamando a  função que formata a data 
}
