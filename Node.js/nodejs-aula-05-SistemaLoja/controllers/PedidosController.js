import express from 'express'
const router = express.Router()

import Cliente from "../models/Pedido.js";

// ROTA PEDIDOS
router.get("/pedidos", function (req, res) {
  // SELECT * FROM CLIENTES
  Cliente.findAll().then((pedidos) => {
    res.render("pedidos", {
      pedidos: pedidos,
    });
  });
});

export default router