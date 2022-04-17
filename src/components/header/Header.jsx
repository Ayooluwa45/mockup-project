import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="live">
        
          <Link to="/live-eo">LiveEO</Link>
        
      </div>
      <ul>
        <li>
          <Link to="/map">Map</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/comments" className="active">Comments</Link>
        </li>
        <li id="admin">
          <Link to="/admin">Admin</Link>
        </li>
        <li id="profile">
          <Link to="/profile">L</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
