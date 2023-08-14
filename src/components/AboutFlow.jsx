import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import Image1 from '../assets/about.jpg'
import Image2 from '../assets/hero.jpg'
import './AboutFlow.css'

const SlideContainer = styled.div`
  display: flex;
  font-family:sans-serif;
  justify-content: center;
  height: 400px;
  padding: 0px 100px;
  background-color: #f4f4f4;
  @media (max-width: 768px) {
   flex-direction:column;
   padding:0px;
  }
`;

const SlideImage = styled.img`
  max-width: 50%;
  max-height: 100%;
  @media (max-width: 768px) {
    max-width: 100%;
  max-height: 50%;
  }
`;

const SlideText = styled.div`
  text-align: justify;
  align-items: center;
  padding-left: 20px;
`;
const SlideTextH2 = styled.h2`
  font-weight:700;
  font-size:2.5rem;
  @media (max-width: 768px) {
    font-size:1rem;
  }
  
  
`;
const SlideTextP = styled.p`
  font-weight:500;
  @media (max-width: 768px) {
    font-size:.8rem;
  }
  
`;
const SearchContainer = styled.div`
display:flex;
align-items:center;
  
`;
const SlideTextInput = styled.input`
  width:70%;
  height:40px;
  padding-left:10px;
  text-transform:uppercase;
  outline:none;
  
`;

const SlideTextButton = styled.input`
 flex:1;
  height:45px;
  text-transform:uppercase;
  background-color:#254067;
  color:white;
  margin-left:10px;
  outline:none;
  
`;


const AboutFlow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 1000,
  };

  return (
   
    <Slider {...settings} >
  <>
      <SlideContainer>
        <SlideImage src={Image1} alt="Image 1" />
        <SlideText>
        < SlideTextH2>we specialize in handling confidential shipments with the utmost discretion and security.</SlideTextH2>
          < SlideTextP>With years of experience in the logistics industry, we have established a reputation for excellence in ensuring safe and timely deliveries while maintaining,
the highest level of confidentiality.</SlideTextP>
    
        </SlideText>
      </SlideContainer>
      </>
      <>
      <SlideContainer>
        <SlideImage src={Image2} alt="Image 2" />
        <SlideText>
          < SlideTextH2>Track a Package</SlideTextH2>
          < SlideTextP>Enter your unique tracking number to get real-time updates on the status and location of your confidential package. Our advanced tracking technology ensures you're always informed about your shipment's journey.</SlideTextP>
         <SearchContainer>

         <SlideTextInput margin="normal"
         width="100%"
                required
                name="code"
                label="Tracking code"
                type="text"
                id="tracking code"
                placeholder="Enter your tracking number" />
                <SlideTextButton type="submit" />
         </SearchContainer>
      
        </SlideText>
      </SlideContainer>
      </>
     

    </Slider>
 
  );
};

export default AboutFlow;
