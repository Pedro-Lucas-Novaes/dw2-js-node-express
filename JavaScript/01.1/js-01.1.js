// VARIÁVEIS PODEM SER DECLARADAS DE 3 FORMAS:
// VAR, LET e CONST
// VAR: No geral evite o seu uso, pode não ser muito seguro.
// LET: Utilize quando for necessário reatribuir o valor da variável.
// CONST: Utileze quando NÃO precisar reatribuir o valor da variável.

// var nome = "Diego"
// var nome = "Maria"
// let cidade = "registro"
// let cidade = "Pariquera" // NÃO PODE
// let endereco
// endereco = "Rua tal..."
// const idade // NÃO PODE
// const idade = 18
// idade = 20 // NÃO PODE

// TIPOS DE FUNÇÕES
// FUNÇÃO SIMPLES

const message = "<h2>Olá! Bem-vindo! Essa é sua primeira função!</h2>";
function showMessage() {
  document.write(message);
}

// Invocando a função:
showMessage();

//FUNÇÃO COM PARÂMETROS
const user = "Pedro Lucas";

function userMessager(user) {
  // Essa função recebe um parâmetro
  document.write(`<h3>O que deseja fazer hoje,
        ${user} ?</h3>`);
  // ${} -> Template Strings / Literal Strings
  // É usado para inserir variáveis dentro de STRINGS (CRASE)
}
userMessager(user); // ARGUMENTO

// FUNLÇAO COM MAIS DE UM PARÂMETROS
const n1 = 10;
const n2 = 12;

function mult(n1, n2) {
  // essa função recebe dois parâmetros
  let result = n1 * n2;
  document.write(`A multiplicação de ${n1} e ${n2} é igual a ${result}`);
}
mult(n1, n2);

// FUNÇÃO COM RETORNO

const num1 = 1000;
const num2 = 5;

function div(num1, num2){
  return num1 / num2
}
document.write(`<p>A divisão de ${num1} por ${num2} é igual a ${div(num1,num2)}.</p>`)

// FUNÇÃO COM DIFERENTES RETORNOS
const number = 4;

function parImpar(number){
  if (number % 2 == 0){
    return "par";
  } else{
    return "impar";
  }
}
document.write(`<p>O número ${number} é <strong>${parImpar(number)}</strong>`)