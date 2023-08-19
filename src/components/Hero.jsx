import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Hero = ({ header, paragraph, buttonText }) => {
  const [code, setCode] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setCode(inputValue);
    setIsButtonDisabled(!inputValue); // Enable/disable the button based on input value presence
  };

  const handleSubmit = () => {
    navigate(`/Dashboard/${code}`);
  };

  return (
    <HeroContainer>
      <HeroText>
        <HeroHeader>{header}</HeroHeader>
        <HeroParagraph>"{paragraph}"</HeroParagraph>
        <HeroTrack>Track your package</HeroTrack>
        <HeroInputContainer onSubmit={handleSubmit}>
          <HeroInput
            type="text"
            placeholder="Enter tracking number"
            required
            name="code"
            label="Tracking code"
            id="tracking code"
            value={code}
            onChange={handleInputChange}
          />
          <HeroButton onClick={handleSubmit} type="submit" disabled={isButtonDisabled}>
            {buttonText}
          </HeroButton>
        </HeroInputContainer>
      </HeroText>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  font-family: sans-serif;
  background-image: url(https://res.cloudinary.com/dvd8hlffl/image/upload/v1692402566/heroShip_dacv6i_qolrlk.jpg);
  background-size: cover;
  background-position: center;
  box-shadow: 0px 4px 4px 0px #00000040, inset 0 0 0 1000px rgba(0, 0, 0, 0.7);
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dbe4eb;
  @media (max-width: 768px) {
    height: 80vh;
  }
`;

const HeroText = styled.div`
  text-align: center;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const HeroHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 3rem;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;
const HeroTrack = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;
const HeroParagraph = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

const HeroInputContainer = styled.form`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const HeroInput = styled.input`
  padding: 0.5rem;
  border: none;
  height: 40px;
  width: 300px;
  outline: none;
  font-size: 16px;
  @media (max-width: 768px) {
    height: 40px;
    width: 200px;
    padding: 0 0 0 0.2rem;
  }
`;

const HeroButton = styled.button`
  background-color: #254067;
  color: white;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  height: 50px;
  width: 100px;
  margin-left: 1rem;
  @media (max-width: 768px) {
    height: 40px;
  }
`;

export default Hero;
