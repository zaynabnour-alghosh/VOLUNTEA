import AdminDashboard from "../../main/components/Admin/Dashboard";
import { useParams } from 'react-router-dom';
const Admin=()=>{
    const { org_id: orgId } = useParams();
    return(
        <div>
            <AdminDashboard />
        </div>
    );
}
export default Admin;