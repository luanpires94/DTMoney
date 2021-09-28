import React from 'react'
import Modal from 'react-modal'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
            >
                <h2>Cadastrar transação</h2>
            </Modal>
        </div>
    )
}
