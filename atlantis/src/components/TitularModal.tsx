import Modal from 'react-modal';
import './css/modal.css'

export default function TitularModal(props: any) {
    const { modalAberto, onClose, titulo, readonly } = props

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
        <div className="modal-container">
            <Modal 
                isOpen={modalAberto}
                style={modalStyle}
                contentLabel='Detalhes do usuário'
            >
                <h2>{titulo}</h2>
                <form className='verUsuario'>
                    { readonly ? 
                    <div className='inputMdal'>
                        <p>Data de cadastro: </p>
                         <input readOnly placeholder='16/05/2024' />
                    </div>
                    : ''
                    }
                    <div className='inputMdal'>
                        <p>Nome: </p>
                        { readonly ? <input readOnly placeholder='Mariana' /> : 
                            <input placeholder='Digite o nome...' />}
                    </div>
                    <div className='inputMdal'>
                        <p>Nome social: </p>
                        { readonly ? <input readOnly placeholder='Izumi' /> : 
                            <input placeholder='Digite o nome social...' />}
                    </div>
                    <div className='inputMdal'>
                        <p>Data de nascimento: </p>
                        { readonly ? <input readOnly placeholder='22/12/2003' /> : 
                            <input type='date' />}
                    </div>
                    <div className='inputMdal'>
                        <p>Endereço: </p>
                        { readonly ? <input readOnly placeholder='endereco' /> : 
                            <input placeholder='endereco' />}
                    </div>
                    <div className='inputMdal'>
                        <p>Telefones: </p>
                        { readonly ? <input readOnly placeholder='12999999999' /> :
                            <div className='inputMais'>
                                <input type='number' placeholder='Digite o número...' />
                                <button className='mais'>+</button>
                            </div> }
                    </div>
                    <div className='inputMdal'>
                        <p>Documentos: </p>
                        { readonly ? <input readOnly placeholder='1111111111' /> :
                            <div className='inputMais'>
                                <input type='number' placeholder='Digite o número do documento...' />
                                <button className='mais'>+</button>
                            </div>}
                    </div>
                    { readonly ?
                        <div className='inputMdal'>
                            <p>Dependentes: </p>
                            <input readOnly placeholder='Miguel' />
                        </div>
                    : ''}
                    { readonly ?
                        <div className='inputMdal'>
                            <p>Acomodação: </p>
                            <input readOnly placeholder='Família Simples' />
                        </div>
                    : ''}
                </form>
                { readonly ?
                    <button onClick={ onClose } className='modalBtn'>Voltar</button> :
                    <div>
                        <button className='modalBtn' onClick={onClose}>Enviar</button>
                        <button id='cancelar' className='modalBtn' onClick={onClose}>Cancelar</button>
                    </div>
                }
            </Modal>
        </div>
    )
}