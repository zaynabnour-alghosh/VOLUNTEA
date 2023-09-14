import React, { useState } from 'react';
import './style.css';
import Modal from 'react-modal';

// const customStyles = {
//     content: {
//         left: '60%', 
//         right: 0,      
//         top: 0,        
//         bottom: 0,     
//         height: '100%',
//         width: 'max-content',
//         borderRadius:0,
//         backgroundColor: '#fff',
//         inset:'0px',
//         boxShadow: '0 0 10px rgba(0,0,0,0.5)',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'flex-start',
//     },
//     overlay: {
//         backgroundColor: 'rgba(0,0,0,0.6)',
//         top: 0,
//         left:0,
//         right: 0,
//         bottom: 0,
//         display:'flex',
//         justifyContent:'flex-end',
//         width:'100%'
//     },
//     modal:{
//       position:'absolute',
//       width:'max-content',
//       top:0,
//       right:0,
//       bottom:0,
//       left:'auto'
//     }

// };

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