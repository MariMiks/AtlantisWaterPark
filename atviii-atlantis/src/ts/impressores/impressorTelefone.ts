import Impressor from "../interfaces/impressor";
import Telefone from "../modelos/telefone";

export default class ImpressorTelefone implements Impressor {
    private telefone: Telefone
    private index: number

    constructor(telefone: Telefone, index: number) {
        this.telefone = telefone
        this.index = index
    }

    imprimir(): string {
        let impressao = `| ${this.index}) Número: (${this.telefone.Ddd}) ${this.telefone.Numero}`
        return impressao
    }

}