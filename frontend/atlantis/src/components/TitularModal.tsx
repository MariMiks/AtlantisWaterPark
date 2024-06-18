import Modal from 'react-modal';
import './css/modal.css'

export default function TitularModal(props: any) {
    const { modalAberto, onClose, titulo, readonly, editar, titular, titulares } = props

    const modalStyle = {
        content: {
            width: '60%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    }

    return (
        <div className="modal-container">
            <Modal
                isOpen={modalAberto}
                style={modalStyle}
                contentLabel='Detalhes do usuário'
            >
                <h2 className='tituloModal'>{titulo}</h2>
                <form className='formUsuario'>
                    {titular == false ?
                        <div className='titularModal'>
                            <p>Escolha um titular:</p>
                            <div className='inputMdal'>
                                <select>
                                    {titulares.map((titular: string) => {
                                        return (
                                            <option value={titular}>{titular}</option>
                                        )
                                    })
                                    }
                                </select>
                            </div>
                        </div>
                        : ""}
                    {readonly ?
                        <div className='inputMdal'>
                            <p>Data de cadastro: </p>
                            <input style={{ backgroundColor: "var(--azulHover)" }} readOnly placeholder='16/05/2024' />
                        </div>
                        : ''
                    }
                    <div className='inputMdal'>
                        <p>Nome: </p>
                        {readonly ? <input style={{ backgroundColor: "var(--azulHover)" }} readOnly placeholder='Mariana' /> :
                            <input placeholder='Digite o nome...' />}
                    </div>
                    <div className='inputMdal'>
                        <p>Nome social: </p>
                        {readonly ? <input style={{ backgroundColor: "var(--azulHover)" }} readOnly placeholder='Izumi' /> :
                            <input placeholder='Digite o nome social...' />}
                    </div>
                    <div className='inputMdal'>
                        <p>Data de nascimento: </p>
                        {readonly ? <input style={{ backgroundColor: "var(--azulHover)" }} readOnly placeholder='22/12/2003' /> :
                            <input type='date' />}
                    </div>
                    <div className='inputMdal'>
                        <p>Endereço: </p>
                        {readonly ?
                            <div className='enderecoInputs'>
                                <div className='inputMdal'>
                                    <label>Rua:</label>
                                    <input style={{ backgroundColor: "var(--azulHover)" }} readOnly placeholder='Rua do centro' />
                                </div>
                                <div className='inputMdal'>
                                    <label>Bairro:</label>
                                    <input style={{ backgroundColor: "var(--azulHover)" }} readOnly placeholder='Centro' />
                                </div>
                                <div className='inputMdal'>
                                    <label>Cidade:</label>
                                    <input style={{ backgroundColor: "var(--azulHover)" }} readOnly placeholder='São José dos Campos' />
                                </div>
                                <div className='inputMdal'>
                                    <label>Estado:</label>
                                    <input style={{ backgroundColor: "var(--azulHover)" }} readOnly placeholder='São Paulo' />
                                </div>
                                <div className='inputMdal'>
                                    <label>País:</label>
                                    <input style={{ backgroundColor: "var(--azulHover)" }} readOnly placeholder='Brasil' />
                                </div>
                                <div className='inputMdal'>
                                    <label>Código postal:</label>
                                    <input style={{ backgroundColor: "var(--azulHover)" }} readOnly placeholder='1200000' />
                                </div>
                            </div> :
                            <div className='enderecoInputs'>
                                <div className='inputMdal'>
                                    <label>Rua:</label>
                                    <input placeholder='Rua...' />
                                </div>
                                <div className='inputMdal'>
                                    <label>Bairro:</label>
                                    <input placeholder='Bairro...' />
                                </div>
                                <div className='inputMdal'>
                                    <label>Cidade:</label>
                                    <input placeholder='Cidade...' />
                                </div>
                                <div className='inputMdal'>
                                    <label>Estado:</label>
                                    <input placeholder='Estado...' />
                                </div>
                                <div className='inputMdal'>
                                    <label>País:</label>
                                    <input placeholder='País...' />
                                </div>
                                <div className='inputMdal'>
                                    <label>Código postal:</label>
                                    <input placeholder='CEP...' />
                                </div>
                            </div>
                        }
                    </div>
                    <div className='inputMdal'>
                        <p>Telefones: </p>
                        {readonly ? <input style={{ backgroundColor: "var(--azulHover)" }} readOnly placeholder='12999999999' /> :
                            <div className='inputMais'>
                                <input type='number' placeholder='Digite o número...' />
                                <button className='modalBtn'>+</button>
                            </div>
                        }
                    </div>
                    <div className='documentoModal'>
                        <p>Documentos: </p>
                        {readonly ?
                            <input style={{ backgroundColor: "var(--azulHover)" }} readOnly placeholder='1111111111' />
                            :
                            <div className='inputMais documentos'>
                                <div className='inputMdal'>
                                    <label>Tipo:</label>
                                    <select>
                                        <option value={1}>Cadastro de pessoa física</option>
                                        <option value={2}>Registro geral</option>
                                        <option value={3}>Passaporte</option>
                                    </select>
                                </div>
                                <div className='inputMdal'>
                                    <label>Número:</label>
                                    <input type='number' placeholder='Digite o número do documento...' />
                                </div>
                                <button className='modalBtn'>+</button>
                            </div>
                        }
                    </div>
                    {readonly & titular ?
                        <div className='inputMdal'>
                            <p>Dependentes: </p>
                            <input style={{ backgroundColor: "var(--azulHover)" }} readOnly placeholder='Miguel' />
                        </div>
                        : ''}
                    {readonly & titular ?
                        <div className='inputMdal'>
                            <p>Acomodação: </p>
                            <input style={{ backgroundColor: "var(--azulHover)" }} readOnly placeholder='Família Simples' />
                        </div>
                        : ''}
                </form>
                {readonly ?
                    <div className='btnContainer'>
                        <button onClick={onClose} className='modalBtn'>Voltar</button>
                    </div>
                    :
                    <div className='btnContainer'>
                        <button className='modalBtn' onClick={onClose}>{editar ? "Editar" : "Enviar"}</button>
                        <button id='cancelar' className='modalBtn' onClick={onClose}>Cancelar</button>
                    </div>
                }
            </Modal>
        </div>
    )
}