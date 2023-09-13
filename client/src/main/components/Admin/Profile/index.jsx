import React from "react";
import './style.css';
import Input from "../../common/input";
import Button from "../../common/button";
const Profile=()=>{
    return(
        <div className="profile-main-content fullwidth ">
            <div className="profile-container fullWidth flex column">
                <div className="profile-top-container   flex column spaceBetween">
                    <div className="profile-avatar-container flex row spaceBetween">
                        <div className="profile-avatar-img flex row ">
                            <div className="profile-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXoPJYatB85JN3M9hP3wvJs1gYxgHm-0ZpA&usqp=CAU" alt="prfile" />
                            </div>
                            <input type="file" />
                        </div>
                        <div className=" profile-edit">
                            <Button 
                                text={"Edit"}
                                isPrimary={true}
                            />
                        </div>
                    </div>
                    <div className="profile-form-container  flex row fullWidth gap-20">
                        <div className="profile-col1 flex column gap-20 fullWidth">
                            <div className="profile-col1-row1 gap-20 flex row">
                                <div className="profile-form-row flex gap-10 column">
                                    <Input
                                        label={"First Name"}
                                        placeholder={"first name"}
                                        type={"text"}
                                    />
                                    <Input
                                        label={"Gender"}
                                        placeholder={"first gender"}
                                        type={"text"}
                                    />
                                    <Input
                                        label={"Email"}
                                        placeholder={"Email"}
                                        type={"email"}
                                    />
                                    <Input
                                        label={"Address"}
                                        placeholder={"address"}
                                        type={"text"}
                                    />
                                </div>
                                <div className="profile-form-row flex gap-10 column">
                                    <Input
                                        label={"Last Name"}
                                        placeholder={"last name"}
                                        type={"text"}
                                    />
                                    <Input
                                        label={"Birth Date"}
                                        placeholder={"date of birth"}
                                        type={"date"}
                                    />
                                    <Input
                                        label={"Phone Number"}
                                        placeholder={"phone"}
                                        type={"text"}
                                    />
                                    <Button
                                        className="btn-schedule"
                                        text={"View Schedule"}
                                        isPrimary={true}  
                                    />
                                </div>
                            </div>
                            <div className="profile-description">
                                <Input
                                label={"Description "}
                                placeholder={"description"}
                                type={"textarea"}
                                fill={true}
                            /> 
                            </div>
                        </div>
                        <div className="profile-col2 flex  fullWidth column">
                            <div className="profile-form-skills flex fullWidth">
                                <Input
                                    label={"Skills"}
                                    placeholder={"skills"}
                                    type={"text"}
                                />
                            </div>
                            <div className="profile-form-list flex">
                                <ul className="skill-list flex column gap-10">
                                    <li>Lorem ipsum dolor sit</li>
                                    <li>Lorem ipsum dolor sit</li>
                                    <li>Lorem ipsum dolor sit</li>
                                    <li>Lorem ipsum dolor sit</li>
                                    <li>Lorem ipsum dolor sit</li>
                                    <li>Lorem ipsum dolor sit</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile;