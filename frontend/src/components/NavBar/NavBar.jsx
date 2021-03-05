import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark navbar-template">
            <div className="template">
              <div className="items">
            <i class="fas fa-wallet"></i>
            </div>
            <div className="items">
             Cash-Management Application
            </div>
          </div>
          <div className="template">
            <div>
<Link to='/' exact  className="items">Home</Link>
            </div>
            <div>
            <Link to='/sign-in' exact className="items"> Sign Up/Sign in</Link>
            </div>
            </div>
  
</nav>
</div>
    );
}

export default NavBar;
