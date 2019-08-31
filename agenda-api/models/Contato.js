class Contato {

    constructor(nome, telefone) {
        this._contato= `${new Date().getMilliseconds()}`; 
        this.nome = nome;
        this.telefone = telefone;    
        this.email = "";      
        this.idade = " "; 
    }
}
module.exports = Contato;