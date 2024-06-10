import Processo from "../abstracoes/processo"
import GerarClientes from "../dominio/gerarClientes"
import MenuPrincipal from "../menus/menuPricipal"
import ListagemAcomodacoes from "./listagemAcomodacoes"
import TipoCadastroCliente from "./tipos/tipoCadastroCliente"
import TipoEditarClientes from "./tipos/tipoEditarCliente"
import TipoExcluirClientes from "./tipos/tipoExcluirClientes"
import TipoListagemClientes from "./tipos/tipoListagemClientes"

export default class Principal extends Processo {
    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new TipoCadastroCliente()
                this.processo.processar()
                break
            case 2:
                this.processo = new TipoEditarClientes()
                this.processo.processar()
                break
            case 3:
                this.processo = new TipoListagemClientes()
                this.processo.processar()
                break
            case 4:
                this.processo = new TipoExcluirClientes()
                this.processo.processar()
                break
            case 5:
                this.processo = new ListagemAcomodacoes()
                this.processo.processar()
                break
            case 0:
                console.log('Até logo!')
                this.execucao = false
                console.clear()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}