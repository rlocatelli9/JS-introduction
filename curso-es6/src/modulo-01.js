
// Exercício 1
class Usuario {

  constructor(email, senha) {
    this.email = email
    this.senha = senha
    this.admin = false
  }

  isAdmin() {
    return this.admin
  }

  Date() {
    return { email: this.email, senha: this.senha }
  }

}

class Admin extends Usuario {

  constructor() {
    super()
    this.admin = true
  }

}

const user = new Usuario('robson.loca@mail.com', 'senha223')
const admin1 = new Admin('admin@teste.com', 'senha123');

console.log(user.isAdmin());
console.log(admin1.isAdmin());
console.log(user.Date());


// Exercio 2

const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idade = usuarios.map(item => item.idade)
console.log(idade);

const rocket = usuarios.filter(item => item.empresa === 'Rocketseat' && item.idade > 18)
console.log(rocket);

const find = usuarios.find(item => item.empresa === 'Google')
console.log(find);

usuarios.map(item => item.idade *= 2);
const users = usuarios.filter(item => item.idade <= 50)
console.log(users);

// Exercício 3

// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);


// 3.4
const promise = () => {
  new Promise((resolve, reject) => {
    resolve();
  })
}

// Exercício 4
const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  }
};

const { nome, endereco: { cidade }, endereco: { estado } } = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

function mostraInfo({ nome, idade }) {
  console.log(`${nome} tem ${idade} anos.`);
}
mostraInfo({ nome: 'Diego', idade: 23 })

//Exercício 5 

const [x, ...y] = arr;
console.log(x);
console.log(y);

function soma(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 3));
console.log(soma(4, 5, 8, 7));

const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};

const usuario2 = { ...usuario, nome: 'Gabriel' }
const usuario3 = { ...usuario, cidade: 'Lontras' }
console.log(usuario);
console.log(usuario2);
console.log(usuario3);

//Exercício 6
const usuarioo = 'Diego';
const idadee = 23;
console.log(`O usuário ${usuarioo} possui ${idadee} anos.`);

//Exercício 7
const nomes = 'Diego';
const idades = 23;
const usuario4 = {
  nomes,
  idades,
  cidade: 'Rio do Sul',
};
console.log(usuario4);


