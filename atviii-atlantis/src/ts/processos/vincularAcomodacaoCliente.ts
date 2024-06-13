import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorAcomodacao from "../impressores/impressorAcomodacao";
import ImpressorClienteSimples from "../impressores/impressorClienteSimples";
import Impressor from "../interfaces/impressor";
import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";
import VincularAcomodacao from "./vincularAcomodacao";

export default class VincularAcomodacaoCliente extends Processo {
    private clientes: Cliente[]
    private acomodacoes: Acomodacao[]
    private impressor!: Impressor

    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }

    processar(): void {
        console.log('Iniciando escolha de acomodação...')

        console.log('Carregando todos os clientes titulares...')
        console.log('****************************')

        let icli = 1
        this.clientes.forEach(cliente => {
            if (this.titular(cliente)) {
                this.impressor = new ImpressorClienteSimples(cliente, icli++)
                console.log(this.impressor.imprimir())
            }
        })

        console.log('****************************\n')
        console.log('Por favor escolha um dos titulares pré-cadastrados')
        let titular = this.entrada.receberTexto('Qual o número de documento do titular relacionado? ')

        
        for (let i = 0; i < this.clientes.length; i++) {
            for (let idoc = 0; idoc < this.clientes[i].Documentos.length; idoc++) {
                let clienteTitular = this.clientes[i]
                if (titular == clienteTitular.Documentos[idoc].Numero) {
                    
                    this.processo = new VincularAcomodacao(clienteTitular)
                    this.processo.processar()
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