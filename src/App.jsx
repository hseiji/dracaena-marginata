import { Link } from "react-scroll";
import styled from "styled-components";
import About from "./components/About";
import Footer from "./components/Footer";
import Light from "./components/Light";
import Navbar from "./components/Navbar";
import Soil from "./components/Soil";
import Temperature from "./components/Temperature";
import Water from "./components/Water";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`

const TopBtn = styled.button`
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: #57a357;
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 4px;
`;

const App = () => {

  return (
    <>
      <Container>
        <Navbar/>
        <About/>
      </Container>
      <Container>
        <Soil/>
      </Container>
      <Container>
        <Water/>
      </Container>
      <Container>
        <Light/>
      </Container>
      <Container>
        <Temperature/>
        <Footer/>
      </Container>
      <TopBtn id="myBtn"><Link to="About" smooth={true} duration={1000}>Top</Link></TopBtn>
    </>
  );
};

export default App;