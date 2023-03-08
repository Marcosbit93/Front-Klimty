import './App.css';
import Auth from '../src/components/Auth'
import { Route, Routes } from 'react-router';
import { Navbar } from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/auth' element={<Auth/>}/> 
        <Route path='/profile' element={<Profile/>}/>
      </Routes>  
    </div>
  );
}

export default App;
