import Processo from "../abstracoes/processo";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";

export default class CadastroDocumento extends Processo {
    private cliente: Cliente
    private tipoDoc: string
    constructor(cliente: Cliente, tipoDoc: string) {
        super()
        this.cliente = cliente
        this.tipoDoc = tipoDoc
    }

    processar(): void {
        let numero = this.entrada.receberTexto('Qual o número do documento?')
        let dataExpedicao = this.entrada.receberData('Qual a data de expedição do documento?')

        if (this.tipoDoc == "RG") {
            let rg = new Documento(numero, TipoDocumento.RG, dataExpedicao)
            this.cliente.Documentos.push(rg)
        }
        else if (this.tipoDoc == "CPF") {
            let cpf = new Documento(numero, TipoDocumento.CPF, dataExpedicao)
            this.cliente.Documentos.push(cpf)
        } else {
            let passaporte = new Documento(numero, TipoDocumento.Passaporte, dataExpedicao)
            this.cliente.Documentos.push(passaporte)
        }

    }
}