import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorCliente from "../impressores/impressorCliente";
import ImpressorClienteSimples from "../impressores/impressorClienteSimples";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemTitularDependente extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        console.log('Iniciando a listagem do cliente titular de um dependente...')

        console.log('Carregando todos os dependentes...')
        console.log('****************************')
        let i = 1
        this.clientes.forEach(cliente => {
            cliente.Dependentes.forEach(dependente => {
                this.impressor = new ImpressorClienteSimples(dependente, i++)
                console.log(this.impressor.imprimir())
            })
        })
        console.log('****************************')
        console.log('Por favor escolha um dos dependentes pré-cadastrados')
        let dependente = this.entrada.receberTexto('Número de documento do cliente desejado: ')

        for (let i = 0; i < this.clientes.length; i++) {
            for (let idep = 0; i < this.clientes[i].Dependentes.length; i++) {
                let depCliente = this.clientes[i].Dependentes[idep]

                for (let idoc = 0; idoc < depCliente.Documentos.length; idoc++) {

                    if (dependente == depCliente.Documentos[idoc].Numero) {
                        console.log('----------------------')
                        console.log('----- Dependente escolhido: -----')
                        this.impressor = new ImpressorCliente(depCliente)
                        console.log(this.impressor.imprimir())

                        console.log('----- Seu titular: -----')    
                        this.impressor = new ImpressorClienteSimples(this.clientes[i], i + 1)
                        console.log(this.impressor.imprimir())
                        
                        break
                    }
                }
                break
            }
        }
    }
}