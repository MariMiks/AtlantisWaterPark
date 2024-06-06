import Processo from "../../abstracoes/processo";
import MenuTipoEditarClientes from "../../menus/menuTipoEditarCliente";
import EditarDependentes from "../editarDependentes";
import EditarTitulares from "../editarTitulares";

export default class TipoEditarClientes extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoEditarClientes()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
            switch (this.opcao) {
                case 1:
                    this.processo = new EditarTitulares()
                    this.processo.processar()
                    break;
                case 2:
                    this.processo = new EditarDependentes()
                    this.processo.processar()
                    break
                default:
                    console.log('Opção não entendida... :(')
            }
    }
}