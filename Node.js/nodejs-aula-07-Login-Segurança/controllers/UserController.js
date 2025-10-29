import express from "express";
const router = express.Router();
import User from "../models/User.js";

import bcrypt from "bcrypt";

// ROTA de login
router.get("/login", (req, res) => {
  res.render("login");
});

// ROTA de cadastro
router.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

// ROTA de criação de usuario
router.post("/createUser", (req, res) => {
  // Coletando os dados do formulario
  const email = req.body.email;
  const password = req.body.password;

  // Verificando se o usuário está cadastrado no banco
  User.findOne({ where: { email: email } }).then((user) => {
    if (user == undefined) {
      // FARA O CADASTRO
      // Gerando o hash de senha
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      //Enviando os dados para o banco de dados
      User.create({
        email: email,
        password: hash,
      })
        .then(() => {
          res.redirect("/login");
        })
        .catch((error) => {
          console.log(error);
        });
      // SE o usuario JÁ EXISTIR
    } else {
      res.send(`o usário informado já está cadastrado! <br>
            <a href="/login">Tentar novamente.<a/>`);
    }
  });
});

// ROTA DE AUTENTICAÇÃO
router.post("/authenticate", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // BUSCA O USUÁRIO NO BANCO
  User.findOne({ where: { email: email } }).then((user) => {
    //SE O USUARIO EXISTIR
    if (user != undefined) {
      // VALIDA A SENHA
      const correct = bcrypt.compareSync(password, user.password);
      // SE A SENHA FOR VÁLIDA
      if (correct) {
        // AUTORIZA O LOGIN
        // GERANDO A SESSÃO PARA O USUÁRIO
        req.session.user = {
          id: user.id,
          email: user.email
        }
        // res.send(`Usuário logado é: <br>
        //   ID: ${req.session.user["id"]}<br>
        //   E-mail: ${req.session.user["email"]}`)

          res.redirect("/");
        // SE A SENHA NÃO FOR VÁLIDA
      } else {
        res.send(`A senha digitada está incorreta! <br>
          <a href="/login">Tentar novamente</a>`)
      }
      // SE O USUÁRIO NÃO EXISTIR
    } else {
      res.send(`usuário informado não existe! <br>
        <a href="/login">Tentar novamente</a>`)
    }
  });
});

// ROTA DE LOGOUT
router.get("/logout", (req, res) => {
  req.session.user = undefined
  res.redirect("/")
})

export default router;
