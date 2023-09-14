import React from "react";
import './style.css';
import ModalComponent from "../../common/modal";
const OpportunityModal=({showOppModal , onRequestClose})=>{
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            height: 'fit-content',
            width: 'fit-content',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        overlay: {
            backgroundColor: 'rgba(0,0,0,0.6)',
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
    
    return(
        <div >
            <ModalComponent customStyles={customStyles} showModal={showOppModal} onRequestClose={onRequestClose} >
                <div className='opp-form-container'>
                    <h1>Hello World!</h1>
                </div>
            </ModalComponent>

        </div>
    
    );
}
export default OpportunityModal;