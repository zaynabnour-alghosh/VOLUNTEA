import React from "react";
import "./style.css";
import ModalComponent from "../../common/modal";
import Header from "../../common/header";
import AvatarCard from "../../common/avatar";
const NotificationsModal=({showModal , toggleModal})=>{
     return(
    <div className="flex notif-content">
        <ModalComponent showModal={showModal} onRequestClose={toggleModal}>
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