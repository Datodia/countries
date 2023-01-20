import styled from 'styled-components'
import { darkIntFace } from '../Interfaces'

export const Header = ({ dark, setDark }: darkIntFace) => {


    return (
        <Wrapper>
            <Logo>Where in the World?</Logo>
            <DarkDiv onClick={() => setDark(!dark)}>
                {dark ? <Img dark={dark} src='/assets/icon-sun.svg' /> : <Img dark={dark} src='/assets/icon-moon.svg' />}
                {dark ? <DarkTxt>LIGHT MODE</DarkTxt> : <DarkTxt>DARK MODE</DarkTxt>}
            </DarkDiv>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    padding: 0 2%;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.header};
    transition: .5s;
    @media screen and (min-width: 900px) {
        padding: 0 5%;
    }
`

const Logo = styled.h2`
    font-size: 14px;
    font-weight: 800;
    color: ${props => props.theme.text};
    transition: .5s;
    @media screen and (min-width: 1200px) {
        font-size: 18px;
    }
`

const DarkDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 5px; 
    cursor: pointer;

   
    @media screen and (min-width: 1200px) {
        gap: 15px
    } 
`
const Img = styled.img<darkIntFace | any>`
    filter: ${props => props.theme.svg};
    transform: ${props => props.dark && "rotate(360deg)"};
    transition: .5s;
`
const DarkTxt = styled.h2`
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.text};
    transition: .5s;
    @media screen and (min-width: 1200px) {
        font-size: 16px;
    }
`