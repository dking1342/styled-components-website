import React from 'react'
import { Nav, NavbarContainer,NavLogo, MobileIcon, NavMenu,NavItem,NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import { FaBars } from 'react-icons/fa';
import { Props } from '../../types';

// interface NavbarProps {

// }

const Navbar: React.FC<Props> = ({toggle}) => {
    return(
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        dollar
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                                to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                            >
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to="discover"
                                smooth={true}
                                duration={500}
                                spy={true}
                            >
                                Discover
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to="services"
                                smooth={true}
                                duration={500}
                                spy={true}
                            >
                                Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">
                                Sign Up
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">
                            Sign In
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar