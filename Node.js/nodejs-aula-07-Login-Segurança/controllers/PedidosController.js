import express from "express";
import Pedido from "../models/Pedido.js";
import Cliente from "../models/Cliente.js";
const router = express.Router();

import Auth from "../middleware/Auth.js"

// ROTA PEDIDOS
router.get("/pedidos",Auth, function (req, res) {
  // Realiza ambas as consultas em paralelo de uma promessa
  Promise.all([
    Pedido.findAll({
      //fazendo o INNER JOIN com a tabela de clientes
      include: [
        {
          model: Cliente, // inclui o modelo Cliente
          required: true, // Garante que somente pedidos com clientes associados sejam retornados
        },
      ],
    }),
    Cliente.findAll(),
  ])
    .then(([pedidos, clientes]) => {
      res.render("pedidos", {
        pedidos: pedidos,
        clientes: clientes
      });
    }).catch((err) => {
      console.log(err);
    });
});

// ROTA DE CADASTRO DE PEDIDOS
router.post("/pedidos/new",Auth, (req, res) => {
  const numero = req.body.numero;
  const valor = req.body.valor;
  const cliente_id = req.body.valor.cliente_id;
  Pedido.create({
    numero: numero,
    valor: valor,
    cliente_id: cliente_id
  }).then(() => {
      res.redirect("/pedidos");
    }).catch((err) => {
      console.log(err);
    });
});

// ROTA DE EXCLUSÃO DE CLIENTES
router.get("/pedidos/delete/:id",Auth, (req, res) => {
  const id = req.params.id;
  Pedido.destroy({
    where: {id: id}
  }).then(() => {
      res.redirect("/pedidos");
    }).catch((err) => {
      console.log(err);
    });
});

export default router;