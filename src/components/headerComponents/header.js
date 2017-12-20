import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
          <div className="logo">
            logo
          </div>

          <nav>
              <ul>
                <li className="first">
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                    
                </li>
                <li>
                    <Link to="/">Bioinforminer</Link>
                </li>
                <li>
                    <Link to="/">NGS Data Analysis</Link>
                </li>
                <li>
                    <a href="#">News</a>
                </li>
                <li className="lAST">
                    <a href="#">Contact</a>
                </li>
              </ul>
          </nav>


      </header>
    );
  }
}

export default Header;