import React from "react";
import './style.css';
import Button from './../../common/button';
import ModalComponent from "../../common/modal";
import Input from "../../common/input";
const OpportunityModal=({showOppModal , onRequestClose,edit})=>{
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
            <ModalComponent customStyles={customStyles} showModal={showOppModal} onRequestClose={onRequestClose} >
                <div className='opp-form-container flex fullWidth column'>
                    <div className="new-opp-header flex row spaceBetween">
                        <span>Add New Opportunity</span>
                        <Button 
                            text={edit? 'EDIT':'ADD'}
                            isPrimary={false}
                        />
                    </div>
                    <div className="new-opp-form-container">
                        <div className="opp-form-grid grid new-opp-grid-container">
                            <div className="opp-card-topic flex column new-opp-grid-item">
                                <span className="pt-10">
                                    <Input
                                        label={"Topic"}
                                        placeholder={"topic"}
                                        type={"text"}
                                        fill={true}
                                    />
                                </span>
                            </div>
                            <div className="opp-card-coord flex column new-opp-grid-item">
                                <span className="pt-10">
                                    <Input
                                        label={"Coordinator"}
                                        placeholder={"coordinator"}
                                        type={"text"}
                                        fill={true}
                                    />
                                </span>
                            </div>
                            <div className="opp-card-desc flex column new-opp-grid-item">
                                <span className="pt-10">
                                    <Input
                                        label={"Description"}
                                        placeholder={"decription"}
                                        type={"textarea"}
                                        fill={true}
                                    />
                                </span>
                            </div>
                            <div className="opp-card-coord flex column new-opp-grid-item">
                                <span className="pt-10">
                                    <Input
                                        label={"Tasks"}
                                        placeholder={"Tasks"}
                                        type={"text"}
                                        fill={true}
                                    />
                                </span>
                            </div>
                            <div className="opp-card-topic flex column new-opp-grid-item">
                            </div>
                            <div className="opp-card-coord flex column new-opp-grid-item">
                                <div className="add-task-list flex column">
                                    <div>Lorem ipsum dolor sit</div>
                                    <div>Lorem ipsum dolor sit</div>
                                    <div>Lorem ipsum dolor sit</div>
                                </div>
                            </div>
                            <div className="opp-card-location flex column new-opp-grid-item">
                                <span className="pt-10">
                                    <Input
                                        label={"Location"}
                                        placeholder={"location"}
                                        type={"text"}
                                        fill={true}
                                    />
                                </span>
                            </div>
                            <div className="opp-card-vacancies flex column new-opp-grid-item">
                                <span className="pt-10">
                                    <Input
                                        label={"Vacancies"}
                                        placeholder={"vacancies"}
                                        type={"text"}
                                        fill={true}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalComponent>
        </div>
    );
}
export default OpportunityModal;