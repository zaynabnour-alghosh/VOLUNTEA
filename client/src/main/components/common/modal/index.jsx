import React, { useState } from 'react';
import './style.css';
import Modal from 'react-modal';
const ModalComponent = ({ showModal, onRequestClose, children,customStyles }) => {
  console.log('ModalComponent is rendered');
  return (
    <Modal
      isOpen={showModal}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Modal"
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;