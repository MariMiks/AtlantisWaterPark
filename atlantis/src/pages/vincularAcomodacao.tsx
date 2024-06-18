import { useState } from 'react'
import './css/vincular.css'
import CarouselAcomodacao from '../components/Carousel'
import Titulo from '../components/Titulo'
import TitularModal from '../components/TitularModal'

import ocean1 from "../assets/imgs/ocean-adobe.jpg"
import ocean2 from "../assets/imgs/ocean-freepik.jpg"
import ocean3 from "../assets/imgs/ocean-pngtree.png"

export default function VincularAcomodacao() {
    const acomodacao = localStorage.getItem("acomodacao")
    const familiaSuper = [ocean1, ocean2, ocean3]
    const familiaMais = [ocean1, ocean2, ocean3]
    const familiaSimples = [ocean1, ocean2, ocean3]
    const casalSimples = [ocean1, ocean2, ocean3]
    const solterioMais = [ocean1, ocean2, ocean3]
    const solterioSimples = [ocean1, ocean2, ocean3]

    const [modalAberto, setModalAberto] = useState(false)


    return (
        <div className="vincular-container">
            {acomodacao == "FamiliaSuper" &&
                <div className='informacoes'>
                    <div className='dados'>
                        <Titulo texto="Família Super" />
                        <p>Acomodação composta por:</p>
                        <ul>
                            <li>Cama solteiro: 6</li>
                            <li>Cama casal: 2</li>
                            <li>Suíte: 3</li>
                            <li>Climatização: Sim</li>
                            <li>Garagem: 2</li>
                        </ul>
                    </div>
                    <CarouselAcomodacao img={familiaSuper} />
                </div>
            }
            {acomodacao == "FamiliaMais" &&
                <div className='informacoes'>
                    <div className='dados'>
                        <Titulo texto="Família Mais" />
                        <p>Acomodação composta por:</p>
                        <ul className='listagemAcomodacoes'>
                            <li>Cama solteiro: 5</li>
                            <li>Cama casal: 1</li>
                            <li>Suíte: 2</li>
                            <li>Climatização: Sim</li>
                            <li>Garagem: 2</li>
                        </ul>
                    </div>
                    <CarouselAcomodacao img={familiaMais} />
                </div>
            }
            {acomodacao == "FamiliaSimples" &&
                <div className='informacoes'>
                    <div className='dados'>
                        <Titulo texto="Família Simples" />
                        <p>Acomodação composta por:</p>
                        <ul className='listagemAcomodacoes'>
                            <li>Cama solteiro: 2</li>
                            <li>Cama casal: 1</li>
                            <li>Suíte: 1</li>
                            <li>Climatização: Sim</li>
                            <li>Garagem: 1</li>
                        </ul>
                    </div>
                    <CarouselAcomodacao img={familiaSimples} />
                </div>
            }
            {acomodacao == "CasalSimples" &&
                <div className='informacoes'>
                    <div className='dados'>
                        <Titulo texto="Casal Simples" />
                        <p>Acomodação composta por:</p>
                        <ul className='listagemAcomodacoes'>
                            <li>Cama solteiro: 0</li>
                            <li>Cama casal: 1</li>
                            <li>Suíte: 1</li>
                            <li>Climatização: Sim</li>
                            <li>Garagem: 1</li>
                        </ul>
                    </div>
                    <CarouselAcomodacao img={casalSimples} />
                </div>
            }
            {acomodacao == "SolteiroMais" &&
                <div className='informacoes'>
                    <div className='dados'>
                        <Titulo texto="Solteiro Mais" />
                        <p>Acomodação composta por:</p>
                        <ul className='listagemAcomodacoes'>
                            <li>Cama solteiro: 0</li>
                            <li>Cama casal: 1</li>
                            <li>Suíte: 1</li>
                            <li>Climatização: Sim</li>
                            <li>Garagem: 1</li>
                        </ul>
                    </div>
                    <CarouselAcomodacao img={solterioMais} />
                </div>
            }
            {acomodacao == "SolteiroSimples" &&
                <div className='informacoes'>
                    <div className='dados'>
                        <Titulo texto="Solterio Simples" />
                        <p>Acomodação composta por:</p>
                        <ul className='listagemAcomodacoes'>
                            <li>Cama solteiro: 1</li>
                            <li>Cama casal: 0</li>
                            <li>Suíte: 1</li>
                            <li>Climatização: Sim</li>
                            <li>Garagem: 0</li>
                        </ul>
                    </div>
                    <CarouselAcomodacao img={solterioSimples} />
                </div>
            }
            <h3>Quero garantir a minha reserva!</h3>
            <div className='vincularCliente'>
                <div className='cadastrarNovo'>
                    <h3>Registre-se!</h3>
                    <button className='cadastroBtn' onClick={() => setModalAberto(true)}>Cadastrar</button>
                    <TitularModal
                        titulo="Cadastrar usuário"
                        modalAberto={modalAberto}
                        onClose={() => setModalAberto(false)}
                        readonly={false}
                    />
                </div>
                <div className='divisoria'></div>
                <div className='listagem'>
                    <h3>Usuários titulares já cadastrados: </h3>
                    <div className='usuario'>
                        <div className='dados'>
                            <p>Nome: </p>
                            <p>Nome social: </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}