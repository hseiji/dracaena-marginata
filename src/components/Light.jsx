import React from 'react'
import styled from 'styled-components'
import LightPhoto from '../img/light1.jpg';

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
        width: 80%;
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

console.log(smallScreen);

const Light = () => {
    return (
        <Container id="Light">
            {!smallScreen && <Left><Image src={LightPhoto}/></Left>}
            <Right>
                <Title>Light</Title>
                <Desc>
                Dragon trees grow best in bright light but can also survive in partial shade. Keep in mind, plants kept in lower light situations will grow slower and produce smaller leaves with less intense color. Additionally, take care not to place your dragon tree in a spot that receives direct rays of sunlight.
                </Desc>
            </Right>
            {smallScreen && <Left><Image src={LightPhoto}/></Left>}
        </Container>
    )
}

export default Light
