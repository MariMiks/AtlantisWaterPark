import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import ImpressorClienteSimples from "./impressorClienteSimples";
import ImpressorDocumentos from "./impressorDocumentos";
import ImpressorEndereco from "./impressorEndereco";
import ImpressorTelefones from "./impressorTelefones";

export default class ImpressorCliente implements Impressor {
    private cliente: Cliente
    private impressor!: Impressor

    constructor(cliente: Cliente) {
        this.cliente = cliente

    }
    imprimir(): string {
        let impressao = `****************************\n`
            + `| Nome: ${this.cliente.Nome}\n`
            + `| Nome social: ${this.cliente.NomeSocial}\n`
            + `| Data de nascimento: ${this.cliente.DataNascimento.toLocaleDateString()}\n`
            + `| Data de cadastro: ${this.cliente.DataCadastro.toLocaleDateString()}`
            + `\n|`

        this.impressor = new ImpressorEndereco(this.cliente.Endereco)
        impressao = impressao + `\n${this.impressor.imprimir()}` + `\n|`

        this.impressor = new ImpressorDocumentos(this.cliente.Documentos)
        impressao = impressao + `\n| ----- Documentos: -----` + `\n${this.impressor.imprimir()}` + `\n|`

        this.impressor = new ImpressorTelefones(this.cliente.Telefones)
        impressao = impressao + `\n| ----- Telefones: -----` + `\n${this.impressor.imprimir()}` + `\n|`

        let i = 1
        this.cliente.Dependentes.forEach(dependente => {
            this.impressor = new ImpressorClienteSimples(dependente, i++)
            impressao = impressao + `\n| ----- Dependentes: -----` + `\n${this.impressor.imprimir()}`
        })

        if(this.cliente.Acomodacao != null){
            impressao = impressao 
                        + `| ----- Acomodação alocada: -----\n` 
                        + `| ${this.cliente.Acomodacao.NomeAcomadacao}\n`
        } else{
            impressao = impressao + `| ----- Acomodação alocada: -----\n` + `| Ainda não foi alocado`
        }

        impressao = impressao + `\n****************************`
        return impressao
    }

}