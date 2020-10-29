import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import flagEN from '../../images/flagEN.png';
import flagFR from '../../images/flagFR.png';
import { Link } from "react-router-dom";

// SCSS
import './index.scss'

const Header = ({language, switchLanguage}) => {

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Web Agency</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          <Link to="/">Accueil</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/about">L'agence</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/works">Projets</Link>
        </Nav.Link>
      </Nav>
      <Nav className="ml-auto" onClick={switchLanguage}>
        {language === 'en' &&(<img alt="flag for fr translation" src={flagFR} width="40" height="30" className="d-inline-block align-top" />)}
        {language === 'fr' &&(<img alt="flag for en translation" src={flagEN} width="40" height="30" className="d-inline-block align-top " />)}
      </Nav>
    </Navbar>
  )
}

export default Header;