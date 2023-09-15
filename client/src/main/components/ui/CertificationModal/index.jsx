import React from "react";
import './style.css';
import Button from './../../common/button';
import Input from "../../common/input";
import ModalComponent from "../../common/modal";
const CertificationModal=({showModal , onRequestClose})=>{
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            height: 'fit-content',
            width: '40%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            borderRadius: '20px',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            padding:'0px',
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
    return(
        <div >
            <ModalComponent customStyles={customStyles} showModal={showModal} onRequestClose={onRequestClose} >
                <div className='certification-form-container flex fullwidth column'>
                    <div className="new-certification-header flex ">
                        <span>New Certification</span>
                    </div>
                    <div className="new-certification-form-container flex column fullwidth">
                        <div className="certification-form  flex column center">
                            <div className="fullwidth flex column">
                                <span className="pt-10">
                                    <label htmlFor="opp">Opportunity</label>
                                    <select name="opp" id="" className="pt-10 fullwidth opp-list select">
                                        <option value="">Opp1</option>
                                        <option value="">Opp2</option>
                                        <option value="">Opp3</option>
                                    </select>
                                </span>
                            </div>
                            <div className="fullwidth flex column">
                            <span className="pt-10">
                                <label htmlFor="volunteer">Volunteer</label>
                                <select name="volunteer" id="" className="pt-10 fullwidth header-list select">
                                    <option value="">John Doe</option>
                                    <option value="">Mary Doe</option>
                                    <option value="">Jane Doe</option>
                                </select>
                            </span>
                            </div>
                            <div className="fullwidth flex column">
                                <span className="pt-10">
                                    <Input
                                        label={"Description"}
                                        placeholder={"description"}
                                        type={"textarea"}
                                        fill={true}
                                    />
                                </span>
                            </div>
                            <div className="btn-add-certification flex ">
                                <Button 
                                    text={"CERTIFY"}
                                    isPrimary={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </ModalComponent>
        </div>
    );
}
export default CertificationModal;