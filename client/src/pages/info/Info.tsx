import React from 'react'
import { PageProp } from '../../types'
import { InfoButton, InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLink, Heading, Subtitle, BtnWrap, ImgWrap, Img, Column2, InfoButtonRoute } from './InfoElements'

type InfoPage = {
    data:PageProp
}

const Info: React.FC<InfoPage> = ({data}) => {

    let styles:PageProp = {
        dark:data.lightbg ? "true" : undefined,
    };
            
    return(
        <InfoContainer id={data.id} lightbg={data.lightbg}>
            <InfoWrapper>
                <InfoRow imgstart={data.imgstart}>
                    <Column1>
                        <TextWrapper>
                            <TopLink>
                                {data.topline}
                            </TopLink>
                            <Heading darktext={ styles.dark }>{data.headline}</Heading>
                            <Subtitle darktext={styles.dark}>{data.description}</Subtitle>
                            <BtnWrap>
                                {
                                    data.id !== "signup" ? (
                                        <InfoButton 
                                            to="home"
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            offset={-80}
                                            darktext={styles.dark}
                                        >
                                            {data.buttonlabel}
                                        </InfoButton>
                                    ) : (
                                        <InfoButtonRoute
                                            to="/signup"
                                            darktext={styles.dark}
                                        >
                                            {data.buttonlabel}
                                        </InfoButtonRoute>
                                    )
                                }
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img  src={data.img} alt={data.alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default Info