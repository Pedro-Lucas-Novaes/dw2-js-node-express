// Importando o Express (framework)
// const express = require("express"); -> CommonJS Modules
import express from "express" // ES6 Modules
// Iniciando o Express na variável "app"
const app = express();

// Importando os Controllers (onde estão as rotas e onde é tratado as requisições)
import ClientesController from "./controllers/ClientesController.js"
import PedidosController from "./controllers/PedidosController.js"
import ProdutosController from "./controllers/ProdutosController.js"
import PerfilsController from "./controllers/PerfilsController.js"

// CONFIGURANDO O EJS
app.set("view engine", "ejs");
// Definindo a pasta PUBLIC para arquivos estáticos
app.use(express.static("public"));

// DEFININDO O USO DAS ROTAS QUE ESTÃO NOS CONTROLLERS
app.use("/",ClientesController)
app.use("/",PedidosController)
app.use("/",ProdutosController)
app.use("/",PerfilsController)

// Criando a primeira rota do site (ROTA PRINCIPAL)
// REQ = Trata a REQUISIÇÃO / RES = Trata a RESPOSTA
app.get("/", (req, res) => {
  res.render("index");
});




// Iniciando o servidor HTTP
// O servidor escutará na porta 8080
const port = 8080;

app.listen(port, (error) => {
  if (error) {
    console.log(
      `Não foi possível iniciar o servidor. Ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
