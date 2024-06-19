import { Router } from "express";
import { todosDocumentos, umDocumento, cadastrarDocumento } from "../controles/documentoControler.js";


const router = Router();

router.get("/buscar", todosDocumentos);

router.get("/buscar/:id", umDocumento);

router.post("/cadastrar", cadastrarDocumento);

export default router;