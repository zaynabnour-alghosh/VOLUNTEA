import React from "react";
import './style.css';
import Button from "../../common/button";
import ModalComponent from "../../common/modal";
import Input from "../../common/input";
import { sendRequest } from "../../../../config/request";
import { useEffect ,useState} from "react";
const FeedbackModal=({showFeedModal , onRequestClose,id})=>{
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            height: 'fit-content',
            width: '30%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            borderRadius: '5px',
            padding:'20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',

           
        },
        overlay: {
            backgroundColor: 'rgba(0,0,0,0.0)',
            top: 0,
            left:0,
            right: 0,
            bottom: 0,
            display:'flex',
            justifyContent:'flex-end',
            width:'100%'
        }
    };
    const [feed, setFeed] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSendFeed = async () => {
        if (!feed) {
            setErrorMessage('Cannot send empty feedback.');
            setTimeout(() => {
                setErrorMessage('');
              }, 5000);
              return;
          }
          setErrorMessage('');
        const feedback=new FormData();
        feedback.append('feedback',feed);
        try {
            const response = await sendRequest({
            method:"POST",
            route: `volunteer/new-feedback/${id}`,
            body:feedback,
            })
            
        if (response) {
            console.log(response);
            setSuccess(true);
            onRequestClose();
        }
        } catch (error) {
            console.log(error);
        }
    };







    return(
        <div>
            <ModalComponent customStyles={customStyles} showModal={showFeedModal} onRequestClose={onRequestClose} >
                <div className="confirmation-modal-cotainer flex column center">
                    <div className="confirm-body fullwidth flex column gap-20 p-30 center">
                        <p>We greatly value your input and feedback!</p>
                        <Input  
                            type={"text"} 
                            placeholder={"Write your feedback.."}
                            value={feed}
                            onChange={(e)=>setFeed(e.target.value)}
                            />
                    </div>
                    <div className="confirm-actions fullwidth flex row gap-30 center p-10">
                        <Button
                            text={"Cancel"}
                            isPrimary={true}
                            medium={true}
                            onClick={()=>{onRequestClose();}}
                        />
                        <Button
                            text={"Send"}
                            isPrimary={true} 
                            medium={true}
                            onClick={handleSendFeed}
                            
                        />
                        </div>
                </div>
            </ModalComponent>
        </div>
    );
}
export default FeedbackModal;