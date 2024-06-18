import './css/titulo.css'

export default function Titulo(props: any){
    return (
        <div className='titulo-container'>
            <h3>{props.texto}</h3>
            <div className='abaixoTitulo'>a</div>
        </div>
    )
}