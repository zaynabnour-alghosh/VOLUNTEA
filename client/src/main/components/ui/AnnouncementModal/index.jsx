import React from "react";
import './style.css';
import Button from './../../common/button';
import ModalComponent from "../../common/modal";
import Input from "../../common/input";
const AnnouncementModal=({showModal , onRequestClose})=>{
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            height: 'fit-content',
            width: '60%',
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
                <div className='new-announcement-form-container flex fullwidth column'>
                    <div className="new-announcement-header flex row spaceBetween">
                        <span>Announce Something</span>
                    </div>
                    <div className="new-announcement-form-container">
                        <div className="new-announcement-form-grid grid new-announcement-grid-container">
                            <div className="announcement-card-topic flex column new-announcement-grid-item">
                                <span className="pt-10">
                                    <label htmlFor="header">Header</label>
                                    <select name="header" id="" className="pt-10 fullwidth  select header-list">
                                        <option value="">Event</option>
                                        <option value="">Opportunity</option>
                                        <option value="">Reminder</option>
                                        <option value="">Updates</option>
                                        <option value="">Emergency</option>
                                        <option value="">Feedbackent</option>
                                        <option value="">Resources</option>
                                        <option value="">Others</option>
                                    </select>
                                </span>
                            </div>
                            <div className="announcement-card-coord flex column new-announcement-grid-item">
                                <span className="pt-10">
                                    <Input
                                        label={"Topic"}
                                        placeholder={"topic"}
                                        type={"text"}
                                        fill={true}
                                    />
                                </span>
                            </div>
                            <div className="announcement-card-desc flex column new-announcement-grid-item">
                                <span className="pt-10">
                                    <Input
                                        label={"Description"}
                                        placeholder={"decription"}
                                        type={"textarea"}
                                        fill={true}
                                    />
                                </span>
                            </div>
                            <div className="announcement-card-coord flex column new-announcement-grid-item">
                                <span className="pt-10">
                                    <Input
                                        label={"Date"}
                                        type={"date"}
                                        fill={true}
                                    />
                                </span>
                            </div>
                            <div className="announcement-card-location flex column new-announcement-grid-item">
                                <span className="pt-10">
                                    <Input
                                        label={"From"}
                                        type={"time"}
                                        fill={true}
                                    />
                                </span>
                            </div>
                            <div className="announcement-card-vacancies flex column new-announcement-grid-item">
                                <span className="pt-10">
                                    <Input
                                        label={"To"}
                                        type={"time"}
                                        fill={true}
                                    />
                                </span>
                            </div>
                        </div>
                        <div className="btn-add-announcement flex fullwidth center">
                            <Button 
                                text={"Announce"}
                                isSecondary={true}
                            />
                        </div>
                    </div>
                </div>
            </ModalComponent>
        </div>
    );
}
export default AnnouncementModal;

