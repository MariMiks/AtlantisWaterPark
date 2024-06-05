import Processo from "../abstracoes/processo";
import MenuTipoDocumento from "../menus/menuTipoDocumento";
import Cliente from "../modelos/cliente";
import CadastroDocumento from "./cadastroDocumento";

export default class CadastrarDocumentosCliente extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.menu = new MenuTipoDocumento()
        this.execucao = true
    }

    processar(): void {
        console.log('Inciando o cadastro de documentos...')
        while (this.execucao) {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual opção desejada?')
            switch (this.opcao) {
                case 1:
                    // CPF
                    this.processo = new CadastroDocumento(this.cliente, "CPF")
                    this.processo.processar()
                    break
                case 2:
                    // RG
                    this.processo = new CadastroDocumento(this.cliente, "RG")
                    this.processo.processar()
                    break
                case 3:
                    // Passaporte
                    this.processo = new CadastroDocumento(this.cliente, "Passaporte")
                    this.processo.processar()
                    break
                case 0:
                    this.execucao = false
                    break
                default:
                    console.log('Opção não entendida :(')
            }
        }
    }
}