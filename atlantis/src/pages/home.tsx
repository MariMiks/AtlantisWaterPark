import AcomodacaoCard from '../components/AcomodacaoCard'
import ocean from '../assets/imgs/ocean-adobe.jpg'
import './css/home.css'

export default function Home() {
    return(
        <div className='home-container'>
            <div className='imagemPrincipal'>
                <img src={ocean}/>
                <p>Bem-vindo(a) ao <span>melhor</span> sistema de gestão de <span>clubes</span>, <span>hotéis</span> e <span>resorts</span> do mundo, o <span>Atlantis</span> :)</p>
            </div>
            <div className='acomodacoes'>
                <p>Conheça as nossas acomodações:</p>
                <div className='cards'>
                    <AcomodacaoCard 
                        img={ocean}
                        nome="Família Super"
                        camaSolteiro="6"
                        camaCasal="2"
                        suite="3"
                        climatizacao="Sim"
                        garagem="2"
                    />
                    <AcomodacaoCard 
                        img={ocean}
                        nome="Família Mais"
                        camaSolteiro="5"
                        camaCasal="1"
                        suite="2"
                        climatizacao="Sim"
                        garagem="2"
                    />
                    <AcomodacaoCard 
                        img={ocean}
                        nome="Família Simples"
                        camaSolteiro="2"
                        camaCasal="1"
                        suite="1"
                        climatizacao="Sim"
                        garagem="1"
                    />
                    <AcomodacaoCard 
                        img={ocean}
                        nome="Casal Simples"
                        camaSolteiro="0"
                        camaCasal="1"
                        suite="1"
                        climatizacao="Sim"
                        garagem="1"
                    />
                    <AcomodacaoCard 
                        img={ocean}
                        nome="Solteiro Mais"
                        camaSolteiro="0"
                        camaCasal="1"
                        suite="1"
                        climatizacao="Sim"
                        garagem="1"
                    />
                    <AcomodacaoCard 
                        img={ocean}
                        nome="Solteiro Simples"
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