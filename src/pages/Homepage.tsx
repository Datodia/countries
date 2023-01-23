import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { countries, darkIntFace, Theme } from '../Interfaces'
import { Header } from '../Components/Header'


export const Homepage = ({ data, dark, setDark }: { data: countries[], dark: boolean, setDark: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const [name, setName] = useState<string>('')
    const [region, setRegion] = useState<string>("")
    const [show, setShow] = useState<boolean>(false)

    const Filtered = data.filter((item) => item.region.includes(region)).filter(el => el.name.toLowerCase().includes(name));

    return (
        <Wrapper>
            <Header dark={dark} setDark={setDark} />
            <SearchDiv>
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
            </SearchDiv>
            {show &&
                <Region>
                    <RegionName onClick={() => { setRegion("Africa"), setShow(false) }}>Africa</RegionName>
                    <RegionName onClick={() => { setRegion("America"), setShow(false) }}>America</RegionName>
                    <RegionName onClick={() => { setRegion("Asia"), setShow(false) }}>Asia</RegionName>
                    <RegionName onClick={() => { setRegion("Europe"), setShow(false) }}>Europe</RegionName>
                    <RegionName onClick={() => { setRegion("Oceania"), setShow(false) }}>Oceania</RegionName>
                </Region>
            }

            <CardDiv>
                {Filtered.length > 0 ?
                    Filtered.map((item) => {
                        return (
                            <Card to={`/country/${item.name}`}>
                                <Img src={item.flags.svg} />
                                <Texts>
                                    <CountryName>{item.name}</CountryName>
                                    <Population>Population: {item.population}</Population>
                                    {item.capital ? <Population>Capital: {item.capital}</Population> : <Population>Capital: No capital</Population>}
                                    <Population>Region: {item.region}</Population>
                                </Texts>
                            </Card>
                        )
                    }) : <Error>
                        <h1>There are no more country here on this name</h1>
                    </Error>

                }
            </CardDiv>

        </Wrapper >
    )
}

const Wrapper = styled.div`
  flex-wrap: wrap;
`
const CardDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: auto;
    gap: 2vw;
    padding-bottom: 300px;
`
const Error = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SearchDiv = styled.div`
    @media screen and (min-width: 900px) {
        display: flex;
        width: 90%;
        margin:auto;
        justify-content: space-between;
    }
`
const Img = styled.img`
    width: 100%;
    @media screen and (min-width: 600px) {
        width: 100%;
        height: 55%;
    }
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

  &:hover{
    transform: scale(1.1)
  }

  @media screen and (min-width: 600px) {
        height: 336px;
        margin-top: 40px;
    }
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
    @media screen and (min-width: 900px) {
        width: 40%;
        margin: 0;
        margin-top: 24px;
    }
`
const SearchImg = styled.img`
    
`
const Input = styled.input`
    background-color: transparent;
    outline: none;
    border: none;
    color: ${props => props.theme.text};
    transition: .5s;
    @media screen and (min-width: 900px) {
        font-size: 16px;
    }
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
    cursor: pointer;
    @media screen and (min-width: 900px) {
        margin-top: 24px;
        width: 20%;
    }
`
const Region = styled(Filter)`
    margin-top: 10px;
    flex-direction: column;
    height: auto;
    align-items: flex-start;
    @media screen and (min-width: 900px) {
        margin-left: 77%;
        width: 18%;
        align-items: center;
    }
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
    cursor: pointer;
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