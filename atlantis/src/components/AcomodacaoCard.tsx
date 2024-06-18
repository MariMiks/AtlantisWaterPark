import { Link } from "react-router-dom"
import "./css/acomodacaoCard.css"

export default function AcomodacaoCard(props: any) {
    return(
        <div className="card-container">
            <Link to={"/vincularAcomodacao"}>
                <img src={props.img} alt={props.nome} />
                <div className="imgHover">
                    <ul>
                        <li>Cama solteiro: {props.camaSolteiro}</li>
                        <li>Cama casal: {props.camaCasal}</li>
                        <li>Suíte: {props.suite}</li>
                        <li>Climatização: {props.climatizacao}</li>
                        <li>Garagem: {props.garagem}</li>
                    </ul>
                </div>
                <div className="titulo">
                    <p>{props.nome}</p>
                </div> 
            </Link>
        </div>
    )
}