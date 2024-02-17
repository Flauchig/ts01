
import { FormatoData } from "../types/FormatoData.js";
import { TipoTransacao } from "../types/TipoTransacao.js";


export type Transacao = {
    tipoTransacao: TipoTransacao;
    valor: number;
    data: Date;
}

 export function formatarMoeda(valor: number): string {  // aqui no caso ele tem que receber um valor numerico e voltar uma string que é valor formatado em moeda 

    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    // definindo formatação de moeda para pt-BR


}
export function formatarData(data: Date, formato: FormatoData = FormatoData.PADRAO): string { // aqui no caso ele tem que receber uma data e retornar uma string que é a data formatada

    // lembranado que o  FormatoData e um enum com typescript que  esta em outro arquivo
    if (formato == FormatoData.DIA_SEMANA_DIA_MES_ANO) {
        return data.toLocaleDateString('pt-BR', { day: 'numeric', month: 'numeric' });
    }
    else if (formato == FormatoData.DIA_MES) {
        
        return data.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
    }

    return data.toLocaleDateString("pt-br"); 

}