import React from 'react'
import { FaGithub , FaInstagram, FaLinkedin} from "react-icons/fa";
import styled from "styled-components/macro";


const Social=styled.div`

  display: flex;
  align-items: center;
  justify-content:space-around;
  font-size:50px;
  cursor:pointer;
  background: linear-gradient(45deg,white,grey);



  @media screen and (max-width: 768px) {
display: flex;
  align-items: center;
  justify-content:space-around;
  font-size:25px;
  cursor:pointer;
  background: #111;
  color: #fff;
  }

`;

const SocialLink=styled.a`
 color:black;
 &:hover {
    transform: scale(1.05);
    color:red;

  }

  @media screen and (max-width: 768px) {
display: flex;
  align-items: center;
  justify-content:space-around;
  font-size:25px;
  cursor:pointer;
  background: #111;
  color: #fff;
  margin-bottom:7px;
  }
`



const Footer = () => {
  return (
    
        <Social>
            <SocialLink href="https://www.github.com/gautam1804/"><FaGithub/></SocialLink>
            <SocialLink href="https://www.linkedin.com/in/gautam-biloniya18/" ><FaLinkedin/></SocialLink>
            <SocialLink href="https://www.instagram.com/_gautambiloniya_/"><FaInstagram/></SocialLink>
        </Social>
   
  )
}

export default Footer
