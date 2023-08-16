import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import HeroImage from "../assets/heroImage2.jpg";
import HeroImg from "../assets/hero.jpg";


const HeroContainer = styled.div`
  font-family: sans-serif;
  background-image: url(${heroImage});
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
const SlideTextH2 = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const SlideTextP = styled.p`
  font-weight: normal;
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 0.8rem;
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

const SectionContainer = styled.div`
  background-color: #f4f4f4;
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 1.5rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const InputContainer = styled.form`
  font-family: sans-serif;
  flex: 1;
  max-width: 50%;
  margin-left: 20px;
  align-items: center;
  @media (max-width: 768px) {
    max-width: 100%;
    justify-content: center;
    margin-left: 0px;
  }
`;

const Input = styled.input`
  width: 99%;
  padding-left: 0.3rem;
  outline: none;
  height: 40px;
  border: 1px solid #254067;
`;

const Button = styled.input`
  background-color: #254067;
  color: white;
  margin-top: 10px;
  height: 50px;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  width: 100%;
  text-transform: uppercase;
`;

const Track = () => {
  const [code, setCode] = useState('');

const navigate = useNavigate();
const handleSubmit = () => {
  navigate(`/Dashboard/${code}`);
};
  return (
    <>
      <HeroContainer>
        <HeroText>
          <HeroHeader>Track Your Package</HeroHeader>
          <HeroSub>
            Home / <span style={{ color: "red" }}> Track</span>
          </HeroSub>
        </HeroText>
      </HeroContainer>
      <SectionContainer>
        <ContentWrapper>
          <ImageContainer>
            <Image src={HeroImg} alt="Image" />
          </ImageContainer>
             {/* <h2 style={{ fontSize: "3.5rem" }}>Track a Package</h2>
            <p style={{ fontSize: "1.1rem", fontWeight: "400" }}>
              Enter your unique tracking number to get real-time updates on the
              status and location of your confidential package. Our advanced
              tracking technology ensures you're always informed about your
              shipment's journey.
            </p> */}
          <InputContainer onSubmit={handleSubmit }>
          <SlideTextH2>Track a Package</SlideTextH2>
            <SlideTextP>
              Enter your unique tracking number to get real-time updates on the
              status and location of your confidential package. Our advanced
              tracking technology ensures you're always informed about your
              shipment's journey.
            </SlideTextP>
            <Input
            required
            name="code"
            label="Tracking code"
            type="text"
            id="tracking code"
            placeholder="Enter tracking code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            />
            <Button onClick={handleSubmit} type="submit" />
          </InputContainer>
        </ContentWrapper>
      </SectionContainer>
    </>
  );
};

export default Track;
