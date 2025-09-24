import express from "express"

const router = express.Router()

// ROTA DE PERFIL
// :user -> É um parâmetro da rota (OBRIGATÓRIO)
// :user? -> É um parâmetro da rota (OPCIONAL)
router.get("/perfil/:user", (req, res) => {
  const user = req.params.user
  res.render("perfil", {
    // Enviando variáveis para a página EJS (HTML)
    user: user,
  });
});

export default router;