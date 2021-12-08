import React from 'react'
import styled from 'styled-components'
import TempPhoto from '../img/temperature1.jpg';

const Container = styled.div`
    height: 90%;
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
        height: 50%;
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
        height: 50%;
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

const Image = styled.img`
    width: 100%;
`;

const Temperature = () => {
    return (
        <Container id="Temperature">
            <Left>
                <Title>Temperature</Title>
                <Desc>
                    Dragon trees prefer warmer temperatures between 70 and 80 degrees Fahrenheit. Regular household humidity should be fine for them, but if your house is particularly dry, you can consider misting the pant lightly from a spray bottle every few days.
                </Desc>
            </Left>    
            <Right>
                <Image src={TempPhoto}/>
            </Right>
        </Container>
    )
}

export default Temperature
