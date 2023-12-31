import React from "react";
import "./style.css";
import { sendRequest } from "../../../../config/request";
import ModalComponent from "../../common/modal";
import Header from "../../common/header";
import AvatarCard from "../../common/avatar";
import Button from "../../common/button";
const NotificationsModal=({showModal , onRequestClose,setNotifications,notifications})=>{
    const customStyles = {
        content: {
            left: '60%',
            height: '100%',
            width: '40%',
            position:'fixed',
            top:0,
            backgroundColor: '#fff',
            borderRadius: '0px',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center'
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
    const id=localStorage.getItem('organizationId');
    const handleClear=async()=>{
        try{
            const response=await sendRequest({
                method:"GET",
                route:`clear-notifications/${id}`,
                body:'',
                includeHeaders:true
            });
            if(response){
                console.log(response);
                setNotifications([]);
                onRequestClose();
            }
        }catch(error){
            console.log(error)
        }
    };
     return(
    <div className="flex notif-content">
        <ModalComponent showModal={showModal} customStyles={customStyles} onRequestClose={onRequestClose}>
            <div className="notif-container flex spaceAround">
              <Header
                title={'NOTIFICATIONS'}
              />
              <div className="clear-notif">
                <Button text={"Clear All"} inactive={true} medium={true} onClick={handleClear}/>
              </div>
            </div>
            <div className="notif-cards-container flex fullWidth column gap-10">
            {notifications.map((n, index) => (
                        <div key={index}>
                            <AvatarCard
                                top={n.topic}
                                info={n.content}
                                time={n.time}
                                bg={true}
                            />
                            
                        </div>
                    ))}
                
                {/* <AvatarCard
                    top={"Reminder"}
                    info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    time={"12:45"}
                    bg={true}
                />
                <AvatarCard
                    top={"Reminder"}
                    info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    time={"12:45"}
                    bg={true}
                />
                <AvatarCard
                    top={"Reminder"}
                    info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    time={"12:45"}
                    bg={true}
                />
                <AvatarCard
                    top={"Reminder"}
                    info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    time={"12:45"}
                    bg={true}
                /> */}
            </div>

        </ModalComponent>
    </div>
        
    );
}
export default NotificationsModal;