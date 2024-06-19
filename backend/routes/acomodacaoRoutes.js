import { Router } from "express"
import { cadastrarAcomodacao, umaAcomodacao, todasAcomodacoes } from "../controles/acomodacaoControler.js"

const router = Router();

router.get("/buscar", todasAcomodacoes);

router.get("/buscar/:id", umaAcomodacao);

router.post("/cadastrar", cadastrarAcomodacao);

export default router;