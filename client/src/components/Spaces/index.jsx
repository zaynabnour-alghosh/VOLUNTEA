import React from "react";
import './style.css';
import ModalComponent from "../../main/components/common/modal";
import RowCard from "../../main/components/common/rowcard";
const SpaceModal=({onRequestClose,showSpaceModal,organizations})=>{
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            height: 'fit-content',
            width: '40%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            padding:'30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
           
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
    // console.log("hi",organizations);
    return(
        <div >
            <ModalComponent customStyles={customStyles} showModal={showSpaceModal} onRequestClose={onRequestClose} >
                <div className="org-space-container  flex column center">
                    <div className="fullwidth flex column">
                    {organizations.map(org => (
                            <span className="pt-10" key={org.org_id}>
                                <RowCard title={org.org_name} desc={org.code} />
                            </span>
                        ))}
                    </div>
                </div>
            </ModalComponent>
        </div>

    );
}
export default SpaceModal;