import React from "react";
import './style.css';
import AvatarCard from "../../common/avatar";
import Button from "../../common/button";
import { sendRequest } from "../../../../config/request";

const OpportunityApplications=({app, oppId,setApp})=>{
    const acceptApp=async(app)=>{
        const data=new FormData();
        data.append('opp_id',oppId);
        data.append('applicant_id',app.id);
        console.log(oppId,app.id);
        try {
            const response = await sendRequest({
            method:"POST",
            route: 'admin/application/accept',
            body:data,
            })
        if (response) {
            console.log(response);
            setApp(prevApplications =>
                prevApplications.filter(application => application.id !== app.id)
              ); 
        }
        } catch (error) {
            console.log(error);
        }
    }

    const rejectApp=async(app)=>{
        const data=new FormData();
        data.append('opp_id',oppId);
        data.append('applicant_id',app.id);
        console.log(oppId,app.id);
        try {
            const response = await sendRequest({
            method:"POST",
            route: 'admin/application/reject',
            body:data,
            })
        if (response) {
            console.log(response);
            setApp(prevApplications =>
                prevApplications.filter(application => application.id !== app.id)
              ); 
        }
        } catch (error) {
            console.log(error);
        }
    }


    return(
        <div className="opp-applications-container gap-10 flex center column fullwidth mt-10">
            {app.map((a, index) => (
            <div className="opp-app-member flex center" key={index}>
                <AvatarCard
                    image={a.avatar?`http://localhost:8000/storage/images/profiles/${a.avatar}`:''}
                    top={a.name}
                    isWide={true}
                    link={<Button isLink={true} text={"View"}/>}  
                    accept={<Button text={"Accept"} active={true} onClick={()=>{acceptApp(a);}}/>}  
                    reject={<Button text={"Reject"} inactive={true} onClick={()=>{rejectApp(a);}}/>}  
                />
            </div>
         ))}
            
            
            
            
            
            

            {/* <div className="opp-app-member flex center">
                <AvatarCard
                    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXoPJYatB85JN3M9hP3wvJs1gYxgHm-0ZpA&usqp=CAU"}
                    top={"Mary Doe"}
                    isWide={true}
                    link={<Button isLink={true} text={"View"}/>}  
                    accept={<Button text={"Accept"} active={true}/>}  
                    reject={<Button text={"Reject"} inactive={true}/>}  
                />
            </div>

            <div className="opp-app-member flex center">
                <AvatarCard
                    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXoPJYatB85JN3M9hP3wvJs1gYxgHm-0ZpA&usqp=CAU"}
                    top={"Mary Doe"}
                    isWide={true}
                    link={<Button isLink={true} text={"View"}/>}  
                    accept={<Button text={"Accept"} active={true}/>}  
                    reject={<Button text={"Reject"} inactive={true}/>}  
                />
            </div>

            <div className="opp-app-member flex center">
                <AvatarCard
                    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXoPJYatB85JN3M9hP3wvJs1gYxgHm-0ZpA&usqp=CAU"}
                    top={"Mary Doe"}
                    isWide={true}
                    link={<Button isLink={true} text={"View"}/>}  
                    accept={<Button text={"Accept"} active={true}/>}  
                    reject={<Button text={"Reject"} inactive={true}/>}  
                />
            </div>
            
            <div className="opp-app-member flex center">
                <AvatarCard
                    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXoPJYatB85JN3M9hP3wvJs1gYxgHm-0ZpA&usqp=CAU"}
                    top={"Mary Doe"}
                    isWide={true}
                    link={<Button isLink={true} text={"View"}/>}  
                    accept={<Button text={"Accept"} active={true}/>}  
                    reject={<Button text={"Reject"} inactive={true}/>}  
                />
            </div> */}
        </div>
    );
}
export default OpportunityApplications;