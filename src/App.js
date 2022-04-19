import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Comments from "./components/comment/Comments";
import Tasks from "./components/pages/Tasks";
import Admin from "./components/pages/Admin";
import Dashboard from "./components/pages/Dashboard";
import Leave from "./components/pages/Leave";
import LiveEO from "./components/pages/LiveEO";
import Map from "./components/pages/Map";
import BackButton from "./components/layout/BackButton";

function App() {
  return (
    <>
      <div>
      
          <Router>
          <Header />
          <BackButton url={'/'}/>
          <Routes>
            <Route path="/" element={<LiveEO />} />
            <Route path="/map" element={<Map />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/profile" element={<Leave />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router> 
      </div>

       
    </>
  );
}

export default App;
