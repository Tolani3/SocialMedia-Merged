import Home from "./pages/home/Home";
// import Login2 from "./pages/login2/Login2";
// import Register2 from "./pages/register2/Register2";
import Profile from "./pages/profile/Profile";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import {
  BrowserRouter as Router,
  Routes,
  //Switch,
  Route,
  // Navigate
} from "react-router-dom";
import { useContext } from "react";


function App() {

  // const { user } = useContext(AuthContext)
 return (
    <Router>
      <Routes>
      <Route exact path='/' element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile/:username" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;