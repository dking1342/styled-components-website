import React, { useState } from 'react'
import { useHistory } from 'react-router';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import { LayoutContainer, MainContainer } from './LayoutElements';

interface LayoutProps {

}

const Layout: React.FC<LayoutProps> = ({children}) => {
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return(
        <LayoutContainer>
            <Sidebar isOpen={isOpen} toggle={toggle} url={history.location.pathname} />
            <Navbar isOpen={isOpen} toggle={toggle} url={history.location.pathname} />
            <MainContainer>
                {children}
                <Footer url={history.location.pathname}/>
            </MainContainer>
        </LayoutContainer>
    )
}

export default Layout