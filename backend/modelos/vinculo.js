import db from "../config/db.js";
import { Sequelize } from "sequelize";
import Acomodacao from "./acomodacao.js"
import Cliente from "./cliente.js";

const Vinculo = db.define("vinculos",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    id_cliente:{
        type:Sequelize.INTEGER
    },
    id_acomodacao:{
        type:Sequelize.INTEGER
    }
});

Vinculo.belongsTo(Cliente,{foreignKey:"id_cliente"});
Cliente.Vinculo = Cliente.hasMany(Vinculo,{foreignKey:"id_cliente"});

Vinculo.belongsTo(Acomodacao,{foreignKey:"id_acomodacao"});
Acomodacao.Vinculo = Acomodacao.hasMany(Vinculo,{foreignKey:"id_acomodacao"});

export default Vinculo;