import './css/usuarios.css'
import { useState } from 'react'
import { FaPen, FaTrash } from 'react-icons/fa'
import Modal from 'react-modal';
import Titulo from '../components/Titulo'
import TitularModal from '../components/TitularModal'

export default function Usuario() {
    const [cadastroModal, setCadastroModal] = useState(false)
    const [verModal, setVerModal] = useState(false)
    const [deletarModal, setDeletarModal] = useState(false)
    const [editarModal, setEditarModal] = useState(false)
    const titulares = ["Mariana", "João", "Margarida"]
    const [usuario, setUsuario] = useState('titulares')

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        setUsuario(e.target.value)
    }

    const modalStyle = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    }

    return (
        <div className='usuario-container'>
            <div className='header'>
                <Titulo texto="Todos os usuários" acomodacao={false} />
                <select onChange={handleSelect}>
                    <option value={"titulares"}>Todos os titulares</option>
                    <option value={"dependentes"}>Todos os dependentes</option>
                </select>
                <button value="cadastrar" onClick={() => setCadastroModal(true)} >Novo usuário</button>
            </div>
            <div className='listagem'>
                {usuario === 'titulares' ?
                    <div className='usuario'>
                        <div className='dados' onClick={() => setVerModal(true)}>
                            <p>Nome: Mariana</p>
                            <p>Nome social: Titular</p>
                        </div>
                        <div className='icones'>
                            <button onClick={() => setEditarModal(true)}> <FaPen /> </button>
                            <button onClick={() => setDeletarModal(true)}> <FaTrash /> </button>
                        </div>
                        <Modal
                            isOpen={deletarModal}
                            style={modalStyle}
                            contentLabel='DeletarUsuario'
                        >
                            <h3>Deseja realmente deletar usuário?</h3>
                            <div className='btnContainer'>
                                <button id='deletar' onClick={() => setDeletarModal(false)}>Deletar</button>
                                <button onClick={() => setDeletarModal(false)}>Cancelar</button>
                            </div>
                        </Modal>

                        <TitularModal
                            titulo="Editar usuário"
                            modalAberto={editarModal}
                            onClose={() => setEditarModal(false)}
                            editar={true}
                        />

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
                    :
                    <div className='usuario'>
                        <div className='dados' onClick={() => setVerModal(true)}>
                            <p>Nome: Miguel</p>
                            <p>Nome social: Dependente</p>
                        </div>
                        <div className='icones'>
                            <button onClick={() => setEditarModal(true)}> <FaPen /> </button>
                            <button onClick={() => setDeletarModal(true)}> <FaTrash /> </button>
                        </div>
                        <Modal
                            isOpen={deletarModal}
                            style={modalStyle}
                            contentLabel='DeletarUsuario'
                        >
                            <h3>Deseja realmente deletar usuário?</h3>
                            <div className='btnContainer'>
                                <button id='deletar' onClick={() => setDeletarModal(false)}>Deletar</button>
                                <button onClick={() => setDeletarModal(false)}>Cancelar</button>
                            </div>
                        </Modal>

                        <TitularModal
                            titulo="Editar usuário"
                            modalAberto={editarModal}
                            onClose={() => setEditarModal(false)}
                            editar={true}
                            titular={false}
                            titulares={titulares}
                        />

                        <TitularModal
                            titulo="Detalhes do usuário"
                            modalAberto={verModal}
                            onClose={() => setVerModal(false)}
                            readonly={true}
                            titular={false}
                            titulares={titulares}
                        />
                        <TitularModal
                            titulo="Cadastrar usuário"
                            modalAberto={cadastroModal}
                            onClose={() => setCadastroModal(false)}
                            readonly={false}
                            titular={false}
                            titulares={titulares}
                        />
                    </div>}
            </div>
        </div>
    )
}