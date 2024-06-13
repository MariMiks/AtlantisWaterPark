import Impressor from "../interfaces/impressor";
import Documento from "../modelos/documento";

export default class ImpressorDocumento implements Impressor {
    private documento: Documento
    private index: number

    constructor(documento: Documento, index: number) {
        this.documento = documento
        this.index = index
    }

    imprimir(): string {
        let impressao = `| ${this.index})\n`
            + `| Tipo: ${this.documento.Tipo}\n`
            + `| Data expedição: ${this.documento.DataExpedicao.toLocaleDateString()}\n`
            + `| Número: ${this.documento.Numero}`
        return impressao
    }

}