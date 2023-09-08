import './App.css';
import { Routes,Route } from 'react-router-dom';
import LandingPage from './Main-section/LandigPage';
import Signup from "./UserIntractpage/Signup";
import { UserAuthContextProvider } from './context/UserAuthCountext';


function App() {

  

  return (
<>
<UserAuthContextProvider>
  <Routes>
       <Route path='/' element={<LandingPage/>}/>
       <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </UserAuthContextProvider>
    </>
  
   
  );
}

export default App;
