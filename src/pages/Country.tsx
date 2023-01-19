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
                {data.filter((el) => el.name === countryName).map((item) => {
                    return (
                        <Card>
                            <h2>{item.name}</h2>
                            <Img src={item.flags.svg} />
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
`

const Card = styled.div`
    width: 100%;
    margin: auto;
`

const Img = styled.img`
    width: 100%;
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