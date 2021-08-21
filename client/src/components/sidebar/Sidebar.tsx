import React, {  } from 'react'
import { Props } from '../../types'
import { navs } from '../../utils/navData'
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
                            {
                                navs.map(nav=>(
                                    <SidebarLink 
                                        key={nav.id}
                                        to={nav.to}
                                        onClick={toggle}    
                                    >
                                        {nav.label}
                                    </SidebarLink>
                                ))
                            }
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