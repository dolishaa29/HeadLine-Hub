import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:'red'}}>
        <div className="container-fluid">
          
          <Link className="navbar-brand" to="/" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '700', letterSpacing: '1px' }}>
            HeadlineHub
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link" to="/business" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '500' }}>Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '500' }}>Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '500' }}>Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '500' }}>Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '500' }}>Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '500' }}>Technology</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
