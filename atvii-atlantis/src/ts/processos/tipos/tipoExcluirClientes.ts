import Processo from "../../abstracoes/processo";
import MenuTipoExcluirClientes from "../../menus/menuTipoExcluirClientes";
import ExcluirDependentes from "../excluirDependentes";
import ExcluirTitulares from "../excluirTitulares";

export default class TipoExcluirClientes extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoExcluirClientes()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new ExcluirTitulares()
                this.processo.processar()
                break;
            case 2:
                this.processo = new ExcluirDependentes()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida... :(')
        }
    }
}