import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { countries, darkIntFace, Theme } from '../Interfaces'
import { Header } from '../Components/Header'


export const Homepage = ({ data, dark, setDark }: { data: countries[], dark: boolean, setDark: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const [name, setName] = useState<string>('')
    const [region, setRegion] = useState<string>("")
    const [show, setShow] = useState<boolean>(false)
    return (
        <Wrapper>
            <Header dark={dark} setDark={setDark} />
            <InputDiv>
                <SearchImg src="assets/search.svg" />
                <Input
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    placeholder="Search for a country"
                />
            </InputDiv>

            <Filter onClick={() => setShow(!show)}>
                Filter by region
                <Arrow show={show} src='assets/arrow.svg' />
            </Filter>

            {show &&
                <Region>
                    <RegionName onClick={() => { setRegion("Africa"), setShow(false) }}>AFrica</RegionName>
                    <RegionName onClick={() => { setRegion("America"), setShow(false) }}>America</RegionName>
                    <RegionName onClick={() => { setRegion("Asia"), setShow(false) }}>Asia</RegionName>
                    <RegionName onClick={() => { setRegion("Europe"), setShow(false) }}>Europe</RegionName>
                    <RegionName onClick={() => { setRegion("Oceania"), setShow(false) }}>Oceania</RegionName>
                </Region>}

            {data.filter((item) => item.region.includes(region)).filter(el => el.name.toLowerCase().includes(name)).map((item) => {
                return (
                    <Card to={`/country/${item.name}`}>
                        <Img src={item.flags.svg} />
                        <Texts>
                            <CountryName>{item.name}</CountryName>
                            <Population>Population: {item.population}</Population>
                            <Population>Capital: {item.capital}</Population>
                            <Population>Region: {item.region}</Population>
                        </Texts>
                    </Card>
                )
            })}

        </Wrapper>
    )
}

const Wrapper = styled.div`
  flex-wrap: wrap;
`
const Img = styled.img`
    width: 100%;
`
const Card = styled(Link)`
  display: block;
  color: ${props => props.theme.text};
  width: 264px;
  margin: auto;
  margin-top: 20px;
  background-color: ${props => props.theme.header};
  text-decoration: none;
  transition: .5s;
  cursor: pointer;
  padding-bottom: 15px;
  border-radius: 7px;
`

const InputDiv = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 24px;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 0 0 0 20px;
    border-radius: 5px;
    height: 48px;
    background-color: ${props => props.theme.header};
    transition: .5s;

`
const SearchImg = styled.img`
    
`
const Input = styled.input`
    background-color: transparent;
    outline: none;
    border: none;
    color: ${props => props.theme.text};
    transition: .5s;
`

const Filter = styled.div`
    height: 48px;
    width: 60%;
    margin-top: 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    margin-left: 6%;
    background-color: ${props => props.theme.header};
    transition: .5s;
    justify-content: space-between;
    padding: 0 15px;
    color: ${props => props.theme.text};
    font-size: 15px;
`
const Region = styled(Filter)`
    margin-top: 10px;
    flex-direction: column;
    height: auto;
    /* padding: 15px; */
    align-items: flex-start;
`

const Arrow = styled.img((props: { show: boolean, theme: Theme }) => `
    transform: ${props.show ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: .5s;
    filter: ${props.theme.svg};
`)

const RegionName = styled.h2`
    font-size: 12px;
    font-weight: 300;
    margin: 7px 0;
`

const CountryName = styled.h4`
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 10px;
`
const Population = styled.h4`
    font-size: 14px;
    font-weight: 600;
`
const Texts = styled.div`
    padding: 0 24px;
    margin-top: 20px;
`