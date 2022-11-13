import Home from "./pages/home/Home";
//import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
// import Register from "./pages/register/Register";
 import Login2 from "./pages/login2/Login2";
  import Register2 from "./pages/register2/Register2";

  import {
    BrowserRouter as Router,
    Routes, //Changed from "Switch" not used anymore
    Route,
    // Navigate
  } from "react-router-dom";

function App() {
  // return <Register2/>;
  // return (
  //   <Router>
  //     <Routes >
  //       <Route exact path="/">
  //         <Home />
  //       </Route>
  //       <Route path="/login">
  //         <Login2 />
  //       </Route>
  //       <Route path="/register">
  //         <Register2 />
  //       </Route>
  //       <Route path="/profile/:username">
  //         <Profile />
  //       </Route>
  //     </Routes >
  //   </Router>
  // );
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login2 />} />
        <Route path="/register" element={<Register2 />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;