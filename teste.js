const novoAluno = {
    "titulo": "Node.js: Guia Prático",
    "autor": "Alice Coder",
    "genero": "Tecnologia",
    "ano_publicacao": 2022
};

const biblioteca = require("./estudantes.json");
biblioteca.push(novoAluno);

const bibliotecaString = JSON.parse(JSON.stringify(biblioteca));

console.log(typeof (bibliotecaString))
console.log(bibliotecaString)