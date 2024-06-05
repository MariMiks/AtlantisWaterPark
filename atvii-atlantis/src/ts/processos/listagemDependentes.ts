import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorCliente from "../impressores/impressorCliente";
import ImpressorClienteSimples from "../impressores/impressorClienteSimples";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemDependentes extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        console.log('Iniciando a listagem dos clientes dependentes...')

        console.log('Carregando todos os titulares...')
        console.log('****************************')
        let i = 1
        this.clientes.forEach(cliente => {
            if (this.titular(cliente)) {
                this.impressor = new ImpressorClienteSimples(cliente, i++)
                console.log(this.impressor.imprimir())
            }
        })
        console.log('****************************')
        console.log('Por favor escolha um dos titulares pré-cadastrados')
        let titular = this.entrada.receberTexto('Qual o número de documento do titular desejado? ')

        for (let i = 0; i < this.clientes.length; i++) {
            for (let idoc = 0; idoc < this.clientes[i].Documentos.length; idoc++) {
                if (titular == this.clientes[i].Documentos[idoc].Numero) {
                    console.log('----------------------')
                    console.log('----- Titular escolhido: -----')
                    this.impressor = new ImpressorCliente(this.clientes[i])
                    console.log(this.impressor.imprimir())
                    console.log('----- Seus dependentes: -----')
                    this.clientes[i].Dependentes.forEach(dependente => {
                        this.impressor = new ImpressorClienteSimples(dependente, i+1)
                        console.log(this.impressor.imprimir())
                    })
                    console.log('****************************')
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