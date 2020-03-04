import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';


export class NavBar extends Component{
  render(){
    return(
      <div className='Navbar'>
        <Link to='/bubbles' style={{textDecoration: 'none'}}>Bubbles</Link>
        <Link to='/bundles' style={{textDecoration: 'none'}}>Bundles</Link>
        <Link to='/about' style={{textDecoration: 'none'}}>About us!</Link>
        <Link to='/cart' style={{textDecoration: 'none'}}>Cart</Link>
      </div>
    )}
}
export default NavBar;
