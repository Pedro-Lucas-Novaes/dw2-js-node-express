import express from "express"

const router = express.Router()

// ROTA DE PRODUTOS
router.get("/produtos", (req, res) => {
  // const produtos = ["Computador", "Celular", "Tablet", "Notebook"];

  // Array de objetos com os produtos
  const produtos = [
    { nome: "Celular", preco: 3000 },
    { nome: "Computador", preco: 4000 },
    { nome: "Tablet", preco: 2000 },
    { nome: "Notebook", preco: 3000 },
  ];

  res.render("produtos", {
    produtos: produtos,
  });
});

export default router;