import Acomodacao from "../modelos/acomodacao.js";
import Cliente from "../modelos/cliente.js";
import Vinculo from "../modelos/vinculo.js"

export const buscarTodosVinculos = async (req, res) => {
    try{
        const dados = await Vinculo.findAll({
            attributes:["id","id_cliente","id_acomodacao"],
            include:[
                {
                    model:Cliente,
                    attributes:['id','nome','nomeSocial','dataNascimento','dataCadastro','id_titular']
                },
                {
                    model:Acomodacao,
                    attributes:["id","nomenclatura","camaSolteiro","camaCasal","suite","climatizacao","garagem"]
                }
            ]
        })
        res.status(302).json(dados);
    }catch(error){
        res.status(404).json({message:error});
    }
}

export const buscarVinculo = async (req, res) => {
    try{
        const dado = await Vinculo.findOne({
            where:{
                id: req.params.id
            },
            attributes:["id","id_cliente","id_acomodacao"],
            include:[
                {
                    model:Cliente,
                    attributes:['id','nome','nomeSocial','dataNascimento','dataCadastro','id_titular']
                },
                {
                    model:Acomodacao,
                    attributes:["id","nomenclatura","camaSolteiro","camaCasal","suite","climatizacao","garagem"]
                }
            ]
        })
        if(dado != null){
            res.status(302).json(dado);
        }else{
            res.status(404).json({message:"hospedagem não encontrada..."});
        }
    }catch(error){
        res.status(404).json({message:error});
    }
}

export const vincularCliente = async (req, res) => {
    try{
        const vinculo = await Vinculo.create({
            id_cliente:req.body.id_cliente,
            id_acomodacao:req.body.id_acomodacao
        })
        res.status(201).json(vinculo);
    }catch(error){
        res.status(400).json({message:error});
    }
}