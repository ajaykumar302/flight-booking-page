import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Navbar/Nav';
import Home from './Components/Home/Home';
import Flights from './Pages/Flights/Flights';
import Signup from './Components/Signup/Signup';
import Sigin from './Components/Signin/Sigin';
import Admin from './Pages/Admin/admin';
import Details from './Pages/Details/Details';

function App() {
  return (
    <>
    <div className='Navbar'>
     <Nav/>
    </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Signin' element={<Sigin/>}/>
        <Route path='/result' element={<Flights/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
