import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorClienteSimples from "../impressores/impressorClienteSimples";
import Impressor from "../interfaces/impressor";
import MenuEditarTitular from "../menus/menuEditarTitular";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";
import VincularAcomodacao from "./vincularAcomodacao";

export default class EditarTitularess extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.menu = new MenuEditarTitular()
    }
    processar(): void {
        console.clear()
        console.log('Iniciando processo de edição de um cliente titular...')

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
            let titular = this.clientes[i]
            for (let idoc = 0; idoc < titular.Documentos.length; idoc++) {
                if (documento == titular.Documentos[idoc].Numero) {
                    this.menu.mostrar()
                    this.opcao = this.entrada.receberNumero('Qual a opção desejada?')

                    switch (this.opcao) {
                        case 1:
                            let novoNome = this.entrada.receberTexto('| Insira um novo nome:')
                            titular.setNome = novoNome
                            break
                        case 2:
                            let novoNomeSocial = this.entrada.receberTexto('| Insira um novo nome social:')
                            titular.setNomeSocial = novoNomeSocial
                            break
                        case 3:
                            console.log('Coletando os dados do novo endereço...')
                            let novaRua = this.entrada.receberTexto('| Insira nova rua:')
                            let novoBairro = this.entrada.receberTexto('| Insira novo bairro:')
                            let novaCidade = this.entrada.receberTexto('| Insira nova cidade:')
                            let novoEstado = this.entrada.receberTexto('| Insira novo estado:')
                            let novoPais = this.entrada.receberTexto('| Insira novo pais:')
                            let novoCodigoPostal = this.entrada.receberTexto('| Insira novo código postal:')
                            let novoEndereco = new Endereco(novaRua, novoBairro, novaCidade, novoEstado, novoPais, novoCodigoPostal)
                            titular.setEndereco = novoEndereco
                            break
                        case 4:
                            console.log('Carregando todos os telefones deste titular...')
                            console.log('****************************')
                            for (let itel = 0; itel < titular.Telefones.length; itel++) {
                                console.log(`|${itel + 1}) ${titular.Telefones[itel]}`)
                            }
                            console.log('****************************')

                            let opTelefone = this.entrada.receberNumero('Qual telefone deseja editar?')

                            for (let itel = 0; itel < titular.Telefones.length; itel++) {
                                if (opTelefone == itel) {
                                    let ddd = this.entrada.receberTexto('| Insira novo ddd:')
                                    let numero = this.entrada.receberTexto('| Insira novo número:')
                                    let novoTelefone = new Telefone(ddd, numero)

                                    titular.Telefones[itel] = novoTelefone
                                    break
                                }
                            }
                            break
                        case 5:
                            console.log('Carregando todos os docementos deste titular...')
                            console.log('****************************')
                            for (let idoc = 0; idoc < titular.Documentos.length; idoc++) {
                                console.log(`|${idoc + 1}) ${titular.Documentos[idoc]}`)
                            }
                            console.log('****************************')

                            let opDocumento = this.entrada.receberNumero('Qual documento deseja editar?')

                            for (let idoc = 0; idoc < titular.Documentos.length; idoc++) {
                                if (opDocumento == idoc) {
                                    let numero = this.entrada.receberTexto('| Insira novo número:')
                                    let dataExpedicao = this.entrada.receberData('| Insira nova data de expedição:')
                                    let novoDocumento = new Documento(numero, titular.Documentos[idoc].Tipo, dataExpedicao)

                                    titular.Documentos[idoc] = novoDocumento
                                    break
                                }
                            }
                            break
                        case 6:
                            this.processo = new VincularAcomodacao(titular)
                            this.processo.processar()
                            break
                        default:
                            console.log('Opção não entendida :(')
                    }

                    console.log('Titular editado com sucesso!')
                    break
                }
            }
            break
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