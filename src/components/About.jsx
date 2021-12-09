import React from 'react'
import styled from 'styled-components'
import Dracaena from '../img/dracaena-marginata1.png'

const Container = styled.div`
    height: calc(100vh - 50px);
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

    @media only screen and (max-width: 480px) {
        width: 100%;
        height: 50%;
        display:flex;
        align-items: center;
        justify-content: center;
    }
`;
const Desc = styled.p`
    width: 60%;
    font-size: 25px;
    margin-top: 20px;

    @media only screen and (max-width: 480px) {
        width: 100%;
        margin-top: 80px;
        font-size: 20px;
    }    
`;
const Image = styled.img`
    width: 55%;

    @media only screen and (max-width: 480px) {
        width: 30%;
    }     
`;

const About = () => {

    return (
        <Container id="About">
            <Left>
                <Desc>
                    Also known as <b>Dragon Tree</b>, this is an attractive plant with green sword-like, red-edged leaves. Native to Madagascar, the eye-catching spiky tree is known as a great entry plant for household gardeners—it's easy to care for, drought-tolerant, and nearly indestructible. This small tree will grow to about 20 feet in warm outdoor climates, but it is generally grown as a potted houseplant and kept pruned to 6 feet or less. Keep the dragon tree away from pets because it's toxic to animals if ingested.
                </Desc>
            </Left>
            <Right>
                <Image src={Dracaena}/>
            </Right>
            
        </Container>
    )
}

export default About
