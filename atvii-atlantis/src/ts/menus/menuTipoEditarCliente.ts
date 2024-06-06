import Menu from "../interfaces/menu";

export default class MenuTipoEditarClientes implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de edição desejada? `)
        console.log(`----------------------`)
        console.log(`| 1 - Editar um cliente titular`)
        console.log(`| 2 - Editar um cliente dependente`)
        console.log(`----------------------`)
    }
}