import Nav from './component/Nav';
import './custom.css';
import {Route, Routes} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Skill from './component/Skill';
import Experience from './component/Experience';
import Contact from './component/Contact';

function App() {
  return (
    <div className="page">
      <Nav/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/skill' element={<Skill/>}/>
        <Route exact path='/experience' element={<Experience/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
