import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPricipal"
import TipoCadastroCliente from "./tipoCadastroCliente"
import TipoExcluirClientes from "./tipoExcluirClientes"
import TipoListagemClientes from "./tipoListagemClientes"

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
                // editar cliente
                // criar TipoEditarCliente -> escolher entre:
                // - todos
                // - um titular especifico (seus dependentes)
                // - um dependente (seu titular)
                console.log('Editar cliente ainda não existe!!')
                break
            case 3:
                this.processo = new TipoListagemClientes()
                this.processo.processar()
                break
            case 4:
                // excluir cliente
                // criar TipoExcluirCliente -> escolher entre:
                // - titular
                // - dependente
                this.processo = new TipoExcluirClientes()
                this.processo.processar()
            case 0:
                this.execucao = false
                console.log('Até logo!')
                console.clear()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}