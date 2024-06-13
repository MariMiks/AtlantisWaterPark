import Menu from "../interfaces/menu";

export default class MenuEditarTitular implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual campo deseja editar?`)
        console.log(`----------------------`)
        console.log(`| 1 - Nome`)
        console.log(`| 2 - Nome social`)
        console.log(`| 3 - Endereço`)
        console.log(`| 4 - Telefones`)
        console.log(`| 5 - Documentos`)
        console.log(`| 6 - Acomodação`)
        console.log(`| 0 - Finalizar edição do titular`)
        console.log(`----------------------`)
    }
}