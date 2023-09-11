import React from "react";
import './style.css';
import Sidebar from '../../common/sidebar';
import Input from "../../common/input";
import {icons} from "../../../icons.js";
const AdminDashboard=()=>{
    const tabs = [
        { icon: 'home', name: 'Dashboard', size: 32},
        { icon: 'task', name: 'Projects' , size: 32},
        { icon: 'people', name: 'Members', size: 32},
        { icon: 'chat', name: 'Messages', size: 32},
        { icon: 'notification', name: 'Nottifications',size: 32},
        { icon: 'stream', name: 'Stream', size: 32},
        { icon: 'profile', name: 'Profile', size: 32},
        { icon: 'logout', name: 'Logout', size: 32}       
    ];
    return(
        <div>
            <div className="admin-dash page light">
            <div className="admin-dash-container flex">
                <Sidebar tabs={tabs} />
                <div className="right-dash flex center ">
                        <Input
                            // label={"Name"}
                            icon={icons['home']}
                            placeholder={"type your name here"}
                            type={"textarea"}                                      
                        />
                    </div>
                </div>
            </div>
    </div>  
    );
}
export default AdminDashboard;