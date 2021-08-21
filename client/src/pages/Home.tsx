import React from 'react';
import Hero from '../components/hero/Hero';
import Layout from '../components/layout/Layout';
import { sectionFour, sectionOne, sectionThree, sectionTwo } from './info/data';
import Info from './info/Info';



const Home: React.FC<{}> = () => {

    return(
        <Layout>
            <Hero />
            <Info data={sectionOne} />
            <Info data={sectionTwo} />
            <Info data={sectionThree} />
            <Info data={sectionFour} />
        </Layout>
    )
}

export default Home