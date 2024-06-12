import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";

export default class CadastroAcomodacaoCliente extends Processo{
    private clientes: Cliente[]
    private acomodacoes: Acomodacao[]
    private impressor!: Impressor

    constructor(){
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }

    processar(): void {
        console.log('Iniciando escolha de acomodação...')

        console.log('Carregando todos os clientes titulares...')
        console.log('****************************')
        
        let i = 1
        this.clientes.forEach(cliente => {
            if (this.titular(cliente)) {
                this.impressor = new ImpressorCliente(cliente)
                console.log(this.impressor.imprimir())
            }
        })

        console.log('****************************\n')
        console.log('Por favor escolha um dos titulares pré-cadastrados')
        let titular = this.entrada.receberTexto('Qual o número de documento do titular relacionado? ')

        console.log('Carregando todas as acomodações...')
        console.log('****************************')

        console.log('****************************\n')
        console.log('Por favor escolha uma das acomodações pré-cadastrados')

        for (let i = 0; i < this.clientes.length; i++) {
            for (let idoc = 0; idoc < this.clientes[i].Documentos.length; idoc++) {
                if (titular == this.clientes[i].Documentos[idoc].Numero) {
                    

                    console.log('Finalizando escolha de acomodação...')
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