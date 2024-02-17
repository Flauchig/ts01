
import { formatarData, formatarMoeda } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";
import conta from "../types/Conta.js";

//trecho omitido



const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement; //fazendo a tipagem para  um elemento HTML 

const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;




if (elementoDataAcesso !== null) {

        const dataAcesso : Date = new Date(); 
        
        elementoDataAcesso.textContent = formatarData(conta.getDataAcesso()); // chamando a  função que formata a data 

 
}


renderizarSaldo();
//  função que busca o saldo  e atualiza ele 

export function renderizarSaldo():void  {


if (elementoSaldo !== null) {
  elementoSaldo.textContent = formatarMoeda(conta.getSaldo())


}

// aq acima estamos criando funçoes para pegar o saldo e atulizar ele 

}
const  SaldoComponent  ={

        atualizar(){

            renderizarSaldo();

        }

}


export default SaldoComponent;