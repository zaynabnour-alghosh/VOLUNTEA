import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import StartupPage from './Pages/StartupPage';
import Login from './components/Login';
import OrganizationLanding from './Pages/OrganizationLanding';
import './App.css';
import { useState } from 'react';
import InformationForm from './components/OrganizationDetails/InformationForm';
import Volunteer from './Pages/Volunteer';
import PersonalInformation from './components/PersonalInformation';
import Dashboard from './Pages/Dashboard';
import SignUp from './components/OrganizationComponents/Signup';
import E404 from './Pages/Errors/E404';
import E401 from './Pages/Errors/E401';

function App() {
  const [orgInfo,setOrgInfo]=useState(null);
  const [events,setEvents]=useState(null);
  const [missions,setMissions]=useState(null);
  const [impacts,setImpacts]=useState(null);
  const[all,setAll]=useState(null);
  return (
    <BrowserRouter>
      <Routes>      
        <Route path='/' element={<LandingPage />} />
        <Route path='/startup' element={<StartupPage setAll={setAll} setOrgInfo={setOrgInfo} setImpacts={setImpacts} setMissions={setMissions} setEvents={setEvents}/>} />
        <Route path='/personal-info' element={<PersonalInformation />} />
        <Route path='/fill-organization-info' element={<InformationForm />} />

        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />

        <Route path='/voluntea/organization/:org_name' element={<OrganizationLanding all={all} orgInfo={orgInfo} events={events} missions={missions} impacts={impacts}/>} />
        <Route path='/voluntea/:org_id/admin/dashboard' element={<Dashboard role="admin"/>} />
        <Route path='/voluntea/:org_id/volunteer/dashboard' element={<Dashboard role="volunteer"/>} />

        <Route path="/e401" element={<E401 />} />
				<Route path="*" element={<E404 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
