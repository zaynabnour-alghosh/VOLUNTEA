import React from "react";
import './style.css';
import Input from "../../common/input";
import Card from '../../common/card';
import RowCard from "../../common/rowcard";
import Button from "../../common/button";
import orgLogo from '../../../../images/org-logo.png';

const Info=()=>{
    return(
        <div className="edit-org-info flex wrap">
            <div className="admin-org-info-container flex column">
                <div className="base-org-info  flex wrap column pt-20 fullwidth">
                    <div><h3>Basic Info</h3></div>
                    <hr/>
                    <div className="org-info-form flex row spaceBetween">
                        <div className="flex column">
                            <div className="flex row gap-10 pt-20">
                                <Input
                                    label={"Orgainzation"}
                                    placeholder={"Organization Name"}
                                    type={"text"}
                                />
                                <Input
                                    label={"Logo"}
                                    placeholder={"Choose Logo"}
                                    type={"file"}
                                />                            
                            </div>
                            <div>
                            <Input
                                label={"Description"}
                                placeholder={"Type Here ..."}
                                type={"textarea"}
                                className="fullwidth"
                                fill={true}
                            />
                            </div>
                        </div>
                        <div className="org-info-logo">
                            <img src={orgLogo} alt="logo" />
                        </div>
                    </div>
                </div>
                 <div className="org-impact pt-10 fullwidth">
                    <div><h3>Impacts</h3></div>
                    <hr/>
                    <div className="flex center pt- gap-40">
                        <Card 
                            image={true}
                            title={"Impact on Climate Change"}
                            src={"https://www.pblworks.org/sites/default/files/inline-images/blog_planet-b.png"}
                            desc={'By restoring critical ecosystems, we have significantly contributed to mitigating climate change and preserving biodiversity.'}
                        />
                        <Card 
                            image={true}
                            title={"Impact on Climate Change"}
                            src={"https://www.pblworks.org/sites/default/files/inline-images/blog_planet-b.png"}
                            desc={'By restoring critical ecosystems, we have significantly contributed to mitigating climate change and preserving biodiversity.'}
                        />
                        <Card 
                            image={true}
                            title={"Impact on Climate Change"}
                            src={"https://www.pblworks.org/sites/default/files/inline-images/blog_planet-b.png"}
                            desc={'By restoring critical ecosystems, we have significantly contributed to mitigating climate change and preserving biodiversity.'}
                        />                 
                    </div>
                </div>
                <div className="org-mission pt-10 fullwidth">
                    <div><h3>Missions</h3></div>
                    <hr/>
                    <div className="grid center pt-10 grid-container">
                        <RowCard 
                            className="grid-item"
                            title={"Reforestation Revolution"}
                            desc={"CEI aims to restore and protect 100 million acres of deforested land by 2030,combating climate change and preserving vital ecosystems."}
                        />
                        <RowCard 
                            className="grid-item"
                            title={"Reforestation Revolution"}
                            desc={"CEI aims to restore and protect 100 million acres of deforested land by 2030,combating climate change and preserving vital ecosystems."}
                        />
                        <RowCard 
                            className="grid-item"
                            title={"Reforestation Revolution"}
                            desc={"CEI aims to restore and protect 100 million acres of deforested land by 2030,combating climate change and preserving vital ecosystems."}
                        />
                         <RowCard 
                            className="grid-item"
                            title={"Reforestation Revolution"}
                            desc={"CEI aims to restore and protect 100 million acres of deforested land by 2030,combating climate change and preserving vital ecosystems."}
                        />
                        <RowCard 
                            className="grid-item"
                            title={"Reforestation Revolution"}
                            desc={"CEI aims to restore and protect 100 million acres of deforested land by 2030,combating climate change and preserving vital ecosystems."}
                        />
                        <RowCard 
                            className="grid-item"
                            title={"Reforestation Revolution"}
                            desc={"CEI aims to restore and protect 100 million acres of deforested land by 2030,combating climate change and preserving vital ecosystems."}
                        />                 
                    </div>

                </div>
                <div className="org-event pt-10 full width">
                    <div><h3>Events</h3></div>
                    <hr/>
                    <div className="flex center pt-10 gap-40">
                        <Card 
                            image={true}
                            title={"Earth Day Symposium"}
                            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_rMs8oSJR3UOFJtam12ydE8CFGxdnamF4zg&usqp=CAU"}
                            desc={ "A virtual event featuring renowned environmentalists and scientists discussing climate change solutions and sustainable practices."}
                            dateState={true}
                            date={"April 22.2023"}                        
                        />
                        <Card 
                            image={true}
                            title={"Earth Day Symposium"}
                            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_rMs8oSJR3UOFJtam12ydE8CFGxdnamF4zg&usqp=CAU"}
                            desc={ "A virtual event featuring renowned environmentalists and scientists discussing climate change solutions and sustainable practices."}
                            dateState={true}
                            date={"April 22.2023"}                        
                        />
                        <Card 
                            image={true}
                            title={"Earth Day Symposium"}
                            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_rMs8oSJR3UOFJtam12ydE8CFGxdnamF4zg&usqp=CAU"}
                            desc={ "A virtual event featuring renowned environmentalists and scientists discussing climate change solutions and sustainable practices."}
                            dateState={true}
                            date={"April 22.2023"}                        
                        />                 
                    </div>
                </div>
                <div className="org-details flex row spaceBetween pt-20">
                    <div className="org-contact">
                        <div><h3>Contact Info</h3></div>
                        <hr/>
                        <div className="flex column pt-10">
                            <Input
                                label={"Location"}
                                placeholder={"location"}
                                type={"text"}
                            />
                            <Input
                                label={"Mobile Number"}
                                placeholder={"mobile"}
                                type={"text"}
                            />
                            <Input
                                label={"Email"}
                                placeholder={"email address"}
                                type={"text"}
                            />                 
                        </div>
                    </div>
                    <div className="org-soials">
                    <div><h3>Socials</h3></div>
                        <hr/>
                        <div className="flex column pt-10">
                            <Input
                                label={"Facebook"}
                                placeholder={"link"}
                                type={"text"}
                            />
                            <Input
                                label={"Instagram"}
                                placeholder={"link"}
                                type={"text"}
                            />
                            <Input
                                label={"Whatsapp"}
                                placeholder={"email linkaddress"}
                                type={"text"}
                            />                 
                        </div>
                    </div>
                </div>
                <div className="flex center">
                    <Button
                        text={"Edit"}
                        isPrimary={false}                                      
                    />
                </div>
            </div>
        </div>
    );
}
export default Info;