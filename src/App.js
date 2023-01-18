import Nav from './component/Nav';
import './custom.css';
import {Route, Routes} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Skill from './component/Skill';
import Experience from './component/Experience';
import Contact from './component/Contact';
import Completion1 from "./component/Completion1";
import Completion2 from "./component/Completion2";
import Completion3 from "./component/Completion3";
import Completion4 from "./component/Completion4";
import Completion5 from "./component/Completion5";
import Completion6 from "./component/Completion6";

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

          <Route exact path='/completion1' element={<Completion1/>}/>
          <Route exact path='/completion2' element={<Completion2/>}/>
          <Route exact path='/completion3' element={<Completion3/>}/>
          <Route exact path='/completion4' element={<Completion4/>}/>
          <Route exact path='/completion5' element={<Completion5/>}/>
          <Route exact path='/completion6' element={<Completion6/>}/>
      </Routes>
    </div>
  );
}

export default App;
