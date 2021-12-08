import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  height: 10%;
  background-color: #111;
  color: lightgray;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    padding: 10px;
  }
`;

const Copyright = styled.span`
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Footer = () => {
    return (
        <Container>
        <Wrapper>
          <Copyright>HenriqueT Ⓒ 2021</Copyright>
        </Wrapper>
      </Container>
    )
}

export default Footer
