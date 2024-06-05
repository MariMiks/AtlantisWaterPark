import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import ImpressorDocumentos from "./impressorDocumentos";

export default class ImpressorClienteSimples implements Impressor {
    private cliente: Cliente
    private impressor!: Impressor
    private index: number

    constructor(cliente: Cliente, index: number) {
        this.cliente = cliente
        this.index = index
    }

    imprimir(): string {
        let impressao =  `| ${this.index}) \n`
            + `| Nome: ${this.cliente.Nome}\n`
            + `| Nome social: ${this.cliente.NomeSocial}`

        this.impressor = new ImpressorDocumentos(this.cliente.Documentos)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        impressao = impressao + `\n----------------------\n`
        return impressao
    }

}