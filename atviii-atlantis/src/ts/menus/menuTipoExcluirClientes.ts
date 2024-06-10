import Menu from "../interfaces/menu";

export default class MenuTipoListagemClientes implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de exclusão desejada? `)
        console.log(`----------------------`)
        console.log(`| 1 - Titular específico`)
        console.log(`| 2 - Dependente específico`)
        console.log(`----------------------`)
    }
}