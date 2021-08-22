import React from 'react'
import { Props } from '../../types'
import { footerdata, FooterIcons } from './footerdata'
import { FooterContainer, FooterIconWrapper, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap } from './FooterElements'



const Footer: React.FC<Props> = ({url}) => {
    return(
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    {
                        url === "/" ? (
                            <>
                                <FooterLinksWrapper>
                                    {
                                        footerdata.map(foot=>(
                                            <FooterLinkItems key={foot.header}>
                                                <FooterLinkTitle key={foot.header}>{foot.header}</FooterLinkTitle>
                                                {
                                                    foot.categories.map(item=>(
                                                        <FooterLink key={item.id} to={item.url}>
                                                            {item.label}
                                                        </FooterLink>
                                                    ))
                                                }
                                            </FooterLinkItems>
                                        ))
                                    }
                                </FooterLinksWrapper>
                                <FooterIconWrapper>
                                        {
                                            FooterIcons.map(ic=>(
                                                <ic.IconTitle 
                                                    key={ic.id} 
                                                    style={{
                                                        width:'50px',
                                                        height:'50px',
                                                        padding:'10px',
                                                        display:'flex',
                                                        alignSelf:'center',
                                                        justifySelf:'center'
                                                    }} />
                                            ))
                                        }
                                </FooterIconWrapper>
                            </>
                        ) : (
                            <FooterIconWrapper>
                                {
                                    FooterIcons.map(ic=>(
                                        <ic.IconTitle 
                                            key={ic.id} 
                                            style={{
                                                width:'50px',
                                                height:'50px',
                                                padding:'10px',
                                                display:'flex',
                                                alignSelf:'center',
                                                justifySelf:'center'
                                            }} />
                                    ))
                                }
                            </FooterIconWrapper>
                        )
                    }
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer