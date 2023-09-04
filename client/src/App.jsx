import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import StartupPage from './Pages/StartupPage';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>      
        <Route path='/' element={<LandingPage />} />
        <Route path='/startup' element={<StartupPage />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
