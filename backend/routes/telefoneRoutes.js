import { Router } from "express";
import { todosTelefones, umTelefone, cadastrarTelefone } from "../controles/telefoneControler.js"

const router = Router();

router.get("/buscar", todosTelefones);

router.get("/buscar/:id", umTelefone);

router.post("/cadastrar", cadastrarTelefone)

export default router;