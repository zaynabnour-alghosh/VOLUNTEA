import React from "react";
import './style.css';
import Sidebar from '../../common/sidebar';
import Input from "../../common/input";
import Button from "../../common/button";
import Card from "../../common/card";
import {icons} from "../../../icons.js";
import RowCard from "../../common/rowcard";
import AvatarCard from "../../common/avatar";
const Trial=()=>{
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
            <div className="admin-dash  light">
                <div className="admin-dash-container flex">
                    <Sidebar tabs={tabs}/>
                    <div className="right-dash flex column ">
                        <Input
                            icon={icons['lock']}
                            placeholder={"type your name here"}
                            type={"password"}
                        />
                        <Input
                            label={"Name"}
                            placeholder={"type your name here"}
                            type={"text"}
                        />
                        <Input
                            placeholder={"type your name here"}
                            type={"textarea"}
                        />
                        <Button
                            text={"Login"}
                            isPrimary={true}                                      
                        />
                        <Button
                            text={"Login"}
                            isPrimary={false}                                      
                        />
                        <Button
                            text={"+EVENT"}
                            isAction={true}                                      
                        />
                        <Button
                            text={"View"}
                            isLink={true}                                      
                        />
                        <Button
                            text={"View"}
                            isMain={true}
                            isWide={true}                                      
                        />
                    </div>
                    <div className="right-dash flex column">
                        Cards component will be here
                        <Card 
                        image={true}
                        title={"Impact on Climate Change"}
                        src={"https://www.pblworks.org/sites/default/files/inline-images/blog_planet-b.png"}
                        desc={'By restoring critical ecosystems, we have significantly contributed to mitigating climate change and preserving biodiversity.'}
                        />

                        <Card 
                        image={true}
                        title={"Earth Day Symposium"}
                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_rMs8oSJR3UOFJtam12ydE8CFGxdnamF4zg&usqp=CAU"}
                        desc={ "A virtual event featuring renowned environmentalists and scientists discussing climate change solutions and sustainable practices."}
                        dateState={true}
                        date={"April 22.2023"}                        
                        />

                        <RowCard 
                        title={"Opportunity Name"}
                        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et luctus orci, vitae maximus enim. Proin facilisis in libero vitae mattis"}
                        notice={"Issued by: Admin Name"}
                        date={"Jan 1st, 2022"}
                        isCertification={true}
                        />

                        <RowCard 
                        title={"Reforestation Revolution"}
                        desc={"CEI aims to restore and protect 100 million acres of deforested land by 2030,combating climate change and preserving vital ecosystems."}
                        />

                        <AvatarCard
                        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXoPJYatB85JN3M9hP3wvJs1gYxgHm-0ZpA&usqp=CAU"}
                        top={"Mary Doe"}
                        info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                        date={"April 22.2023"}                        
                        />

                        <AvatarCard
                        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXoPJYatB85JN3M9hP3wvJs1gYxgHm-0ZpA&usqp=CAU"}
                        top={"Mary Doe"}
                        link={<Button isLink={true} text={"View"}/>}                        
                        />
                        
                        <AvatarCard
                        top={"Reminder"}
                        info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                        time={"12:45"}
                        />
                    </div>
                </div>
            </div>
        </div>  
    );
}
export default Trial;