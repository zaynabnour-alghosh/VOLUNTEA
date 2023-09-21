import React from "react";
import './style.css';
import AvatarCard from "../../common/avatar";
const OpportunityFeedback=(feed)=>{
    // console.log(feed);
    const feedbackArray = feed.feed;
    return(
        <div className="opp-feedback-container gap-10 flex center column fullwidth mt-10">
            {feedbackArray.map((f, index) => (
                    <div key={index} className="opp-feed-member flex center">
                        <AvatarCard
                            image={f.avatar?`http://localhost:8000/storage/images/profiles/${f.avatar}`:''}
                            top={f.name}
                            info={f.feed}
                            date={f.formatted}
                            isWide={true}  
                        />
                    </div>
                ))}               
        </div>
    );
}
export default OpportunityFeedback;