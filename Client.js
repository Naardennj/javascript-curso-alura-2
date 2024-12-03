//Exporanto a classe para ser usada no "index.js" e no "ContaCorrente.js"
export class Client {
    name; //propriedade que armazena "name";
    _cpf; //propriedade privada que armazena "cpf";

    get cpf() //"get" sempre vai ser chamando quando tentar acessar a propriedade CPF
    {
        return this._cpf; //o "return" e usado para fornecer o valor ao get, e o "this."e utilizado para referenciar o objeto que esta sendo executado
    };

    constructor(name, cpf) //"contructor" e utlizado parara criar um metodo para um objeto
    {
        this.name = name; //referenciando que "this.name" e igual a "name"
        this._cpf = cpf; //referenciando que "this._cpf" e igual a "cpf"
    };
};