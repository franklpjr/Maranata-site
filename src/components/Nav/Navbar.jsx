import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logomaranata from "../../assets/LOGOMARANATA6.png"

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  color: white;
  background-color: black;
  justify-content: space-between;
  .logo {
    padding: 5px;
  }
  .header-img {
    width: 45px;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img className="header-img" src={logomaranata} />
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar