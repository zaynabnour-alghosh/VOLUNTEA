import React from "react";
import './style.css';
import { useState } from "react";
import { useParams } from 'react-router-dom';

import Button from './../../common/button';
import ModalComponent from "../../common/modal";
import Input from "../../common/input";
import { sendRequest } from "../../../../config/request";
const OpportunityModal=({showOppModal , onRequestClose,edit,opp,setOpportunities,opportunities})=>{
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
    const { org_id: orgId } = useParams();
    console.log(orgId);
    const [topic, setTopic] = useState(opp ? opp.topic : "");
    const [description, setDescription] = useState(opp ? opp.description : "");
    const [date, setDate] = useState("");

    const [location, setLocation] = useState(opp ? opp.location : "");
    const [nbVolunteers, setNbVolunteers] = useState(opp ? opp.location : "");
    const [tasks, setTasks] = useState(opp ? opp.tasks : []);
    const [task, setTask] = useState('');
    
    const handleTaskChange = () => {        
        const newTask =task.trim();
        if (newTask) {
            setTasks([...tasks, newTask]);
            setTask('');
          }
      };


    const add=async()=>{
        const oppData=new FormData();
        oppData.append('topic',topic);
        oppData.append('description',description);
        oppData.append('opportunity_date',date);
        oppData.append('location',location);
        oppData.append('nb_volunteers',parseInt(nbVolunteers));
        oppData.append('org_id',orgId);
        tasks.forEach((task,index) => {
            oppData.append(`tasks[${index}]`,task);
        });
        console.log(date);
        try {
            const response = await sendRequest({
              method: 'POST',
              route: 'admin/opportunity',
              body: oppData
            });
      
            if (response) {
                console.log(response)
                
                setOpportunities(prevOpportunities => [...prevOpportunities, response.data]);
                onRequestClose();
            }
          } catch (error) {
            console.log('Error adding opportunity:', error);
          } 
       
    }

    
    
    return(
        <div >
            <ModalComponent customStyles={customStyles} showModal={showOppModal} onRequestClose={onRequestClose} >
                <div className='opp-form-container flex fullWidth column'>
                    <div className="new-opp-header flex row spaceBetween">
                        <span>Add New Opportunity</span>
                        <Button 
                            text={edit? 'EDIT':'ADD'}
                            isSecondary={true}
                            medium={true}
                            onClick={add}
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
                                        value={topic}
                                        onChange={(e)=>setTopic(e.target.value)}
                                    />
                                </span>
                            </div>
                            <div className="opp-card-coord flex column new-opp-grid-item">
                                <span className="pt-10">
                                <Input
                                        label={"Date"}
                                        type={"date"}
                                        fill={true}
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
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
                                        value={description}
                                        onChange={(e)=>setDescription(e.target.value)}
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
                                        value={task}
                                        onChange={(e)=>setTask(e.target.value)}
                                        onKeyDown={handleTaskChange}
                                        
                                    />
                                </span>
                            </div>
                            <div className="opp-card-topic flex column new-opp-grid-item">
                                
                            </div>
                            <div className="opp-card-coord flex column new-opp-grid-item">
                                <div className="add-task-list flex column">
                                {tasks.map((task, index) => (
                                <div key={index}>{task}</div>
                                ))}
                                </div>
                            </div>
                            <div className="opp-card-location flex column new-opp-grid-item">
                                <span className="pt-10">
                                    <Input
                                        label={"Location"}
                                        placeholder={"location"}
                                        type={"text"}
                                        fill={true}
                                        value={location}
                                        onChange={(e)=>setLocation(e.target.value)}
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
                                        value={nbVolunteers}
                                        onChange={(e)=>setNbVolunteers(e.target.value)}
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