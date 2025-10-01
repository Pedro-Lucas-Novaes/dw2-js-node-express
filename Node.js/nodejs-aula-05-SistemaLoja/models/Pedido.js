// É no Model que criaremos a estrutura da tabela no banco de dados

import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

// Definindo a estrutura da tabela
const Pedido = connection.define("pedidos", {
  numero: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  valor: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
});
// Sincronizando a tabela com o banco de dados
Pedido.sync({force: false})

export default Pedido;
