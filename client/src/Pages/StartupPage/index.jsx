import NewSpace from "../../components/NewSpace";
import SearchLanding from "../../components/SearchLanding";
import { useState } from "react";
import './style.css';
const StartupPage=({setOrgInfo})=>{
    const[startUp,setStartUp]=useState(true);

    return (
        
        <div className="page startup">
            {startUp?
            (<NewSpace onToggle={()=>setStartUp(false)}/>)
            :
            (<SearchLanding setOrgInfo={setOrgInfo} onToggle={()=>setStartUp(true)} />)
            }
        </div>
    );
}
export default StartupPage;