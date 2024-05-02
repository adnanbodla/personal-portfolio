import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import VerticleNavbar from './components/VerticleNavbar';
import { Route, Routes } from 'react-router-dom';
import Pages from './screens/Pages';
import Dashboard from './screens/Dashboard';
import Table from './screens/Table'

import Charts from './screens/Charts'


function App() {
  return (
    <>


    <div className=' ' >
    <Navbar />
  <div className='d-flex'>
  <VerticleNavbar />
  <div style={{height:'400px', width:'90%'}}>
  <Routes  >
<Route path='/dashboard' element={<Dashboard />}/>

<Route path='/pages' element={<Pages />}/>
<Route path='/charts' element={<Charts/>}/>
<Route path='/table' element={<Table />}/>

</Routes>
  </div>
  </div>

    </div>

    </>

  
    
  );
}

export default App;
