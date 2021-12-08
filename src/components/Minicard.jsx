import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  width: 250px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);

  @media only screen and (max-width: 480px) {
    width: 130px
  }
`;

// const Image = styled.img`
//   width: 20px;
// `;

const Title = styled.span`
  font-weight: bold;
  font-size: 15px;
`;

const Text = styled.span`
  margin-top: 10px;
  text-align:center;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Minicard = (props) => {
    return (
        <Container>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
      </Container>
    )
}

export default Minicard
