import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import data from "../../data";
import SectionsList from "../../components/SectionsList";
import "./RightNav.css";

const Ul = styled.ul`
  list-style: none;
  z-index: 14;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: black;
    font-weight: bolder;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {

  const navigate = useNavigate();

    const { sections } = data;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleOnItemClick = useCallback((section) => {
        navigate(`/details/${section.id}`);
    })
  
  
    return (
      <div >
        <Ul open={open}>
          {/*<SectionsList sections={sections} onItemClick={handleOnItemClick} /> | Tirei essa parte do código pra criar novas páginas ao inves de utilizar um array data. Motivo: Não consegui criar o texto sobre a história.*/} 
          <Link to ="/quemsomos/" className='header-list'>Quem somos</Link>
          <Link to ="/nossahistoria/" className='header-list'>Nossa história</Link>
          <Link to ="/" className='header-list'>Faça parte</Link>
          <Link to ="/" className='header-list'>Sócio Maranata</Link>
          <Link to ="/" className='header-list'>Loja</Link>
        </Ul>
      </div>
  )
}

export default RightNav