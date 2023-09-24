class heroStats{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    
    atacar() {
        switch(this.tipo){
            case "mago":
                console.log(`O ${this.tipo} atacou usando magia`)
                break
            case "guerreiro":
                console.log(`O ${this.tipo} atacou usando espada`)
                break
            case "monge":
                console.log(`O ${this.tipo} atacou usando artes marciais`)
                break  
            case "ninja":
                console.log(`O ${this.tipo} atacou usando shuriken`)
                break
        }
        
        
        
    }
}

let heroi = new heroStats(
    prompt("Escreva o nome do herói: "),
    parseInt(prompt("Digite a idade do herói: ")),
    prompt("Escreva o tipo de herói: ")
)
heroi.atacar()