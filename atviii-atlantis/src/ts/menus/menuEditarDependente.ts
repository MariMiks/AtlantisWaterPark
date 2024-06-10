import Menu from "../interfaces/menu";

export default class MenuEditarDependente implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual campo deseja editar?`)
        console.log(`----------------------`)
        console.log(`| 1 - Nome`)
        console.log(`| 2 - Nome social`)
        console.log(`| 3 - Telefones`)
        console.log(`| 4 - Documentos`)
        console.log(`| 0 - Finalizar edição do dependente`)
        console.log(`----------------------`)
    }
}