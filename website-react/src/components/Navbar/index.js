import React from "react";
import { FaBars } from 'react-icons/fa';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
    return (
        <>
           <Nav>
               <NavbarContainer>
                   <NavLogo to="/">
                       Logo
                   </NavLogo>
                   <MobileIcon onClick={toggle}>
                       <FaBars />
                   </MobileIcon>
                   <NavMenu>
                       <NavItem>
                           <NavLinks to="/about">About</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="/Discover">Discover</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="/sevices">Sevices</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="/signup">Sign up</NavLinks>
                       </NavItem>
                   </NavMenu>
                   <NavBtn>
                       <NavBtnLink to="/signin">Sign In</NavBtnLink>
                   </NavBtn>
               </NavbarContainer>
           </Nav>
        </>
    )
}

export default Navbar;