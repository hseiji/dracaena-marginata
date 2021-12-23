import React, { useContext } from 'react'
import styled from "styled-components";
import Day from '../img/sun.png';
import Night from '../img/moon.png';
import { ThemeContext } from '../context';

const Container = styled.div`
    width: 50px;
    height: 25px;
    border-radius: 20px;
    border: 1pz solid #999;
    background-color: white;
    position: fixed;
    top: 50px;
    right: 10px;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #999;
`;

const Image = styled.img`
    width: 15px;
    height: 15px;
`;

const Button = styled.button`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #81b181;
    position: absolute;
    cursor: pointer;
`;

const DarkMode = () => {

    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({type: "TOGGLE"});
    };

    return (
        <Container>
            <Image src={Day} alt=""/>
            <Image src={Night} alt=""/>
            <Button
                onClick={handleClick}
                style={{left: theme.state.darkMode ? 0 : 25}}>
            </Button>
        </Container>
    )
}

export default DarkMode
