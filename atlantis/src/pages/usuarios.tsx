import { useState } from 'react'
import './css/usuarios.css'
import Modal from 'react-modal'
import Titulo from '../components/Titulo'
import { FaPen, FaTrash } from 'react-icons/fa'
import TitularModal from '../components/TitularModal'

export default function Usuario(){
    const [cadastroModal, setCadastroModal] = useState(false)
    const [verModal, setVerModal] = useState(false)

    return (
        <div className='usuario-container'>
            <div className='header'>
                <Titulo texto="Todos os usuários" />
                <select>
                    <option>Todos os titulares</option>
                    <option>Todos os dependentes</option>
                </select>
                <button value="cadastrar" onClick={() => setCadastroModal(true)} >Novo usuário</button>
            </div>
            <div className='listagem'>
                <div className='usuario' onClick={() => setVerModal(true)}>
                    <div className='dados'>
                        <p>Nome: </p>
                        <p>Nome social: </p>
                    </div>
                    <div className='icones'>
                        <button> <FaPen /> </button>
                        <button> <FaTrash /> </button>
                    </div>
                </div>
            </div>
            <TitularModal
                titulo="Detalhes do usuário"
                modalAberto={verModal}
                onClose={() => setVerModal(false)}
                readonly={true}
            />
            <TitularModal 
                titulo="Cadastrar usuário"
                modalAberto={cadastroModal}
                onClose={() => setCadastroModal(false)}
                readonly={false}
            />
        </div>
    )
}