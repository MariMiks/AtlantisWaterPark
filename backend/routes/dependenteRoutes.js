import { Router } from "express"
import { umDependente, todosDependentes, titularDependentes, cadastrarDependente } from "../controles/dependenteControler.js";

const router = Router();

router.get("/buscar", todosDependentes);

router.get("/buscar/:id", umDependente);

router.get("/buscar/titular/:id", titularDependentes);

router.post("/cadastrar", cadastrarDependente);

export default router;