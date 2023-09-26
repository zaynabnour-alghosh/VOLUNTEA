import React from "react";
import './style.css';
import AvatarCard from "../../common/avatar";
const FeedbackList=({feed})=>{
    return(
        <div className="opp-feedback-container gap-10 flex center column fullwidth mt-10">
             {feed.map((f, index) => (
                <div className="opp-feed-member flex center" key={index}>
                    <AvatarCard
                        notice={f.topic}
                        image={`http://localhost:8000/storage/images/profiles/${f.profile}`}
                        top={f.name}
                        info={f.feedback}
                        date={f.created}
                        isWide={true}                        
                    />
                </div>
            ))}
        </div>
    );
}
export default FeedbackList;