import React from "react";
import "./style.css";
import ModalComponent from "../../common/modal";
import Header from "../../common/header";
import AvatarCard from "../../common/avatar";
const NotificationsModal=({showModal , onRequestClose})=>{
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
            justifyContent: 'center',
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
     return(
    <div className="flex notif-content">
        <ModalComponent showModal={showModal} customStyles={customStyles} onRequestClose={onRequestClose}>
            <div className="notif-container flex spaceAround">
              <Header
                title={'NOTIFICATIONS'}
              />
              <div className="clear-notif">
                <span className="clear-all"> Clear All</span>
              </div>
            </div>
            <div className="notif-cards-container flex fullWidth column gap-10">
                <AvatarCard
                    top={"Reminder"}
                    info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    time={"12:45"}
                />
                <AvatarCard
                    top={"Reminder"}
                    info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    time={"12:45"}
                />
                <AvatarCard
                    top={"Reminder"}
                    info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    time={"12:45"}
                />
                <AvatarCard
                    top={"Reminder"}
                    info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    time={"12:45"}
                />
                <AvatarCard
                    top={"Reminder"}
                    info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    time={"12:45"}
                />
            </div>

        </ModalComponent>
    </div>
        
    );
}
export default NotificationsModal;