// let valor: number = 3000; // define um tipo number
// let nome:string = "Rafael";// define um tipo string 
// let data: Date = new Date(); // define uma datas com o new
// let transacao: boolean = true;// define um tipo booleano de true or false

// let qualquerCoisa: any = "";// o any pode ser qualquer tipo  declarado acima

// // o type any desativa a checagem de tipos do typescript


// // arrays 
// const lista = []; // quando não se é definido um tipo de array o typescript define o tipo como any, pode ser uma lista de qualquer coisa 

// lista.push("Rafael", 24, true);  // ou seja ele aceita qualque coisa na lista


// const lista1:number[] = []; // ou seja ele aceita apenas numero no array

// lista1.push(25);

// // alem de type any e type number ele tambem aceita os outros tipos de dados  por exemplo, string


// // tipos personalizados (type alias)

// // com  este tipo podemos definir tipos para um variável 

// type transacao = {
//     tipoTransacao: tipoTransacao,
//     valor: number,
//     data: Date


// }// aqui estamos definindo o tipo de cada objeto 


// // enums são usados para definir valores numéricos ou baseados em strings criando um conjunto de valor fixos

// enum tipoTransacao {

//     deposito = "Depósito",
//     transferencia = "Transferência",
//     boleto = "Pagamento de Boleto"
// }





// const novaTransacao: transacao = {
//     tipoTransacao: tipoTransacao.deposito,// aqui esta sendo usada a chamada dos enums
//     valor: 3000,
//     data: new Date()
// }
// // e aqui estamos aplicando o type alias para o objeto












