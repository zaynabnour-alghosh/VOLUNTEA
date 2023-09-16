import React from "react";
import './style.css';
import Button from "../../common/button";
import ModalComponent from "../../common/modal";
const ConfirmationModal=({body,confirm,cancel,showConfirmationModal , onRequestClose})=>{
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            height: 'fit-content',
            width: '30%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            borderRadius: '5px',
            padding:'20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',

           
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
        }
    };
    return(
        <div>
            <ModalComponent customStyles={customStyles} showModal={showConfirmationModal} onRequestClose={onRequestClose} >
                <div className="confirmation-modal-cotainer flex column center">
                    <div className="confirm-body flex p-30 center">
                        <p>Are you sure you want to proceed with this action?</p>
                    </div>
                    <div className="confirm-actions fullwidth flex row gap-30 center p-10">
                        <Button
                            text={"Cancel"}
                            isPrimary={true}
                            medium={true}
                            onClick={()=>{onRequestClose();}}
                        />
                        <Button
                            text={"Confirm"}
                            isPrimary={true} 
                            medium={true}
                            
                        />
                        </div>
                </div>
            </ModalComponent>
        </div>
    );
}
export default ConfirmationModal;