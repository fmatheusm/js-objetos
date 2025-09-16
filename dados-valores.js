const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    media: 7.5,
    estaAprovado: function (mediaBase) {
        return this.media >= mediaBase ? true : false
    },
    arrowF: (mediaBase) => this.media >= mediaBase ? true : false
}

// código omitido

estudante.endereco = {
    rua: 'Rua Joseph Climber',
    numero: '45',
    complemento: 'apto 43'
}

console.log(estudante);

console.log(estudante.estaAprovado(7));
console.log(estudante.arrowF(6));