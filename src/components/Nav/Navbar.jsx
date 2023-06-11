import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logomaranata from "../../assets/LOGOMARANATA6.png"
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  position: fixed;
  z-index: 1;
  color: white;
  background-color: black;
  justify-content: space-between;
  .logo {
    padding: 5px;
  }
  .header-img {
    width: 45px;
  }
  .header-img:hover {
    cursor: pointer;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <div className="logo">
          <img className="header-img" src={logomaranata} />
        </div>
      </Link>
      <Burger />
    </Nav>
  )
}

export default Navbar