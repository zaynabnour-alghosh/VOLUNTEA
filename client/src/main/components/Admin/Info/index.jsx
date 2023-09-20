import React from "react";
import './style.css';
import Input from "../../common/input";
import Card from '../../common/card';
import RowCard from "../../common/rowcard";
import Button from "../../common/button";
import { useEffect ,useState} from "react";
import ImpactModal from "../../../../components/OrganizationDetails/ImpactModal";
import MissionModal from "../../../../components/OrganizationDetails/MissionModal";
import EventModal from "../../ui/EventModal";
import { sendRequest } from "../../../../config/request";
const Info=(orgId)=>{
    const [orgInfo, setOrgInfo] = useState(null);
    const [impacts, setImpacts] = useState([]);
    const [missions, setMissions] = useState([]);
    const [events, setEvents] = useState([]);
    const [selectedImpactToEdit, setSelectedImpactToEdit] = useState(null);
    const [selectedMissionToEdit, setSelectedMissionToEdit] = useState(null);
    const [selectedEventToEdit, setSelectedEventToEdit] = useState(null);
    
    const [isImpactModalOpen, setIsImpactModalOpen] = useState(false);
    const [isMissionModalOpen, setIsMissionModalOpen] = useState(false);
    const [isEventModalOpen, setIsEventModalOpen] = useState(false);

    const toggleImpactModal=()=>{
        setIsImpactModalOpen(!isImpactModalOpen);
    }
    const toggleMissionModal=()=>{
        setIsMissionModalOpen(!isMissionModalOpen);
    }
    const toggleEventModal=()=>{
        setIsEventModalOpen(!isEventModalOpen);
    }

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
    const handleEditImpact = (impact) =>()=> {
        setSelectedImpactToEdit(prevImpact => impact);
        toggleImpactModal();
    };
    const handleEditMission = (mission) =>()=> {
        setSelectedMissionToEdit(prevMission => mission);
        toggleMissionModal();
    };
    const handleEditEvent = (event) =>()=> {
        setSelectedEventToEdit(prevEvent => event);
        toggleEventModal();
    };

    const handleUpdateImpact=async(impact)=>{
        try{
            const response=await sendRequest({
                method:"POST",
                route:"/admin/edit-impact",
                body:impact,
                includeHeaders:true
            });
            if(response){
                console.log(response);
                setImpacts(
                    prevImpacts => prevImpacts.map
                    (impact => impact.id === response.data.id ? 
                        response.data : impact));

            }
        }catch(error){
            console.log(error)
        }
    };

    const handleUpdateMission=async(mission)=>{
        try{
            const response=await sendRequest({
                method:"POST",
                route:"/admin/edit-mission",
                body:mission,
                includeHeaders:true
            });
            if(response){
                console.log(response);
                setMissions(
                    prevMissions => prevMissions.map
                    (mission => mission.id === response.data.id ? 
                        response.data : mission));
            }
        }catch(error){
            console.log(error)
        }
    };
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
                                    value={orgInfo ? orgInfo.name : ""}
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
                                value={orgInfo ? orgInfo.description : ""}
                            />
                            </div>
                        </div>
                        <div className="org-info-logo">
                            <img src={orgInfo? `http://localhost:8000/storage/images/organizations/${ orgInfo.logo_url}`:'logo'} alt="logo" />
                        </div>
                    </div>
                </div>
                 <div className="org-impact pt-10 fullwidth">
                    <div><h3>Impacts</h3></div>
                    <hr/>
                    <div className="flex center pt- gap-40">
                    {impacts.map((impact, index) => (
                        <div key={index}>
                            <Card
                                id={impact.id}
                                key={index}
                                image={true}
                                title={impact.header}
                                src={`http://localhost:8000/storage/images/impacts/${impact.image_url}`}
                                desc={impact.description}
                                onClick={handleEditImpact(impact)}
                            />
                        </div>
                    ))}             
                    </div>
                </div>
                <div className="org-mission pt-10 fullwidth">
                    <div><h3>Missions</h3></div>
                    <hr/>
                    <div className="grid center pt-10 grid-container">
                    {missions.map((mission, index) => (
                        <div key={index}>
                            <RowCard
                            id={mission.id}
                            key={index}
                            className="grid-item"
                            title={mission.header}
                            desc={mission.description}
                            onClick={handleEditMission(mission)}
                            />
                        </div>
                    ))}                 
                    </div>

                </div>
                <div className="org-event pt-10 full width">
                    <div><h3>Events</h3></div>
                    <hr/>
                    <div className="flex center pt-10 gap-40">
                    {events.map((event, index) => (
                        <Card
                            id={event.id}
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
                                value={orgInfo ? orgInfo.location : ""}

                            />
                            <Input
                                label={"Mobile Number"}
                                placeholder={"mobile"}
                                type={"text"}
                                value={orgInfo ? orgInfo.phone : ""}

                            />
                            <Input
                                label={"Email"}
                                placeholder={"email address"}
                                type={"text"}
                                value={orgInfo ? orgInfo.email : ""}

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
                                value={orgInfo ? orgInfo.face_link : ""}

                            />
                            <Input
                                label={"Instagram"}
                                placeholder={"link"}
                                type={"text"}
                                value={orgInfo ? orgInfo.insta_link : ""}

                            />
                            <Input
                                label={"Whatsapp"}
                                placeholder={"link"}
                                type={"text"}
                                value={orgInfo ? orgInfo.whats_link : ""}

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
            {isImpactModalOpen && selectedImpactToEdit &&
                <ImpactModal 
                    showImpactModal={isImpactModalOpen}
                    onRequestClose={toggleImpactModal}
                    editImpact={handleUpdateImpact}
                    impact={selectedImpactToEdit}
                />
            }

            {isMissionModalOpen && selectedMissionToEdit &&
                <MissionModal 
                    showMissionModal={isMissionModalOpen}
                    onRequestClose={toggleMissionModal}
                    editMission={handleUpdateMission}
                    mission={selectedMissionToEdit}
                />
            }


        </div>
    );
}
export default Info;