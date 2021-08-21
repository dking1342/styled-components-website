import React, { useState } from 'react'
import { HeroContainer, HeroBackground, HeroImg, ArrowForward, ArrowRight, HeroBtnWrapper, HeroContent, Heroh1, Herop } from './HeroElements'
import HeroBg from '../../images/bg.jpg';
import { Button } from '../ButtonElement';


const Hero: React.FC<{}> = () => {
    const [hover, setHover ] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return(
        <HeroContainer id="home">
            <HeroBackground>
                <HeroImg src={HeroBg} />
            </HeroBackground>
            <HeroContent>
                <Heroh1>Virtual Banking Made Easy</Heroh1>
                <Herop>
                    Sign up for a new account today and receive $250 in credit towards your next payment.
                </Herop>
                <HeroBtnWrapper>
                    <Button 
                        to="signup" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover} 
                        primary="true"
                    > 
                        Get Started { hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero