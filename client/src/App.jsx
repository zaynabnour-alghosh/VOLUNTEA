import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>      
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
