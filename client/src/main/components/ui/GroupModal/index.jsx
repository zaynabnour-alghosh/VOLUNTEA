import React from "react";
import './style.css';
import Button from './../../common/button';
import Input from "../../common/input";
import { useState } from "react";
import { sendRequest } from "../../../../config/request";
import ModalComponent from "../../common/modal";

const GroupModal=({showGroupModal , onRequestClose,members})=>{
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
    const [name, setName] = useState("");
    const [selectedMembers, setSelectedMembers] = useState([]);
    const [groupAdmin, setGroupAdmin] = useState(null);
    const [selectedAdminName, setSelectedAdminName] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('')
    const memberNamesById = {};
    members.forEach(member => {
        memberNamesById[member.id] = member.name;
    });
    const handleMemberSelection = (e) => {
        const selectedMemberIds = Array.from(e.target.selectedOptions, (option) => option.value);
        setSelectedMembers(selectedMemberIds);
        console.log('Selected Member IDs:', selectedMemberIds);
    };
    const makeAdmin=(memberId)=>{
        setGroupAdmin(memberId);
        setSelectedAdminName(memberNamesById[memberId] || '');
    }
    const handleCreateGroup=async()=>{
        if (!name ||!groupAdmin || members.length==0) {
            setErrorMessage('Please fill in all fields.');
            setTimeout(() => {
                setErrorMessage('');
              }, 5000);
              return;
          }
          setErrorMessage('');
        const orgId=localStorage.getItem("organizationId");
        const grpData=new FormData();
        grpData.append('name',name);
        grpData.append('member_admin',groupAdmin);
        grpData.append('org_id',orgId);
        selectedMembers.forEach((member,index) => {
            grpData.append(`members[${index}]`,member);
        });
        console.log(selectedMembers,selectedAdminName);
        try {
            const response = await sendRequest({
              method: 'POST',
              route: 'admin/new-group',
              body: grpData
            });
      
            if (response) {
                console.log(response)
                setSuccessMessage('SUCCESS');
                setTimeout(() => {
                setSuccessMessage('');
              }, 4000);
                onRequestClose();
            }
          } catch (error) {
            console.log('Error creating group:', error);
            setErrorMessage('Error creating group.');
            setTimeout(() => {
                setErrorMessage('');
              }, 5000);
          } 
    }

    return(
        <div >
            <ModalComponent customStyles={customStyles} showModal={showGroupModal} onRequestClose={onRequestClose} >
                <div className='group-form-container flex fullwidth column'>
                    <div className="new-group-header flex ">
                        <span>Create Group</span>
                    </div>
                    <div className="new-group-form-container flex column fullwidth">
                        <div className="group-form  flex column center">
                            <div className="group-name fullwidth flex column">
                                <span className="pt-10">
                                    <Input
                                        label={"Name"}
                                        placeholder={"group name"}
                                        type={"text"}
                                        fill={true}
                                        value={name}
                                        onChange={(e)=>setName(e.target.value)}
                                    />
                                </span>
                            </div>
                            <div className="group-member-combo flex fullwidth">
                                <span className=" fullwidth pt-10">
                                    <label htmlFor="groupMembers">Choose group members</label>
                                    <select 
                                        name="groupMembers"
                                        onChange={handleMemberSelection}  
                                        className="pt-10 fullwidth member-name-list" id="" multiple>
                                    {members.map((member, index) => (
                                    <option value={member.id} key={index}>{member.name}</option>
                                    ))}
                                    </select>
                                </span>
                            </div>
                            <div className="group-member-list-container fullwidth flex fullWidth">
                                <span className="g-member-list flex column gap-20">
                                {selectedMembers?.map((member, index) =>
                                    (
                                    <div key={index} onClick={() => makeAdmin(member)}>
                                        {memberNamesById[member] || ''}
                                    </div>
                                    )
                                )}
                                </span>
                            </div>
                            <div className="select-group-admin flex row gap-10">
                                <h3>Group Admin:</h3>
                                <span>{selectedAdminName}</span>
                            </div>
                            {errorMessage && (
                            <div className=" fullwidth flex center error-message">{errorMessage}</div>
                            )}
                            {successMessage && (
                            <div className=" fullwidth flex center success-message">{successMessage}</div>
                            )}
                            <div className="btn-add-group flex ">
                                <Button 
                                    text={"CREATE"}
                                    isSecondary={true}
                                    onClick={handleCreateGroup}
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