import Processo from "../abstracoes/processo";
import GerarClientes from "../dominio/gerarClientes";
import Dados from "../interfaces/dados";
import CadastroAcomodacoes from "../processos/cadastroAcomodacoes";
import Principal from "../processos/principal";

console.clear()
console.log(`Bem-vindo(a) ao melhor sistema de gestão de clubes, hotéis e resorts do mundo, o Atlantis :)`);

let processo: Processo
let execucao: Boolean = true
let dados: Dados

processo = new CadastroAcomodacoes()
processo.processar()

dados = new GerarClientes()
dados.gerar()

while (execucao) {
    processo = new Principal()
    processo.processar()
    execucao = processo.Execucao
}