import React from "react";
import './style.css';
import AvatarCard from "../../common/avatar";
const OpportunityFeedback=()=>{
    return(
        <div className="opp-feedback-container gap-10 flex center column fullwidth mt-10">
            <div className="opp-feed-member flex center">
                <AvatarCard
                    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXoPJYatB85JN3M9hP3wvJs1gYxgHm-0ZpA&usqp=CAU"}
                    top={"Mary Doe"}
                    info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    date={"April 22.2023"}
                    isWide={true}                        
                />
            </div>

            <div className="opp-feed-member flex center">
                <AvatarCard
                    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXoPJYatB85JN3M9hP3wvJs1gYxgHm-0ZpA&usqp=CAU"}
                    top={"Mary Doe"}
                    info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    date={"April 22.2023"}
                    isWide={true}                        
                />
            </div>

            <div className="opp-feed-member flex center">
                <AvatarCard
                    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXoPJYatB85JN3M9hP3wvJs1gYxgHm-0ZpA&usqp=CAU"}
                    top={"Mary Doe"}
                    info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    date={"April 22.2023"}
                    isWide={true}                        
                />
            </div>

            <div className="opp-feed-member flex center">
                <AvatarCard
                    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXoPJYatB85JN3M9hP3wvJs1gYxgHm-0ZpA&usqp=CAU"}
                    top={"Mary Doe"}
                    info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    date={"April 22.2023"}
                    isWide={true}                        
                />
            </div>
            
            <div className="opp-feed-member flex center">
                <AvatarCard
                    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXoPJYatB85JN3M9hP3wvJs1gYxgHm-0ZpA&usqp=CAU"}
                    top={"Mary Doe"}
                    info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    date={"April 22.2023"}
                    isWide={true}                        
                />
            </div>
        </div>
    );
}
export default OpportunityFeedback;