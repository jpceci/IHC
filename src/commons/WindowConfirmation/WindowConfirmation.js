import React, { useState } from 'react';
import Modal from 'react-modal';
import "./WindowConfirmation.css";

function ConfirmButton(props) {


    const { onClick, disabled } = props;

    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const handleClick = () => {
        setShowConfirmDialog(true);
    };

    return (
        <div>
            <button className='gray_btn' onClick={handleClick} disabled={disabled}>
                Grabar Materias Seleccionadas
            </button>
            <Modal
                isOpen={showConfirmDialog}
                onRequestClose={() => setShowConfirmDialog(false)}
                contentLabel="Confirmar"
                className="confirm-dialog"
            >
                <h3>¿Estás seguro que deseas grabar las materias seleccionadas?</h3>
                <div className='button-dialog'>
                    <button onClick={() => setShowConfirmDialog(false)}>
                        Aceptar
                    </button>
                    <button onClick={() => setShowConfirmDialog(false)}>
                        Cancelar
                    </button>
                </div>

            </Modal>
        </div>
    );
}

export default ConfirmButton;
