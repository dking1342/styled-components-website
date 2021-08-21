import React, {  } from 'react'
import { Props } from '../../types'
import { CloseIcon, Icon, SidebarBtnWrap, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper } from './SidebarElements'

// interface SidebarProps {

// }

const Sidebar: React.FC<Props> = ({isOpen,toggle,url}) => {

    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                {
                    url === '/' ? (
                        <SidebarMenu>
                            <SidebarLink 
                                to="about"
                                onClick={toggle}    
                            >
                                About
                            </SidebarLink>
                            <SidebarLink 
                                to="discover"
                                onClick={toggle}
                            >
                                Discover
                            </SidebarLink>
                            <SidebarLink
                                to="services"
                                onClick={toggle}
                            >
                                Services
                            </SidebarLink>
                            <SidebarLink 
                                to="signup"
                                onClick={toggle}
                            >
                                Sign Up
                            </SidebarLink>
                        </SidebarMenu>
                    ) : null
                }
                <SidebarBtnWrap>
                    <SidebarRoute 
                        to="/signup"
                        onClick={toggle}
                    >
                        Sign In
                    </SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar