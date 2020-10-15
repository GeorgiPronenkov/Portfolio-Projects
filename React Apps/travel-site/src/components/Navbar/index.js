import React from 'react';
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
import {TiThMenuOutline} from 'react-icons/ti';
// import {animateScroll as scroll} from 'react-scroll';


const Navbar = ({ toggle }) => {
    // const [scrollNav, setScrollNav] = useState(false);
    //
    // const changeNav = () => {
    //     if (window.scrollY >= 80) {
    //         setScrollNav(true);
    //     } else {
    //         setScrollNav(false);
    //     }
    // }
    //
    // useEffect(() => {
    //     window.addEventListener('scroll', changeNav)
    // }, []);
    //
    // const toggleHome = () => {
    //     scroll.scrollToTop();
    // }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">logo</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <TiThMenuOutline />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'>Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
