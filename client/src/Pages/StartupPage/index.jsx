import NewSpace from "../../components/NewSpace";
import SearchLanding from "../../components/SearchLanding";
import { useState } from "react";
import './style.css';
const StartupPage=({setOrgInfo,setImpacts,setMissions,setEvents,setAll})=>{
    const[startUp,setStartUp]=useState(true);
    return (
        
        <div className="page startup">
            {startUp?
            (<NewSpace onToggle={()=>setStartUp(false)}/>)
            :
            (<SearchLanding 
                setAll={setAll}
                setOrgInfo={setOrgInfo} 
                setEvents={setEvents}
                setMissions={setMissions}
                setImpacts={setImpacts}
                onToggle={()=>setStartUp(true)} />)
            }
        </div>
    );
}
export default StartupPage;