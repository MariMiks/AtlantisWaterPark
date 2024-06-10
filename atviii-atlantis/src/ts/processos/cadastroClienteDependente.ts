import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"
import ImpressorClienteSimples from "../impressores/impressorClienteSimples"
import Impressor from "../interfaces/impressor"
import Cliente from "../modelos/cliente"
import Endereco from "../modelos/endereco"
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente"
import CadastrarTelefonesCliente from "./cadastrarTelefonesCliente"

export default class CadastroClienteDependente extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        console.log('Iniciando o cadastro de um novo dependente...')

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
        console.log('Por favor escolha um dos titulares pré-cadastrados')
        let titular = this.entrada.receberTexto('Qual o número de documento do titular relacionado? ')

        for (let i = 0; i < this.clientes.length; i++) {
            for (let idoc = 0; idoc < this.clientes[i].Documentos.length; idoc++) {
                if (titular == this.clientes[i].Documentos[idoc].Numero) {
                    let nome = this.entrada.receberTexto('Qual o nome do dependente? ')
                    let nomeSocial = this.entrada.receberTexto('Qual o nome social do dependente? ')
                    let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
                    let dependente = new Cliente(nome, nomeSocial, dataNascimento)

                    dependente.Endereco = this.clientes[i].Endereco.clonar() as Endereco

                    this.processo = new CadastrarTelefonesCliente(dependente)
                    this.processo.processar()

                    this.processo = new CadastrarDocumentosCliente(dependente)
                    this.processo.processar()

                    this.clientes[i].Dependentes.push(dependente)

                    console.log('Finalizando o cadastro do cliente...')
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