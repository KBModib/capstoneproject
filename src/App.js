import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";
import Events from "./pages/Events";
import Reservation from "./pages/Reservation";
import Login from "./pages/Login";
import Profile from "./pages/Profile";


function App() {
  return (
    <>
      <Router>
        <Routes className="App">
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/menu" element={<Menu/>}></Route>
          <Route path="/events" element={<Events/>}></Route>
          <Route path="/reservation" element={<Reservation/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
