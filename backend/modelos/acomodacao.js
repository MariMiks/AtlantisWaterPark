import { Sequelize } from "sequelize";
import db from "../config/db.js";


const Acomodacao = db.define("acomodacao", {
    id: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    nomenclatura:{
        type:Sequelize.STRING
    },
    camaSolteiro:{
        type:Sequelize.INTEGER
    },
    camaCasal:{
        type:Sequelize.INTEGER
    },
    suite:{
        type:Sequelize.INTEGER
    },
    climatizacao:{
        type:Sequelize.BOOLEAN
    },
    garagem:{
        type:Sequelize.INTEGER
    }
})

export default Acomodacao;