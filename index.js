//Importação dos arquivos, "Cliente.js" e "ContaCorrente.js"
import { Client } from "./Client.js";
import { CheckingAccount } from "./CheckingAccount.js";

//Declarando um novo cliente com "nome" e "CPF"
const client1 = new Client("Gabriel", 11122233309);
const client2 = new Client("Alice", 88822233309);

//Declarando uma nova conta corrente com agencia e informações da classe "Cliente"
const account1 = new CheckingAccount(1001, client1);
const account2 = new CheckingAccount(102, client2);

//Uma desmontração das funcioes "depositar" e "tranferir"
account1.deposit(500);
account1.transfer(200, account2);

//Console.log da "conta1" e "conta2" com o numero de contas no total da aplicação
console.log(account1, account2);
console.log(CheckingAccount.numberOfAccounts);