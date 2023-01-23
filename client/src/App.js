import Home from "./pages/home/Home";
// import Login2 from "./pages/login2/Login2";
// import Register2 from "./pages/register2/Register2";
import Profile from "./pages/profile/Profile";
import { AuthContext } from "./context/AuthContext";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import {
  BrowserRouter as Router,
  Routes,
  //Switch,
  Route,
  Navigate
} from "react-router-dom";
import { useContext } from "react";


function App() {

  const { user } = useContext(AuthContext)
 return (
    <Router>
    <Routes >
      <Route path='/' element={user ? <Home /> : <Login />} />
      <Route path='/login' element={user ? <Navigate replace to='/' /> : <Login />} />
      <Route path='/register' element={user ? <Navigate replace to='/login' /> : <Register />} />
      <Route path='/profile/:username' element={<Profile />} />
    </Routes >
  </Router> 
  );
}

export default App;



  
  // <Router>
    //   <Routes>
    //     <Route exact path="/login" element={<Login/>} />
    //     <Route path='/' element={<Home/>} />
    //     <Route path="/register" element={<Register/>} />
    //     <Route path="/profile/:username" element={<Profile/>} />
    //   </Routes>
    // </Router>