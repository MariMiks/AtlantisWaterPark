import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Dados from "../interfaces/dados";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";
import Armazem from "./armazem";

export default class GerarClientes implements Dados{
    gerar(): void {
        // cliente titular
        let titular1 = new Cliente("Mariana", "", new Date("22/12/2003"))
        let t1Endereco = new Endereco("Av Sao Jose", "Centro", "SJC", "SP", "Brasil", "1220459")
        let t1Telefone1 = new Telefone("12", "999999999")
        let t1Telefone2 = new Telefone("12", "888888888")
        let t1Telefones = [t1Telefone1, t1Telefone2]
        let t1Documento1 = new Documento("111", TipoDocumento.CPF, new Date("22/12/2003"))
        let t1Documento2 = new Documento("555", TipoDocumento.Passaporte, new Date("22/03/2010"))
        let t1Documentos = [t1Documento1, t1Documento2]
        
        titular1.setEndereco = t1Endereco
        titular1.setTelefones = t1Telefones
        titular1.setDocumentos = t1Documentos

        // cliente dependente
        let dependente1 = new Cliente("Otto", "Maria", new Date("22/03/2014"))
        let d1Endereco = titular1?.Endereco.clonar() as Endereco
        let d1Telefone1 = new Telefone("12", "777777777")
        let d1Telefones = [d1Telefone1]
        let d1Documento = new Documento("222", TipoDocumento.CPF, new Date("22/03/2014"))
        let d1Documentos = [d1Documento]

        dependente1.setTelefones = d1Telefones
        dependente1.setDocumentos = d1Documentos
        dependente1.setEndereco = d1Endereco
        titular1.Dependentes.push(dependente1)

        // adicionar no armazen
        let armazem = Armazem.InstanciaUnica.Clientes
        armazem.push(titular1)
    }
}