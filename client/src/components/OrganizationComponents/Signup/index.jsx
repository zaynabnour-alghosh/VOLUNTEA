import React from "react";
import './style.css';
import { useLocation } from "react-router-dom";
import NewSpace from "../../NewSpace";
const SignUp=()=>{
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get("code");
    return(
        <div>
            <NewSpace volunteer={true} code={code}/>
        </div>
    );
}
export default SignUp;