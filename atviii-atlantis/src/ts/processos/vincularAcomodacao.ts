import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorAcomodacao from "../impressores/impressorAcomodacao";
import Impressor from "../interfaces/impressor";
import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";

export default class VincularAcomodacao extends Processo {
    private acomodacoes: Acomodacao[]
    private impressor!: Impressor
    private clienteTitular: Cliente

    constructor(clienteTitular: Cliente) {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
        this.clienteTitular = clienteTitular
    }

    processar(): void {
        console.log('Carregando todas as acomodações...')
        console.log('****************************')

        let i = 1
        this.acomodacoes.forEach(acomodacao => {
            console.log(`${i++})\n`)
            this.impressor = new ImpressorAcomodacao(acomodacao)
            console.log(this.impressor.imprimir())
            console.log(`------------------------`)
        })

        console.log('****************************\n')
        console.log('Por favor escolha uma das acomodações pré-cadastradas')
        let quarto = this.entrada.receberNumero('Qual a acomodação desejada? ')

        switch (quarto) {
            case 1:
                this.clienteTitular.setAcomodacao = this.acomodacoes[0]
                break
            case 2:
                this.clienteTitular.setAcomodacao = this.acomodacoes[1]
                break
            case 3:
                this.clienteTitular.setAcomodacao = this.acomodacoes[2]
                break
            case 4:
                this.clienteTitular.setAcomodacao = this.acomodacoes[3]
                break
            case 5:
                this.clienteTitular.setAcomodacao = this.acomodacoes[4]
                break
            case 6:
                this.clienteTitular.setAcomodacao = this.acomodacoes[5]
                break
        }
        console.log('Finalizando escolha de acomodação...')
    }
}