import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorClienteSimples from "../impressores/impressorClienteSimples";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ExcluirTitulares extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        console.log('Iniciando processo de exclusão de um cliente titular...')
        console.log('Carregando todos os titulares...')
        console.log('****************************')

        let i = 1
        this.clientes.forEach(cliente => {
            if (this.titular(cliente)) {
                this.impressor = new ImpressorClienteSimples(cliente, i++)
                console.log(this.impressor.imprimir())
            }
        })


        console.log('****************************\n')

        let documento = this.entrada.receberTexto('Número de documento do cliente desejado: ')

        for (let i = 0; i < this.clientes.length; i++) {
            for (let idoc = 0; idoc < this.clientes[i].Documentos.length; idoc++) {
                if (documento == this.clientes[i].Documentos[idoc].Numero) {
                    this.clientes.splice(i, 1)
                    console.log('Titular excluído com sucesso!')
                    break
                }
            }
        }

    }
    private titular(cliente: Cliente): boolean {
        let verificacao = false
        if (cliente.Titular == undefined) {
            verificacao = true
        }
        return verificacao
    }
}