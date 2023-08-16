import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AboutFlow.css";

const AboutFlow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 1000,
  };
  const [code, setCode] = useState("");

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(`/Dashboard/${code}`);
  };
  return (
    <Slider {...settings}>
      <>
        <SlideContainer>
          <SlideImage
            src="https://res.cloudinary.com/dvd8hlffl/image/upload/v1692179302/about_w4i4k8.jpg"
            alt="Image 1"
          />
          <SlideText>
            <SlideTextH2>
              we specialize in handling confidential shipments with the utmost
              discretion.
            </SlideTextH2>
            <SlideTextP>
              With years of experience in the logistics industry, we have
              established a reputation for excellence in ensuring safe and
              timely deliveries while maintaining, the highest level of
              confidentiality.
            </SlideTextP>
          </SlideText>
        </SlideContainer>
      </>
      <>
        <SlideContainer>
          <SlideImage
            src="https://res.cloudinary.com/dvd8hlffl/image/upload/v1692179293/heroImg_voxiay.jpg"
            
            alt="Image 2"
          />
          <SlideText>
            <SlideTextH2>
              At the heart of our mission is cultivating unwavering customer
              trust
            </SlideTextH2>
            <SlideTextP>
              We are dedicated to delivering services of the utmost quality that
              consistently surpasses customer expectations. Every facet of our
              offerings is meticulously tailored to fulfill our client's unique
              requirements.
            </SlideTextP>
     
          </SlideText>
        </SlideContainer>
      </>
      <>
        <SlideContainer>
          <SlideImage
            src="https://res.cloudinary.com/dvd8hlffl/image/upload/v1692179296/heroShip_dacv6i.jpg"
            
            alt="Image 2"
          />
          <SlideText>
            <SlideTextH2>
              At the heart of our mission is cultivating unwavering customer
              trust
            </SlideTextH2>
            <SlideTextP>
              We are dedicated to delivering services of the utmost quality that
              consistently surpasses customer expectations. Every facet of our
              offerings is meticulously tailored to fulfill our client's unique
              requirements.
            </SlideTextP>
      
          
          </SlideText>
        </SlideContainer>
      </>
    </Slider>
  );
};

const SlideContainer = styled.div`
  display: flex;
  font-family: sans-serif;
  justify-content: center;
  align-items: center; /* Vertically center align the content */
  height: 450px;
  margin: 0px 100px;
  padding: 10px;
  color: #333;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0px;
    margin: 0 10px;
  }
`;

const SlideImage = styled.img`
  max-width: 50%;
  max-height: 100%;
  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0 10px;
    max-height: 50%;
  }
`;

const SlideText = styled.div`
  text-align: left;

  padding-left: 20px;
  @media (max-width: 768px) {
    padding: 0 10px;
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
const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const SlideTextInput = styled.input`
  width: 70%;
  height: 40px;
  padding-left: 10px;
  text-transform: uppercase;
  outline: none;
  @media (max-width: 768px) {
    height: 35px;
  }
`;

const SlideTextButton = styled.input`
  height: 45px;
  width: 70%;
  margin-top: 10px;
  text-transform: uppercase;
  background-color: #254067;
  color: white;
  outline: none;
  @media (max-width: 768px) {
    height: 35px;
  }
`;

export default AboutFlow;
