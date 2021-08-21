import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';
import { PageProp } from '../types';


export const Button = styled(LinkS).attrs((props:PageProp)=>({
    primary:props.primary,
    fontbig:props.fontbig,
    big:props.big,
}))`
    border-radius:50px;
    background:${(props)=> (props.primary ? '#01bf71' : '#010606')};
    white-space:nowrap;
    padding:${(props)=>(props.big ? '14px 48px' : '12px 30px')};
    color:${(props) => ( props.primary ? '#010606' : '#fff')};
    font-size:${(props)=>(props.fontbig ? '20px' : '16px')};
    outline:none;
    border:none;
    cursor: pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:all 0.2s ease-in-out;

    &:hover{
        transition:all 0.2s ease-in-out;
        background:${(props)=>(props.primary ? '#fff' : '#01bf71')};
    }   
`;