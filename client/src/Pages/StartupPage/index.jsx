import NewSpace from "../../components/NewSpace";
import SearchLanding from "../../components/SearchLanding";
import { useState } from "react";
import './style.css';
const StartupPage=()=>{
    const[startUp,setStartUp]=useState(true);

    return (
        
        <div className="page startup">
            {startUp?
            (<NewSpace onToggle={()=>setStartUp(false)}/>)
            :
            (<SearchLanding onToggle={()=>setStartUp(true)} />)
            }
        </div>
    );
}
export default StartupPage;