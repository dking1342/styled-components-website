import React from 'react';
import Hero from '../components/hero/Hero';
import Layout from '../components/layout/Layout';
import ProductsPage from '../components/products/Products';
import { sectionFour, sectionOne, sectionThree, sectionTwo } from './info/data';
import Info from './info/Info';



const Home: React.FC<{}> = () => {

    return(
        <Layout>
            <Hero />
            <Info data={sectionOne} />
            <Info data={sectionTwo} />
            <Info data={sectionThree} />
            <ProductsPage />
            <Info data={sectionFour} />
        </Layout>
    )
}

export default Home