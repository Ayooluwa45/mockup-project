import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className="header">
    <div className='header-title'>
      <div className='liveEo'>
        <h2>LiveEO</h2>
        <div className='header-item'>
          <div className='header-items'>
            <ul>
              <li>
                <Link to='/'>
                  Map
                </Link>
              </li>
              <li>
                <Link to='/'>
                  Tasks
                </Link>
              </li>
              <li>
                <Link to='/'>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to='/'>
                  Comments
                </Link>
              </li>
              <li>
                <Link to='/'>
                  Admin
                </Link>
              </li>
              <li>
                <Link to='/'>
                  L
                </Link>
              </li>
            </ul>

          </div>

        </div>

      </div>

    </div>
    </header>
  );
}

export default Header;
