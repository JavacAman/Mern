import React from 'react';
import {Link} from 'react-router-dom';
export default function Header() {
  return(
  <header>
      <nav className="navbar navbar-expand-lg navbar-light primary-gradient shadow">
        <Link classNmae="nav-link brand mx-auto">
          <h5 className="text-light m-0">MERN Stack Application</h5>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" area-expanded="false">
            <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <div classsName="me-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item active">
               Logout    
              </li>
            </ul>
        </div>
      </nav>
  </header>
  )
}
