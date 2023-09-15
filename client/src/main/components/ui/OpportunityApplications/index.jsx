import React from "react";
import './style.css';
import AvatarCard from "../../common/avatar";
import Button from "../../common/button";
const OpportunityApplications=()=>{
    return(
        <div className="opp-applications-container flex center column fullwidth mt-10">
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
        </div>
    );
}
export default OpportunityApplications;