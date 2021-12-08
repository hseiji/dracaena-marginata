import React from 'react'
import styled from 'styled-components'
import Minicard from './Minicard';
import WaterPhoto from '../img/water1.jpg';

const Container = styled.div`
    height: 100vh;
    display: flex;
    padding: 20px;

    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }    
`;
const Left = styled.div`
    width: 60%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 480px) {
        width: 100%;
        height: 80%;
    }    
`;

const Right = styled.div`
    width: 40%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 480px) {
        width: 100%;
        height: 20%;
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
    width: 60%;
    font-size: 25px;
    margin-top: 20px;

    @media only screen and (max-width: 480px) {
        width: 100%;
        font-size: 20px;
    }     
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Image = styled.img`
    width: 100%;

    @media only screen and (max-width: 480px) {
        width: 50%;
    }       
`;

const titleSummer = "Spring/Summer:";
const textSummer = "This is usually the time of the year when Dracaena marginata grows most. Water regularly while letting the soil mix dry in the surface before watering again.";

const titleWinter = "Fall/Winter:";
const textWinter = "Start reducing the watering because the plant’s water needs start decreasing. Only when the soil is dry down to the first inch or so (a couple centimeters), water to moisten the entire soil mix clump again.";

const Water = () => {
    return (
        <Container id="Water">
            <Left>
                <Title>Water</Title>
                <Desc>
                    Like with many drought-tolerant plants, it's easy to over-water the dragon tree. To ensure you don't drown it, wait until the top half of the soil is dry before watering (this can often take three weeks or more). If the plant has yellow leaves, it usually means it needs more water.
                </Desc>
                <CardContainer>
                    <Minicard title={titleSummer} text={textSummer}/>
                    <Minicard title={titleWinter} text={textWinter}/>
                </CardContainer>                
            </Left>    
            <Right>
                <Image src={WaterPhoto}/>
            </Right>
        </Container>
    )
}

export default Water
