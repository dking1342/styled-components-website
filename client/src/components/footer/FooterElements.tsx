import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const FooterContainer = styled.footer`
    background:#111;
    z-index:1;
`;

export const FooterWrap = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    max-width:1100px;
    margin:0 auto;
`;

export const FooterLinksContainer = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    flex-direction:column;

    @media screen and (max-width:820px){
        padding-top:32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(160px,1fr));
    width:100%;
    justify-content:space-between;
    align-items:flex-start;
`;

export const FooterIconContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const FooterIconWrapper = styled.div`
    display:grid;
    width:100%;
    height:fit-content;
    padding:24px 0;
    grid-template-columns:repeat(auto-fit,minmax(75px,1fr));
    justify-content:center;
    align-items:center;
    color:#fff;
    margin:auto;
`;

export const FooterLinkItems = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:16px;
    width:160px;
    box-sizing:border-box;
    color:#fff;

    @media screen and (max-width:420px){
        margin:0;
        padding:10px;
        width:100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size:14px;
    margin-bottom:16px;
`;

export const FooterLink = styled(LinkR)`
    color:#fff;
    text-decoration:none;
    margin-bottom:0.5rem;
    font-size:14px;

    &:hover{
        color:#01bf71;
        transition:0.3s ease-out;
    }
`;
