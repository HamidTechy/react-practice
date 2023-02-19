import './App.css';
import AsynApi from './components/AsynApi';
import {Routes,Route} from "react-router-dom"
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Contactus from './pages/Contactus';
import Aboutus from './pages/Aboutus';
import Signup from './pages/Signup';
import StateHook from './components/StateHook';


function App() { 
    return(
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/contactus" element={<Contactus/>}> </Route>
          <Route path="/aboutus" element={<Aboutus/>}> </Route>
          <Route path="/signup" element={<Signup/>}> </Route>
          <Route path="statehook" element={<StateHook/>}></Route>
        </Routes>
      </>
    );
}

export default App;
