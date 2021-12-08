import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const Container = styled.div`
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    background-color: white;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content:space-between;
    align-items: center;
`
const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 480px) {
        width: 90%;
    }
`
const Logo = styled.h1`
    font-weight: bold;
    text-decoration: underline green;
    cursor: pointer;
`
const Menu = styled.ul`
    display: flex;
    list-style: none;

    @media only screen and (max-width: 480px) {
        display: none;
    }
`
const MenuItem = styled.li`
    margin-right: 30px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo><Link to="About" smooth={true} duration={1000} style={{textDecoration:"underline green"}}>Dracaena Marginata</Link></Logo>
                    <Menu>
                        <MenuItem><Link to="Soil" smooth={true} duration={1000}>Soil</Link></MenuItem>
                        <MenuItem><Link to="Water" smooth={true} duration={1000}>Water</Link></MenuItem>
                        <MenuItem><Link to="Light" smooth={true} duration={1000}>Light</Link></MenuItem>
                        <MenuItem><Link to="Temperature" smooth={true} duration={1000}>Temperature</Link></MenuItem>
                    </Menu>
                </Left>
                <span>FAQ</span>
            </Wrapper>
        </Container>
    )
}

export default Navbar
