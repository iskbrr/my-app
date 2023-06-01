import './App.css';
import { Home } from './screens/Home';
import { Ressources } from './screens/Ressources';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Contact } from './screens/Contact';
import { Box } from './screens/Box';

function App() {
  return (
    <div className='container mt-10'> 
      <header className='mb-5'>
        <img className='w-20' src='/images/BoxOut.png' alt='Logo de BoxOut'/>
        <nav className='flex justify-between'>
          <NavLink style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/' className="text-[white] hover:bg-[gray]">SchoolLife</NavLink><br></br>
          <NavLink style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/télécharger' className="text-[white] hover:bg-[gray]">Télécharger</NavLink><br></br>
          <NavLink style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/contact' className="text-[white] hover:bg-[gray]">Nous Contacter</NavLink>
          <NavLink style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/about' className="text-[white] hover:bg-[gray]">BoxOut</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path='/' element= { <Home/>}/>
        <Route path='/télécharger' element= { <Ressources/>}/>
        <Route path='/contact' element= { <Contact/>}/>
        <Route path='/about' element= { <Box/>}/>

      </Routes>
      <footer>

      </footer>
    </div>
  );
}

export default App;
