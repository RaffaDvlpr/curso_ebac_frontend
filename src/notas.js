class Aluno {
    constructor(nome, nota){
        this.nome = nome
        this.nota = nota
    }
}

const aluno1 = new Aluno('Rogério', 8)
const aluno2 = new Aluno('Lucas', 4)
const aluno3 = new Aluno('Henrique', 8)
const aluno4 = new Aluno('Andrée', 5)
const aluno5 = new Aluno('Fernando', 6)

const notas = [aluno1, aluno2, aluno3, aluno4, aluno5]

const alunoAprovado = notas.filter(function(aluno){
    return aluno.nota >= 6
})

console.log(alunoAprovado)