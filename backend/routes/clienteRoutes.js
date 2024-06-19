import { Router } from "express";
import { atualizarCliente, umCliente, todosClientes, cadastrarCliente, excluirCliente } from "../controles/clienteControler.js";

const router = Router();

router.get("/buscar", todosClientes);

router.get("/buscar/:id", umCliente);

router.post("/cadastrar", cadastrarCliente);

router.put("/atualizar/:id", atualizarCliente);

router.delete("/excluir/:id", excluirCliente);

export default router;