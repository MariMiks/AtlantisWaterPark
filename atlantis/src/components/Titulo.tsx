import './css/titulo.css'

export default function Titulo(props: any) {
    return (
        <div className={ props.acomodacao ? "titulo-container2" : "titulo-container" }>
            { props.acomodacao ? 
                <div style={{ width: "100%" }}>
                    <h3 className='tituloText'>{props.texto}</h3>
                    <div className='abaixoTitulo'>a</div>
                </div>
            :
            <div style={{ width: "30%" }}>
                <h3 className='tituloText'>{props.texto}</h3>
                <div className='abaixoTitulo'>a</div>
            </div>
            }
        </div>
    )
}