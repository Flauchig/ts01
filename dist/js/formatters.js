function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    // definindo formatação de moeda para pt-BR
}
function formatarData(data, formato = FormatoData.PADRAO) {
    // lembranado que o  FormatoData e um enum com typescript que  esta em outro arquivo
    if (formato == FormatoData.DIA_SEMANA_DIA_MES_ANO) {
        return data.toLocaleDateString('pt-BR', { day: 'numeric', month: 'numeric' });
    }
    else if (formato == FormatoData.DIA_MES) {
        return data.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
    }
    return data.toLocaleDateString("pt-br");
}
