import express from "express"

const router = express.Router()

// ROTA DE PEDIDOS
router.get("/pedidos", (req, res) => {
  const pedidos = [
    { numero: "1", produto: "abacaxi", valorDoPedido: "9,5" },
    { numero: "2", produto: "melão", valorDoPedido: "11,77" },
    { numero: "3", produto: "toranja", valorDoPedido: "37,98" },
    { numero: "4", produto: "laranja", valorDoPedido: "22,99" },
  ];
  res.render("pedidos", {
    pedidos: pedidos,
  });
});

export default router;