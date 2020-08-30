import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/redux.svg";

import './style.css'
const Burger = () => {
  return (
    <Menu>
      <div id="wrapper">
      <img src={logo} alt="Logotipo do redux" />
      <span>Redux</span>
      </div>
      <ol>
        <li>
          {" "}
          <Link to="#">Getting started</Link>
        </li>
        <li>
          <Link to="#">Tutorial</Link>
        </li>
        <li>
          <Link to="#">API</Link>
        </li>
        <li>
          <Link to="#">FAQ</Link>
        </li>
        <li>
          <Link to="#">Best Practices</Link>
        </li>
        <li>
          <Link to="#">Github</Link>
        </li>
        <li>
          <Link to="#">Need help?</Link>
        </li>
      </ol>
    </Menu>
  );
}
export default Burger
