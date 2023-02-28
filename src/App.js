import './App.css';
import AsynApi from './components/AsynApi';
import {Routes,Route} from "react-router-dom"
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import StateHook from './pages/StateHook';
import UserDetail from './components/UserDetail';
import ParamHook from './pages/ParamHook';
import EffectHook from './pages/EffectHook';


function App() { 
    return(
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/effecthook" element={<EffectHook/>}> </Route>
          <Route path ="/paramhook" element={<ParamHook />}>
          <Route path =":id" element={<UserDetail />}></Route>
          </Route>
          {/* <Route path ="/users/2" element={<UserDetail />}></Route>
          <Route path ="/users/3" element={<UserDetail />}></Route> */}
          <Route path="/signup" element={<Signup/>}> </Route>
          <Route path="statehook" element={<StateHook/>}></Route>
        </Routes>
      </>
    );
}

export default App;
