//Importação dos arquivos, "Client.js"
import { Client } from "./Client.js";

//Exporanto a classe para ser usada no "index.js"
export class CheckingAccount {

    static numberOfAccounts = 0; //"numberOfAccounts" e uma propriedade estatica
    branch; //"branch" sendo uma propriedade publica
    _client; //"_client" sendo uma propriedade privada
    _balance = 0; //"_balance" sendo uma propriedade privada e ja começando com o valor 0

    //essa função faz com que apenas objetos da classe "client" possa ser atribuido a essa propriedade
    set client(newValue) //"set" e um metodo para a propriedade clente, onde sempre e chamada quando tenta  atribuir algum valor para "client"
    {
        if (newValue instanceof Client) //o "if" verifica se o "newValue" e uma instanacia da classe "Client", "instanceof" retorna TRUE se o objeto da instacia da classe espesificada
        {
            this._client = newValue; //se for TRUE o valor e atribuido a propriedade "_client"
        }
    };
    
    get client() //"get" sempre vai ser chamando quando tentar acessar a propriedade client
    {
        return this.client; //o "return" e usado para fornecer o valor ao get, e o "this."e utilizado para referenciar o objeto que esta sendo executado
    };

    get balance() //"get" sempre vai ser chamando quando tentar acessar a propriedade saldo
    {
        return this._balance; //o "return" e usado para fornecer o valor ao get, e o "this."e utilizado para referenciar o objeto que esta sendo executado
    };

    constructor(branch, client) //"contructor" e utlizado parara criar um metodo para um objeto
    {
        this.branch = branch; //referenciando que "this.branch" e igual a "branch"
        this._client = client; //refenciando que "this._client" e igual a "client"
        CheckingAccount.numberOfAccounts += 1; //sempre adicionara 1 em "numberOfAccounts" sempre que esse metodo for utilizado
    };

    withdraw(value) //"withdraw" tem a propriedade "value"
    {
        if (this._balance >= value) //se "_balance" for maior ou igual a valor, entao executa o codigo abaixo 
        {
            this._balance -= value; //essa função subitraiara o "value" em "_balance"
            return value; //retorna o valor
        }
    };

    deposit(value) //"deposit" tem a propriedade "value"
    {
        if (value <= 0) //se "value" for menor ou igual a 0, entao executa o codigo abaixo encerrando a execução
        {
            return
        };

        this._balance += value; // essa função adcionara o "value" em "_balance"
    };

    transfer(value, account) //"transfer" ter a propriedade "value" e "account"
    {
        const withdrawnAmount = this.withdraw(value); //a variavel "withdrawnAmount" tem a funcinção de "withdraw" 
        account.deposit(withdrawnAmount); //"account.deposit" recebe a propriedade de "withdrawnAmount"
    };
};