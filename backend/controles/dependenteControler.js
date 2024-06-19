import { Op } from "sequelize";
import Cliente from "../modelos/cliente.js";

export const todosDependentes = async (req, res) => {
    try{
        const dados = await Cliente.findAll({
            where:{
                id_titular:{
                    [Op.not]:null
                }
            },
            attributes:['id','nome','nomeSocial','dataNascimento','dataCadastro','id_titular']
        })
        res.status(302).json(dados)
    }catch(error){
        res.status(404).json({message:error});
    }
}

export const umDependente = async (req, res) => {
    try{
        const dado = await Cliente.findOne({
            where:{
                id:req.params.id,
                id_titular:{
                    [Op.not]:null
                }
            },
            attributes:['id','nome','nomeSocial','dataNascimento','dataCadastro','id_titular']
        })
        if(dado != null){
            res.status(302).json(dado);
        }else{
            res.status(404).json({message:"dependente não encontrado..."});
        }
    }catch(error){
        res.status(404).json({message:error});
    }
}

export const titularDependentes = async (req, res) => {
    try{
        const dependentes = await Cliente.findAll({
            where:{
                id_titular:req.params.id,
            },
            attributes:['id','nome','nomeSocial','dataNascimento','dataCadastro','id_titular']
        })
        res.status(302).json(dependentes)
    }catch(error){
        res.status(404).json({message:error});
    }
}

export const cadastrarDependente = async (req, res) => {
    try{
        const dependente = await Cliente.create({
            id_titular:req.body.id_titular,
            nome: req.body.nome,
            nomeSocial: req.body.nomeSocial,
            dataNascimento: req.body.dataNascimento,
            dataCadastro: req.body.dataCadastro
        })
        res.status(201).json(dependente)
    }catch(error){
        res.status(400).json({message:error});
    }
}