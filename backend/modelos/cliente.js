import { Sequelize } from "sequelize";
import db from "../config/db.js";


const Cliente = db.define("cliente", {
    id: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    nome: {
        type:Sequelize.STRING
    },
    nomeSocial: {
        type:Sequelize.STRING
    },
    dataNascimento:{
        type:Sequelize.STRING
    },
    dataCadastro:{
        type:Sequelize.STRING
    },
    id_titular:{
        type:Sequelize.INTEGER
    }
})

Cliente.Cliente = Cliente.belongsTo(Cliente,{foreignKey:{name:"id_titular"}})
Cliente.Cliente =Cliente.hasMany(Cliente,{foreignKey:"id_titular"})

export default Cliente;