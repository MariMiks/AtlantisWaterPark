import { Router } from "express";
import { buscarEndereco, cadastrarEndereco } from "../controles/enderecoControler.js"

const router = Router();

router.get("/buscar/:id", buscarEndereco);

router.post("/cadastrar", cadastrarEndereco);

export default router;