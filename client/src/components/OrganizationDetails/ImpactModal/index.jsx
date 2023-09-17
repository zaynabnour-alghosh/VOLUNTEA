import React from "react";
import './style.css';
import ModalComponent from "../../../main/components/common/modal";
import Input from "../../../main/components/common/input";
import Button from "../../../main/components/common/button";

const ImpactModal=({showImpactModal , onRequestClose})=>{
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
            <ModalComponent customStyles={customStyles} showModal={showImpactModal} onRequestClose={onRequestClose} >
                <div className='org-impact-form-container flex fullwidth column'>
                    <div className="new-org-impact-form-container flex column fullwidth">
                        <div className="org-impact-form  flex column center">
                            <div className="fullwidth flex column">
                                <span className="pt-10">
                                    <Input
                                        label={"Topic"}
                                        placeholder={"Impact Topic"}
                                        type={"text"}
                                        fill={true}
                                    />
                                </span>
                            </div>
                            <div className="fullwidth flex column">
                                <span className="pt-10">
                                    <Input
                                        label={"Description"}
                                        placeholder={"Description"}
                                        type={"textarea"}
                                        fill={true}
                                    />
                                </span>
                            </div>
                            <div className="fullwidth flex column">
                                <span className="pt-10 file">
                                    <Input
                                        label={"Image"}
                                        type={"file"}
                                        fill={true}
                                    />
                                </span>
                            </div>
                            <div className="btn-add-impcat flex ">
                                <Button 
                                    text={"Add"}
                                    isAction={true}
                                    medium={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </ModalComponent>
        </div>
    );
}
export default ImpactModal;