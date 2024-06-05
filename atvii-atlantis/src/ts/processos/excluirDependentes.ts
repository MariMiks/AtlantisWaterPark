import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorClienteSimples from "../impressores/impressorClienteSimples";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ExcluirDependentes extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        console.log('Iniciando processo de exclusão de um cliente dependente...')
        
        console.log('Carregando todos os dependentes...')
        console.log('****************************')
        let i = 1
        this.clientes.forEach(cliente => {
            cliente.Dependentes.forEach(dependente => {
                this.impressor = new ImpressorClienteSimples(dependente, i++)
                console.log(this.impressor.imprimir())
            })
        })
        console.log('****************************\n')

        console.log('Por favor escolha um dos dependentes pré-cadastrados')
        let documento = this.entrada.receberTexto('Número de documento do cliente desejado: ')

        for (let i = 0; i < this.clientes.length; i++) {
            for (let idep = 0; i < this.clientes[i].Dependentes.length; i++) {
                let dependente = this.clientes[i].Dependentes[idep]

                for (let idoc = 0; idoc < dependente.Documentos.length; idoc++) {
                    if (documento == dependente.Documentos[idoc].Numero) {
                        this.clientes[i].Dependentes.splice(idep, 1)
                        console.log('Titular excluído com sucesso!')
                        break
                    }
                }
                break
            }
        }

    }
}