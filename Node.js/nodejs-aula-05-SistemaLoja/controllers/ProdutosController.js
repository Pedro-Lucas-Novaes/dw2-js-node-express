import express from "express";
const router = express.Router();

import Cliente from "../models/Produto.js";

// ROTA PRODUTOS
router.get("/produtos", function (req, res) {
  // SELECT * FROM CLIENTES
  Cliente.findAll().then((produtos) => {
    res.render("produtos", {
      produtos: produtos,
    });
  });
});

export default router;