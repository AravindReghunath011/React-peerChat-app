import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import CreateRoom from './components/CreateRoom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<LandingPage/>} />
      <Route path='/createRoom' exact element={<CreateRoom/>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
