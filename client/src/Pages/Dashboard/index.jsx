import Admin from "../Admin";
import Volunteer from "../Volunteer";
import React, { useEffect } from 'react';
import {useNavigate } from 'react-router-dom';

const Dashboard=()=>{
    const role = localStorage.getItem('role');
    const orgId=localStorage.getItem("organizationId");
    const navigate = useNavigate();

    useEffect(() => {
      if (role == '2') {
        navigate(`/voluntea/${orgId}/volunteer/dashboard`);
      }
      else if(role == '1'){
        navigate(`/voluntea/${orgId}/admin/dashboard`);
      }
    }, [navigate, orgId, role]);

    return(
        <div>
            {role =='1' && (
            <Admin orgId={orgId} /> 
          )}
          {role === '2' && (
            <Volunteer orgId={orgId} /> 
          )}
        </div>
    );
}
export default Dashboard;