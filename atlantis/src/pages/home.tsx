import AcomodacaoCard from '../components/AcomodacaoCard'
import resort from '../assets/imgs/resortHome.jpg'
import familiaSuper from '../assets/imgs/FamiliaSuper.avif'
import solteiroMais from '../assets/imgs/solteiroMais.jpg'
import casalSimples from '../assets/imgs/casalSimples.jpg'
import Solteiro from '../assets/imgs/solteiro.jpg'
import FamiliaMais from '../assets/imgs/familiaMais.jpg'
import FamiliaSimples from '../assets/imgs/familiaSimples.jpg'


import './css/home.css'

export default function Home() {
    return(
        <div className='home-container'>
            <div className='imagemPrincipal'>
                <img src={resort}/>
                <p>Bem-vindo(a) ao <span>melhor</span> sistema de gestão de <span>clubes</span>, <span>hotéis</span> e <span>resorts</span> do mundo, o <span>Atlantis</span> :)</p>
            </div>
            <div className='acomodacoes'>
                <h3>Conheça as nossas acomodações:</h3>
                <div className='cards'>
                    <AcomodacaoCard 
                        img={familiaSuper}
                        titulo="Família Super"
                        nome="FamiliaSuper"
                        camaSolteiro="6"
                        camaCasal="2"
                        suite="3"
                        climatizacao="Sim"
                        garagem="2"
                    />
                    <AcomodacaoCard 
                        img={FamiliaMais}
                        titulo="Família Mais"
                        nome="FamiliaMais"
                        camaSolteiro="5"
                        camaCasal="1"
                        suite="2"
                        climatizacao="Sim"
                        garagem="2"
                    />
                    <AcomodacaoCard 
                        img={FamiliaSimples}
                        titulo="Família Simples"
                        nome="FamiliaSimples"
                        camaSolteiro="2"
                        camaCasal="1"
                        suite="1"
                        climatizacao="Sim"
                        garagem="1"
                    />
                    <AcomodacaoCard 
                        img={casalSimples}
                        titulo="Casal Simples"
                        nome="CasalSimples"
                        camaSolteiro="0"
                        camaCasal="1"
                        suite="1"
                        climatizacao="Sim"
                        garagem="1"
                    />
                    <AcomodacaoCard 
                        img={solteiroMais}
                        titulo="Solteiro Mais"
                        nome="SolteiroMais"
                        camaSolteiro="0"
                        camaCasal="1"
                        suite="1"
                        climatizacao="Sim"
                        garagem="1"
                    />
                    <AcomodacaoCard 
                        img={Solteiro}
                        titulo="Solteiro Simples"
                        nome="SolteiroSimples"
                        camaSolteiro="1"
                        camaCasal="0"
                        suite="1"
                        climatizacao="Sim"
                        garagem="0"
                    />
                </div>
            </div>
        </div>
    )
}