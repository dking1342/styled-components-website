import React, { useState } from 'react'
import Hero from '../components/hero/Hero';
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import { sectionOne, sectionTwo, sectionThree } from './info/data';
import Info from './info/Info';

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
    const [isOpen,setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar isOpen={isOpen} toggle={toggle} />
            <Hero />
            <Info data={sectionOne} />
            <Info data={sectionTwo} />
            <Info data={sectionThree} />
        </>
    )
}

export default Home