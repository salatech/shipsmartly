import React from "react";
import styled from "styled-components";
import Services from "../components/Services";
import AboutCon from "../components/AboutCon";
import GetInTouch from "../components/GetInTouch";
const HeroContainer = styled.div`
  font-family: sans-serif;
  background-image: url(https://res.cloudinary.com/dvd8hlffl/image/upload/v1692179293/heroImg_voxiay.jpg);
  background-size: cover;
  background-position: center;
  box-shadow: 0px 4px 4px 0px #00000040, inset 0 0 0 1000px rgba(0, 0, 0, 0.7);
  height: 30vh;
  display: flex;
  align-items: center;
  color: aliceblue;
  @media (max-width: 768px) {
  }
`;

const HeroHeader = styled.h1`
  font-size: 2.5rem;
  margin-left: 10px;
  margin-bottom: 3rem;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const HeroText = styled.div`
  text-align: left;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;
const HeroSub = styled.p`
  font-size: 1.5rem;
  margin-left: 10px;
`;

const About = () => {
 
  return (
    <>
      <HeroContainer>
        <HeroText>
          <HeroHeader>About Us</HeroHeader>
          <HeroSub>
            Home / <span style={{ color: "red" }}> About us</span>
          </HeroSub>
        </HeroText>
      </HeroContainer>
      <Services />
     <AboutCon />
     <GetInTouch />
    </>
  );
};

export default About;
