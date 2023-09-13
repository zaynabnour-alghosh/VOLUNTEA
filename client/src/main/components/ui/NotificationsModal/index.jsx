import "./style.css"
import ModalComponent from "../../common/modal";
const NotificationsModal=({showModal , toggleModal})=>{
     return(
        <ModalComponent showModal={showModal} onRequestClose={toggleModal}>
            <div>
               hello world
            </div>
        </ModalComponent>
    );
}
export default NotificationsModal;