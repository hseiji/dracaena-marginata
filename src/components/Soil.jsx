import React from 'react'
import styled from 'styled-components'
import SoilImg from '../img/dracaena-soil.jpeg'

const Container = styled.div`
    display: flex;
    height: 100vh;
    padding: 20px;

    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }    
`;

const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 480px) {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }     
`;

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 480px) {
        width: 100%;
        height: 50%;
    }    
`;

const Image = styled.img`
    width: 80%;

    @media only screen and (max-width: 480px) {
        width: 50%;
    }     
`;

const Title = styled.h1`
    font-size: 50px;

    @media only screen and (max-width: 480px) {
        width: 100%;
        font-size: 40px;
    }       
`;

const Desc = styled.p`
    font-size: 25px;
    margin-top: 30px;

    @media only screen and (max-width: 480px) {
        width: 100%;
        margin-top: 55px;
        font-size: 20px;
    }      
`;

const smallScreen = window.screen.width <= 480 ? true : false;

const Soil = () => {
    return (
        <Container id="Soil">
            {!smallScreen && <Left><Image src={SoilImg}/></Left>}
            <Right>
                <Title>Soil</Title>
                <Desc>
                    When growing dragon tree as a potted plant, use a loose, well-drained potting mix—loamy soil amended with peat moss is ideal. Make sure the container you choose has room for the plant's extensive root system.
                </Desc>
            </Right>
            {smallScreen && <Left><Image src={SoilImg}/></Left>}
        </Container>
    )
}

export default Soil
