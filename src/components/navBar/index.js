import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';


export class NavBar extends Component{
  render(){
    return(
      <div className='Navbar'>
          <div className='Logo'>
              <img src='https://www.mariowiki.com/images/thumb/b/bb/SuperMarioLand2Artwork3.png/160px-SuperMarioLand2Artwork3.png'alt='mariolog'/>
          </div>
            <div className='navLinks'>
                <Link to='/bubbles'>Bubbles</Link>
                <Link to='/bundles'>Bundles</Link>
                <Link to='/about'>About us!</Link>
                <Link to='/cart'>Cart</Link>
          </div>
      </div>
    )}
}
export default NavBar;
