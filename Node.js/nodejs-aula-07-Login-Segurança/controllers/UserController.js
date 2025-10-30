import express from "express";
const router = express.Router();
import User from "../models/User.js";

//importando o bcrypt (usado para gerar hash da senha)
import bcrypt from "bcrypt";
import { where } from "sequelize";

// ROTA de login
router.get("/login", (req, res) => {
  res.render("login", {
    hasNoSession: true,
  });
});

// ROTA de cadastro
router.get("/cadastro", (req, res) => {
  res.render("cadastro", {
    hasNoSession: true,
  });
});

// ROTA de criação de usuario
router.post("/createUser", (req, res) => {
  // Coletando os dados do formulario
  const email = req.body.email;
  const password = req.body.password;

  //verificar se o usuario ja existe no banco
  User.findOne({ where: { email: email } }).then((user) => {
    //se o usuario não existir, criar o usuario
    if (user == undefined) {
      //Gerando o hash da senha
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
        .catch((err) => {
          console.log(err);
        });
    } else {
      //se o usuario ja existir
      res.send(
        'O usuario ja esta cadastrado! <br><a href="/login">Tentar Novamente</a>'
      );
    }
  });
});

// ROTA de autenticação
router.post("/authenticate", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  //Busca o usuario no banco
  User.findOne({ where: {email:email}}).then(user => {
    //se o usuario existir
    if (user != undefined){
      //valida a senha
      const correct = bcrypt.compareSync(password, user.password)
      //se a senha for valida
      if (correct){
        // Autoriza o login
        // gerando a sessão para o usuario
        req.session.user = {
          id: user.id,
          email: user.email
        }
        // res.send(`Usuário logado é: <br>
        //   ID: ${req.session.user["id"]}<br>
        //   EMAIL: ${req.session.user["email"]}<br>
        //   <a href="/login">Voltar para login</a>`);
        res.redirect("/")
      } else{
        // se a senha for invalida
        res.send('A senha está invalida! <br> <a href="/login">Tentar Novamente</a>')
      }
    //se o usuario não existir
    } else {
      res.send('O usuario informado não existe! <br> <a href="/login">Tentar Novamente</a>')
    }
  })
})

router.get("/logout", (req,res) =>{
  req.session.user = undefined
  res.redirect("/login")
})

export default router;