import { useParams, Link } from 'react-router-dom'
import { Header } from '../Components/Header'
import { countries } from '../Interfaces'
import styled from 'styled-components'

export const Country = ({ data, dark, setDark }: { data: countries[], dark: boolean, setDark: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const { countryName } = useParams()
    return (
        <>
            <Header dark={dark} setDark={setDark} />
            <Container>
                <Back to={"/"} >
                    <BackImg src='/assets/back.svg' />
                    <BackTxt>Back</BackTxt>
                </Back>
                {data.filter((item) => item.name.startsWith(countryName || "")).map((item) => {
                    return (
                        <Card>
                            <Img src={item.flags.svg} />
                            <TextDiv>
                                <Name>{item.name}</Name>
                                <ResultDiv>
                                    <LeftDiv>
                                        <Div>
                                            <Text>Native Name: </Text>
                                            <ResultTxt>{item.nativeName}</ResultTxt>
                                        </Div>
                                        <Div>
                                            <Text>Population: </Text>
                                            <ResultTxt>{item.population}</ResultTxt>
                                        </Div>
                                        <Div>
                                            <Text>Region: </Text>
                                            <ResultTxt>{item.region}</ResultTxt>
                                        </Div>
                                        <Div>
                                            <Text>Sub Region: </Text>
                                            <ResultTxt>{item.subregion}</ResultTxt>
                                        </Div>
                                        <Div>
                                            <Text>Capital: </Text>
                                            {item.capital ? <ResultTxt>{item.capital}</ResultTxt> : <ResultTxt>No Capital city</ResultTxt>}
                                        </Div>
                                    </LeftDiv>
                                    <LeftDiv>
                                        <Div>
                                            <Text>Top Level Domain: </Text>
                                            <ResultTxt>{item.topLevelDomain}</ResultTxt>
                                        </Div>
                                        <Div>
                                            <Text>Currencies: </Text>
                                            <ResultTxt>{item.currencies[0].name}</ResultTxt>
                                        </Div>
                                        <Div>
                                            <Text>Languages:</Text>
                                            <div style={{ display: 'flex', gap: 15 }}>
                                                {item.languages.map(el => <ResultTxt>{el.name}</ResultTxt>)}
                                            </div>
                                        </Div>
                                    </LeftDiv>
                                </ResultDiv>
                                <BorderDiv>
                                    <Text>Border Countries:</Text>
                                    <BordersDiv>
                                        {item.borders ? item.borders.map(el => <Borders>{el}</Borders>) : <ResultTxt>No border Countrty</ResultTxt>}
                                    </BordersDiv>
                                </BorderDiv>

                            </TextDiv>
                        </Card>
                    )
                })}
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 90%;
    margin: auto;
    padding-bottom: 50px;
    @media screen and (min-width: 900px) {
        height: 100vh;
    }
    
`

const Card = styled.div`
    width: 100%;
    margin: auto;
    margin-top: 40px;
    @media screen and (min-width: 900px) {
        display: flex;
        justify-content: space-between;
        /* height: 40vh;
        margin-top: 80px; */
    }
    @media screen and (min-width: 1200px) {
        height: 45vh;
        margin-top: 80px;
    }
`
const Div = styled.div`
    display: flex;
    gap: 1%;
    margin-top: 5px;
    @media screen and (min-width: 900px) {
       gap: 3%;
    }
`
const ResultTxt = styled.h2`
    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.text};
    transition: .5s;
    @media screen and (min-width: 900px) {
        font-size: 16px;
    }
    @media screen and (min-width: 1200px) {
        font-size: 18px;
    }
`

const TextDiv = styled.div`
    @media screen and (min-width: 900px) {
        width: 55%;
    }
`
const ResultDiv = styled.div`
    margin-top: 30px;
    @media screen and (min-width: 500px) {
        display: flex;
        justify-content: space-between;
    }
`
const LeftDiv = styled.div`
    margin-top: 20px;
    @media screen and (min-width: 480px) {
        width: 50%;
    }
`

const BorderDiv = styled(Div)`
    flex-direction: column;
    margin-top: 20px;
    @media screen and (min-width: 900px) {
        flex-direction: row;
        align-items: center;
    }
`
const BordersDiv = styled(Div)`
    margin-top: 15px;
    justify-content: space-between;
    @media screen and (min-width: 900px) {
        margin-top: 0;
    }
    @media screen and (min-width: 1200px) {
        gap: 30px;
    }
`

const Img = styled.img`
    width: 100%;
    @media screen and (min-width: 900px) {
        width: 39%;
    }
`
const Name = styled.h2`
    font-size: 22px;
    font-weight: 800;
    color: ${props => props.theme.text};
    transition: .5s;
    margin-top: 30px;
    @media screen and (min-width: 900px) {
        font-size: 25px;
    }
`
const Borders = styled.div`
    width: 40px;
    height: 20px;
    display: flex;
    border-radius: 7px;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.text};
    transition: .5s;
    background-color: ${props => props.theme.header};
    @media screen and (min-width: 1200px) {
        width: 70px;
        height: 30px;
    }
`

const Text = styled.h2`
    font-size: 14px;
    font-weight: 700;
    color: ${props => props.theme.text};
    transition: .5s;
    @media screen and (min-width: 900px) {
        font-size: 16px;
    }
    @media screen and (min-width: 1200px) {
        font-size: 18px;
    }
`

const BackImg = styled.img`
    filter: ${props => props.theme.svg === 'brightness(100%)' ? 'brightness(100)' : ''};
    transition: .5s;
`

const Back = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 32px;
    width: 25%;
    margin-top: 30px;
    border-radius: 5px;
    background-color: ${props => props.theme.header};
    transition: .5s;
    justify-content: space-between;
    padding: 0 5px;
    cursor: pointer;

    &:hover{
        transform: scale(1.1)
    }
    @media screen and (min-width: 900px) {
        width: 13%;
        height: 40px;
        padding: 0 20px;
    }
    @media screen and (min-width: 1200px) {
        width: 10%;
        height: 50px;
    }
`
const BackTxt = styled.h5`
    font-size: 14px;
    font-weight: 300;
    color: ${props => props.theme.text};
    transition: .5s;
    @media screen and (min-width: 1200px) {
        font-size: 18px;
    }
`