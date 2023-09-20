import React from "react";
import './style.css';
import Input from "../../common/input";
import Card from '../../common/card';
import RowCard from "../../common/rowcard";
import Button from "../../common/button";
import orgLogo from '../../../../images/org-logo.png';
import { useEffect ,useState} from "react";
import { sendRequest } from "../../../../config/request";
const Info=(orgId)=>{
    const [orgInfo, setOrgInfo] = useState(null);
    const [impacts, setImpacts] = useState([]);
    const [missions, setMissions] = useState([]);
    const [events, setEvents] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    useEffect(() => {
        const getOrg = async () => {
			try {
				const response = await sendRequest({
                method:"GET",
                route: `organization-info/1`,
                body:" ",
                })
                
			if (response) {
                console.log(response.data);
                setOrgInfo(response.data);

                console.log(response.impacts);
                setImpacts(response.impacts);

                console.log(response.missions);
                setMissions(response.missions);

                console.log(response.events);
                setEvents(response.events);
			}
			} catch (error) {
				console.log(error);
			}
		} 
        getOrg();
    }, []);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };
    return(
        <div className="edit-org-info flex wrap">
            <div className="admin-org-info-container flex column">
                <div className="base-org-info  flex wrap column pt-20 fullwidth">
                    <div><h3>Basic Info</h3></div>
                    <hr/>
                    <div className="org-info-form flex row spaceBetween">
                        <div className="flex column gap-10">
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
                    {impacts.map((impact, index) => (
                        <Card
                            key={index}
                            image={true}
                            title={impact.header}
                            src={`http://localhost:8000/storage/images/impacts/${impact.image_url}`}
                            desc={impact.description}
                        />
                    ))}             
                    </div>
                </div>
                <div className="org-mission pt-10 fullwidth">
                    <div><h3>Missions</h3></div>
                    <hr/>
                    <div className="grid center pt-10 grid-container">
                    {missions.map((mission, index) => (
                        <RowCard
                            key={index}
                            className="grid-item"
                            title={mission.title}
                            desc={mission.description}
                        />
                    ))}                 
                    </div>

                </div>
                <div className="org-event pt-10 full width">
                    <div><h3>Events</h3></div>
                    <hr/>
                    <div className="flex center pt-10 gap-40">
                    {events.map((event, index) => (
                        <Card
                            key={index}
                            image={true}
                            title={event.title}
                            src={`http://localhost:8000/storage/images/events/${event.image_url}`}
                            desc={event.description}
                            dateState={true}
                            date={event.event_date}
                        />
                    ))}             
                    </div>
                </div>
                <div className="org-details flex row spaceBetween pt-20">
                    <div className="org-contact">
                        <div><h3>Contact Info</h3></div>
                        <hr/>
                        <div className="flex column gap-10 pt-10">
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
                        <div className="flex column gap-10 pt-10">
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
                        isSecondary={true}
                        medium={true}                                      
                    />
                </div>
            </div>
        </div>
    );
}
export default Info;