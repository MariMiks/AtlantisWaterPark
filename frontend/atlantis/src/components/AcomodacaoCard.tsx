import { Link } from "react-router-dom"
import "./css/acomodacaoCard.css"
import { ReactEventHandler, useState } from "react"

export default function AcomodacaoCard(props: any) {
    const localNomeAcomodacao = () => {
       localStorage.setItem("acomodacao", props.nome)
    }

    return(
        <div className="card-container">
            <Link to={"/vincularAcomodacao"} onClick={localNomeAcomodacao}>
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
                    <p>{props.titulo}</p>
                </div> 
            </Link>
        </div>
    )
}