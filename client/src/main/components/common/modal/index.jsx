import React, { useState } from 'react';
import './style.css';
import Modal from 'react-modal';

const customStyles = {
    content: {
        // position: 'absolute',
        left: '60%', 
        right: 0,      
        top: 0,        
        bottom: 0,     
        height: '100%',
        width: 'max-content',
       
        // transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        inset:'0px',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        // padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        top: 0,
        left:0,
        right: 0,
        bottom: 0,
        display:'flex',
        justifyContent:'flex-end',
        width:'100%'
    },
    modal:{
      position:'absolute',
      width:'max-content',
      top:0,
      right:0,
      bottom:0,
      left:'auto'
    }

};

const ModalComponent = ({ showModal, onRequestClose, children }) => {
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