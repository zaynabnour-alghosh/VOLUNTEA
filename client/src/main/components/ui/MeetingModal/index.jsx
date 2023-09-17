import React from "react";
import './style.css';
import Button from './../../common/button';
import Input from "../../common/input";
import ModalComponent from "../../common/modal";
const MeetingModal=({showModal , onRequestClose})=>{
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
                <div className='meeting-form-container flex fullwidth column'>
                    <div className="new-meeting-header flex ">
                        <span>Schedule a Meeting</span>
                    </div>
                    <div className="new-meeting-form-container flex column fullwidth">
                        <div className="meeting-form  flex column center">
                            <div className="fullwidth flex column">
                                <span className="pt-10">
                                    <Input
                                        label={"Meeting Link"}
                                        placeholder={"meeting link"}
                                        type={"text"}
                                        fill={true}
                                    />
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
                            <div className="fullwidth flex column">
                                <span className="pt-10">
                                    <Input
                                        label={"Location"}
                                        placeholder={"location"}
                                        type={"text"}
                                        fill={true}
                                    />
                                </span>
                            </div>
                            <div className="fullwidth flex column">
                                <span className="pt-10">
                                    <Input
                                        label={"Date"}
                                        type={"date"}
                                        fill={true}
                                    />
                                </span>
                            </div>
                            <div className="btn-add-meeting flex ">
                                <Button 
                                    text={"SCHEDULE"}
                                    isSecondary={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </ModalComponent>
        </div>
    );
}
export default MeetingModal;