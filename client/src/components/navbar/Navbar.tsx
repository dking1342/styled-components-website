import React from 'react'
import { Nav, NavbarContainer,NavLogo, MobileIcon, NavMenu,NavItem,NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import { FaBars } from 'react-icons/fa';
import { Props } from '../../types';
import { navs } from '../../utils/navData';

// interface NavbarProps {

// }

const Navbar: React.FC<Props> = ({toggle,url}) => {
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
                    {
                        url === '/' ? (
                            <NavMenu>
                                {
                                    navs.map(nav=>(
                                        <NavItem key={nav.id}>
                                            <NavLinks 
                                                to={nav.to}
                                                smooth={true}
                                                duration={500}
                                                spy={true}
                                            >
                                                {nav.label}
                                            </NavLinks>
                                        </NavItem>
                                    ))
                                }
                            </NavMenu>
                        ) : null
                    }
                    <NavBtn>
                        <NavBtnLink to="/signup">
                            Sign In
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar