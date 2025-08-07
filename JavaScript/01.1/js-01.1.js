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

function userMessager(user){
    // Essa função recebe um parâmetro
    document.write(`<h3>O que deseja fazer hoje,
        ${user} ?</h3>`);
        // ${} -> Template Strings / Literal Strings
        // É usado para inserir variáveis dentro de STRINGS (CRASE)
}
userMessager(user); // ARGUMENTO
