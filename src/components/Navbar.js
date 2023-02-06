import React from "react";
import styled, { css , keyframes } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import Bars from "../images/bars.svg";

const rotate=keyframes`
 from{
      transform:rotate(270deg);
    }
    to{
      transform:rotate(360deg);
    }
`

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: scale(1);
    background: linear-gradient(45deg,white,wheat);
    color:black;
    border: 1px solid #cd853f;
    border-radius: 50px 20px;
  }
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
  text-transform: uppercase;
  border: 2px solid gold;
  border-radius: 50px 20px;
  background: linear-gradient(45deg,black,grey);
  animation: ${rotate} infinite 2s linear;
`;

const MenuBars = styled.i`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-25px, 10px);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  

  @media screen and (max-width: 768px) {
    display: none;

  }
`;

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Logo to="/"> Earthly </Logo> <MenuBars />
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true" style={{borderRadius:"8px" ,border:" gold solid 2px"}}>
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
