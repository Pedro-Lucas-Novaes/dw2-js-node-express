// Objetos literais possuem Atributos e Métodos

// Objeto literl não deriva de classes

const pessoa = {};
document.write(typeof pessoa);

const carro = {
  modelo: "gol",
  cor: "vermelho",
  acelerar() {
    return "Acelerando...";
  },
  frear() {
    return "Freando...";
  },
};

// Exibindo as propriedades do objeto
document.write(`<p>O modelo do carro é ${carro.modelo}.</p>`);
document.write(`<p>A cor do carro é ${carro.cor}.</p>`);
document.write(`<p>${carro.acelerar()}</p>`);
document.write(`<p>${carro.frear()}</p>`);

const produto = {
  nome: "Computador",
  marca: "Lenovo",
  preco: 3000,
  descricao: "PC moderno com bom desempenho.",
};

document.write(`<p>O ${produto.nome} da marca ${produto.marca} custa apenas R$${produto.preco}!
        ${produto.descricao}</p>`);

// ARRAY DE OBJETOS (lista de produtos)
const listaProdutos = [
  {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho.",
  },
  {
    nome: "Tablet",
    marca: "Samsung",
    preco: 2000,
    descricao: "Ótima velocidade de processamento.",
  },
  {
    nome: "Celular",
    marca: "Apple",
    preco: 6000,
    descricao: "Ultra resistente.",
  },
];

// Exibindo o array de objetos com forEach
listaProdutos.forEach((produto) => {
  document.write(`
        Produto: ${produto.nome}<br>
        Marca: ${produto.marca}<br>
        Preço: ${produto.preco}<br>
        Descrição: ${produto.descricao}<br><br>
        `);
});
