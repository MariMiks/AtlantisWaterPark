import { Router } from "express";
import { buscarTodosVinculos, buscarVinculo, vincularCliente } from "../controles/vinculoControler.js";

const router = Router();

router.get("/buscar", buscarTodosVinculos);

router.get("/buscar/:id", buscarVinculo);

router.post("/cadastrar", vincularCliente);

export default router;