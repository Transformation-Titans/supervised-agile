import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: linear-gradient(135deg, #DEDEEF, #4b0082);
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Allow items to wrap */
  z-index: 1000;

  a {
    margin: 5px; /* Smaller margins for smaller screens */
    cursor: pointer;
    text-decoration: none;
    color: white;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 0.3s ease;

    &:hover {
      background-color: #f5a623;
      color: #4b0082;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 600px) {
    a {
      padding: 5px 10px; /* Reduce padding for smaller screens */
      font-size: 0.9rem; /* Smaller font size */
    }
  }
`;


const Header = () => (
  <Nav>
    <Link to="about" smooth={true} duration={500}>About</Link>
    <Link to="cv" smooth={true} duration={500}>MyCV</Link>
    <Link to="speaking" smooth={true} duration={500}>Coaching Engagements</Link>
    <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
    <Link to="certifications" smooth={true} duration={500}>Certifications</Link>
  </Nav>
);

export default Header;
