import { useParams, Link } from 'react-router-dom'
import { Header } from '../Components/Header'
import { countries } from '../Interfaces'
import styled from 'styled-components'

export const Country = ({ data, dark, setDark }: { data: countries[], dark: boolean, setDark: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const { countryName } = useParams()
    console.log(data)
    return (
        <>
            <Header dark={dark} setDark={setDark} />
            <Container>
                <Back to={"/"} >
                    <BackImg src='/assets/back.svg' />
                    <BackTxt>Back</BackTxt>
                </Back>
                {data.filter((item) => item.name.includes(countryName || "")).map((item) => {
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
                                            <ResultTxt>{item.capital}</ResultTxt>
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
                                    <Text>Borders:</Text>
                                    <Div style={{ justifyContent: 'space-between', marginTop: 15 }}>
                                        {item.borders ? item.borders.map(el => <Borders>{el}</Borders>) : <ResultTxt>No border Countrty</ResultTxt>}
                                    </Div>
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
    height: 100vh;
`

const Card = styled.div`
    width: 100%;
    margin: auto;
    margin-top: 40px;
`
const Div = styled.div`
    display: flex;
    gap: 1%;
    margin-top: 5px;
`
const ResultTxt = styled.h2`
    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.text};
    transition: .5s;
`

const TextDiv = styled.div`
    
`
const ResultDiv = styled.div`
    margin-top: 30px;
`
const LeftDiv = styled.div`
    margin-top: 20px;
`

const BorderDiv = styled(Div)`
    flex-direction: column;
    margin-top: 20px;
`

const Img = styled.img`
    width: 100%;
`
const Name = styled.h2`
    font-size: 22px;
    font-weight: 800;
    color: ${props => props.theme.text};
    transition: .5s;
    margin-top: 30px;
`
const Borders = styled.div`
    width: 40px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.text};
    transition: .5s;
    background-color: ${props => props.theme.header}
`

const Text = styled.h2`
    font-size: 14px;
    font-weight: 700;
    color: ${props => props.theme.text};
    transition: .5s;
`

const BackImg = styled.img`
    
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
`
const BackTxt = styled.h5`
    font-size: 14px;
    font-weight: 300;
    color: ${props => props.theme.text};
    transition: .5s;
`