import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorClienteSimples from "../impressores/impressorClienteSimples";
import Impressor from "../interfaces/impressor";
import MenuEditarDependente from "../menus/menuEditarDependente";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import Telefone from "../modelos/telefone";

export default class EditarDependentes extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.menu = new MenuEditarDependente()
    }
    processar(): void {
        console.clear()
        console.log('Iniciando processo de edição de um cliente dependente...')

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
                        this.menu.mostrar()
                        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')

                        switch (this.opcao) {
                            case 1:
                                let novoNome = this.entrada.receberTexto('| Insira um novo nome:')
                                dependente.Nome = novoNome
                                break
                            case 2:
                                let novoNomeSocial = this.entrada.receberTexto('| Insira um novo nome social:')
                                dependente.NomeSocial = novoNomeSocial
                                break
                            case 3:
                                console.log('Carregando todos os telefones deste dependente...')
                                console.log('****************************')
                                for (let itel = 0; itel < dependente.Telefones.length; itel++){
                                    console.log(`|${itel+1}) ${dependente.Telefones[itel]}`)
                                }
                                console.log('****************************')

                                let opTelefone = this.entrada.receberNumero('Qual telefone deseja editar?')

                                for (let itel = 0; itel < dependente.Telefones.length; itel++){
                                    if(opTelefone == itel){
                                        let ddd = this.entrada.receberTexto('| Insira novo ddd:')
                                        let numero = this.entrada.receberTexto('| Insira novo número:')
                                        let novoTelefone = new Telefone(ddd, numero)

                                        dependente.Telefones[itel] = novoTelefone
                                        break
                                    }
                                }
                                break
                            case 4:
                                console.log('Carregando todos os documentos deste dependente...')
                                console.log('****************************')
                                for (let idoc = 0; idoc < dependente.Documentos.length; idoc++){
                                    console.log(`|${idoc+1}) ${dependente.Documentos[idoc]}`)
                                }
                                console.log('****************************')

                                let opDocumento = this.entrada.receberNumero('Qual documento deseja editar?')

                                for (let idoc = 0; idoc < dependente.Documentos.length; idoc++){
                                    if(opDocumento == idoc){
                                        let numero = this.entrada.receberTexto('| Insira novo número:')
                                        let dataExpedicao = this.entrada.receberData('| Insira nova data de expedição:')
                                        let novoDocumento = new Documento(numero, dependente.Documentos[idoc].Tipo, dataExpedicao)

                                        dependente.Documentos[idoc] = novoDocumento
                                        break
                                    }
                                }
                                break
                            default:
                                console.log('Opção não entendida :(')
                        }

                        console.log('Dependente editado com sucesso!')
                        break
                    }
                }
                break
            }
        }
    }
}