import React from "react";
import './style.css';
import Button from "../../common/button";
const OpportunityCard=()=>{
    return(
        <div className="opp-card-container flex column">
            <div className="opp-card-content pt-20 grid opp-grid-container">
                <div className="flex column opp-grid-item"></div>
                <div className="opp-card-top flex row gap-10 opp-grid-item">
                    <Button
                        text={"VIEW"}
                        isPrimary={true}                                      
                    />
                    <Button
                        text={"EDIT"}
                        isPrimary={true}                                      
                    />
                    <Button
                        text={"DELETE"}
                        isPrimary={true}                                      
                    />
                </div>

                <div className="opp-card-topic flex column opp-grid-item">
                    <h3>Topic</h3>
                    <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="opp-card-coord flex column opp-grid-item">
                    <h3>Coordinator</h3>
                    <span>Lorem ipsum </span>
                </div>
                <div className="opp-card-desc flex column opp-grid-item">
                    <h3>Description</h3>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut laoreet faucibus purus 
                        et suscipit. Maecenas ultricies ante sit amet
                        cursus venenatis. In auctor venenatis imperdiet. 
                    </span>
                </div>
                <div className="opp-card-task flex column opp-grid-item">
                    <h3>Tasks</h3>
                    <div className="opp-task-list flex column">
                        <div>Lorem ipsum dolor sit amet, consectetur</div>
                        <div>Lorem ipsum dolor sit amet, consectetur</div>
                        <div>Lorem ipsum dolor sit amet, consectetur</div>
                    </div>
                </div>
                <div className="opp-card-location flex column opp-grid-item">
                    <h3>Location</h3>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </span>
                </div>
                <div className="opp-card-vacancies flex column opp-grid-item">
                    <h3>Vacancies</h3>
                    <span>8 volunteers</span>
                </div>
            </div>
        </div>
    );
}
export default OpportunityCard;