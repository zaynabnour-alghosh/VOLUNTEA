import AdminDashboard from "../../main/components/Admin/Dashboard";
import { useParams } from 'react-router-dom';
import Admin from "../Admin";
import Volunteer from "../Volunteer";
const Dashboard=({ role })=>{
    const { org_id: orgId } = useParams();
    localStorage.setItem("orgId",orgId);
    return(
        <div>
            {role =='admin' && (
            <Admin orgId={orgId} /> 
          )}
          {role === 'volunteer' && (
            <Volunteer orgId={orgId} /> 
          )}
        </div>
    );
}
export default Dashboard;