
import { transacao } from "./Transacao.js";
import { TipoTransacao } from "./TipoTransacao.js";
import { GrupoTransacao } from "./GrupoTransacao.js";

let saldo = JSON.parse(localStorage.getItem("saldo "))|| 0;

const transacoes: transacao[]=   JSON.parse(localStorage.getItem('transacoes'), (key: string, value: string) => (key === 'data' ? new Date(value) : value)) || [];
// aqui eu estou pegando as transaoçoes que fiz colocando elas em texto  com JSON  e mandando para um localstorage do  navegador  e caso não tenha nada ela vai iniciar um array vazio  

// e foi criando uma condição para fazer o tratamento  pois tem um item do tipo data  para trabsformar em strig

function debitar(valor: number): void {
    if (valor < 0) {

        throw new Error("Valor inválido");
    }

    if (valor > saldo) {

        throw new Error("Saldo insuficiente");
    }


    saldo -= valor;
    localStorage.setItem('saldo', saldo.toString());

}


function depositar(valor: number): void {

    if (valor < 0) {
        throw new Error(" O valor precisa ser maior que zero ");
    }
    saldo += valor;
    localStorage.setItem('saldo', saldo.toString());
}




const conta = {

    getSaldo() {
        return saldo;
    },

    getDataAcesso(): Date {
        return new Date();
    },

    getGrupoTransacaos(): GrupoTransacao[] {

         const gruposTransacoes : GrupoTransacao[] = [];
         const listaTransacoes : transacao[] =  structuredClone(transacoes); 
         // esta função structuredClone serve para fazer uma copia da aplicação para que evite possiveus alterações indevidas ou invações que alterem os dados originais, esta função é uma função global nova do javascript 
        
         const transacoesOrdenadas: transacao[]= listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime()); // aqui estou faznedo uma odenação das transaçoes descrescente 

         let labelAtualGrupoTransacao:string = "";  // aqui é um string que representa o nome do grupo 


         for (let transacao of transacoesOrdenadas) {

            // aqui foi criado um for para percorrer a transação ordenada

            let labelGrupoTransacao: string = transacao.data.toLocaleDateString('pt-br', {month:"long", year:"numeric"});

            // assim ele vai pegar a data da transação e vai me mostrar o mes e o ano dela 

            if(labelAtualGrupoTransacao != labelGrupoTransacao){

                labelAtualGrupoTransacao = labelGrupoTransacao;

                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: []
                });

         // aqui eu estytou pegando o nome do grupo e vendo se ele ja exitste, caso ele exista ele vai incluir no grupo por exelo se ja tiver um grupo de fevereiro de 2024 ele vai incluir no grupo 
         // se n possuir  grupos ele vai criar um grupo novo  

        

         }

         gruposTransacoes.at(-1).transacoes.push(transacao);  // aqui ele vai no ultimo grupo da lista e adiciona ela  ou seja, ele vai em cada ultimo grupo criado e faz a adição dele

        }

        return gruposTransacoes;
    },

    registrarTransacao(novaTransacao: transacao): void {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
           depositar(novaTransacao.valor);
        }
        else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.BOLETO) {
           debitar(novaTransacao.valor);
        }
        else {
            throw new Error("Tipo de Transação é inválido!"); // foi trocado o alert para uma  chamada de erro 

        }
        
        transacoes.push(novaTransacao);
        // aqui estou buscando as novas transações 
        console.log(this.getGrupoTransacaos());
        localStorage.setItem('transacoes', JSON.stringify(transacoes));
        // aqui eu vou salvar as novas transaçoes  e transformar para texto e colocar no localstorage no caso estou setando os items 

    }
}



export default conta;


// este modulo faz o controle de cada transação do sistema  
