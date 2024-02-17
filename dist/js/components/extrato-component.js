import conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData";
import { formatarData, formatarMoeda } from "../utils/formatters.js";
const elementoRegistroTransacaoExtrato = document.querySelector(".extrato.registro-transacoes"); // aq estou buscando o elemento html da tela que esta vinculada ao extrato 
renderizarExtrato(); // chamando a função que renderiza o extrato
function renderizarExtrato() {
    const gruposTransacoes = conta.getGrupoTransacaos(); // armazenando os grupos de transaçoes em array que mostra os grupos de transaçoes
    elementoRegistroTransacaoExtrato.innerHTML = ""; // aqui estou limpando o elemento html
    let htmlRegistroTransacoes = " ";
    for (let grupoTransacao of gruposTransacoes) {
        let htmlTransacaoItem = "";
        for (let transacao of grupoTransacao.transacoes) {
            htmlTransacaoItem += `
                    <div class="transacao-item">

                            <div class="transacao-info">
                                <span class="tipo">${transacao.tipoTransacao}</span>
                                <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
                            </div>

                            <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
                    </div>
                `;
        }
        htmlRegistroTransacoes += `
        <div class="transacoes-group">
            <strong class="mes-group">${grupoTransacao.label}</strong>
            ${htmlTransacaoItem}
        </div>
    `;
    }
    if (htmlRegistroTransacoes === "") {
        htmlRegistroTransacoes = "<div>Não há transações registradas.</div>";
    }
    elementoRegistroTransacaoExtrato.innerHTML = htmlRegistroTransacoes;
}
