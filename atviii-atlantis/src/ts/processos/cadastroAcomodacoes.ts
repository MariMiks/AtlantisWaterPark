import Processo from "../abstracoes/processo";
import DiretorSolteiroSimples from "../diretores/diretorSolteiroSimples";
import DiretorSolteiroMais from "../diretores/diretorSolteiroMais";
import Armazem from "../dominio/armazem";
import Acomodacao from "../modelos/acomodacao";
import DiretorCasalSimples from "../diretores/diretorCasalSimples";
import DiretorFamiliaSimples from "../diretores/diretorFamiliaSimples";
import DiretorFamiliaMais from "../diretores/diretorFamiliaMais";
import DiretorFamiliaSuper from "../diretores/diretorFamiliaSuper";

export default class CadastroAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[]
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        let diretorSolteiroSimples = new DiretorSolteiroSimples()
        let diretorSolteiroMais = new DiretorSolteiroMais()
        let diretorCasalSimples = new DiretorCasalSimples()
        let diretorFamiliaSimples = new DiretorFamiliaSimples()
        let diretorFamiliaMais = new DiretorFamiliaMais()
        let diretorFamiliaSuper = new DiretorFamiliaSuper()

        this.acomodacoes.push(diretorSolteiroSimples.construir())
        this.acomodacoes.push(diretorSolteiroMais.construir())
        this.acomodacoes.push(diretorCasalSimples.construir())
        this.acomodacoes.push(diretorFamiliaSimples.construir())
        this.acomodacoes.push(diretorFamiliaMais.construir())
        this.acomodacoes.push(diretorFamiliaSuper.construir())
    }
}