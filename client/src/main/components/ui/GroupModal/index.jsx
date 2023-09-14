import React from "react";
import './style.css';
import Button from './../../common/button';
import Input from "../../common/input";
import ModalComponent from "../../common/modal";

const GroupModal=({showGroupModal , onRequestClose})=>{
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
            <ModalComponent customStyles={customStyles} showModal={showGroupModal} onRequestClose={onRequestClose} >
                <div className='group-form-container flex fullWidth column'>
                    <div className="new-group-header flex ">
                        <span>Create Group</span>
                    </div>
                    <div className="new-group-form-container flex column fullWidth">
                        <div className="group-form  flex column center">
                            <div className="group-name fullwidth flex column">
                                <span className="pt-10">
                                    <Input
                                        label={"Name"}
                                        placeholder={"group name"}
                                        type={"text"}
                                        fill={true}
                                    />
                                </span>
                            </div>
                            <div className="group-member-combo flex fullwidth">
                                <span className=" fullwidth pt-10">
                                    <label htmlFor="groupMembers">Choose group members</label>
                                    <select name="groupMembers"  className=" pt-10 fullwidth member-name-list" id="" multiple>
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                </span>
                            </div>
                            <div className="group-member-list-container fullwidth flex fullWidth">
                                <span className="g-member-list flex column gap-20">
                                        <div>Member1 </div>
                                        <div>Member2 </div>
                                        <div>Member3 </div>
                                        <div >Member4 </div>
                                </span>
                            </div>
                            <div className="select-group-admin flex row gap-10">
                                <h3>Group Admin:</h3>
                                <span>Member2</span>
                            </div>
                            <div className="btn-add-group flex ">
                                <Button 
                                    text={"CREATE"}
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
export default GroupModal;