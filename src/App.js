import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/header/Header";
import Comments from "./components/comment/Comments";
import Tasks from "./components/pages/Tasks";
import Admin from "./components/pages/Admin";
import Dashboard from "./components/pages/Dashboard";
import Leave from "./components/pages/Leave";
import LiveEO from "./components/pages/LiveEO";

function App() {
  return (
    <>
    <Router>
    <div>
      <Header />
      <section className="container">
      <Comments />
      </section>
      <Routes>
        <Route path='/tasks' element={<Tasks/>}/>
        <Route path='/live-eo' element={<LiveEO/>}/>
        <Route path='/leave' element={<Leave/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>

     
    </div>
    </Router>
    </>
  );
}

export default App;
