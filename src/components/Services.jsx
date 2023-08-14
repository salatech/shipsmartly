import React from 'react';
import styled from 'styled-components';
import ServiceImg1 from '../assets/service1.jpg'
import ServiceImg2 from '../assets/service2.jpg'
import ServiceImg3 from '../assets/service3.jpg'
const ServicesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 2rem;
  background-color: #f4f4f4;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ServiceCard = styled.div`
  text-align: center;
  width: 25%;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1.5rem;
  }
`;

const ServiceImage1 = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${ServiceImg1});
  background-size: cover;
  background-position: center;
`;
const ServiceImage2 = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${ServiceImg2});
  background-size: cover;
  background-position: center;
`;
const ServiceImage3 = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${ServiceImg3});
  background-size: cover;
  background-position: center;
`;
const ServiceDescription = styled.div`
  margin-top: 1rem;
  text-align: left;
  font-family: sans-serif;
  color:#254067;
`;

const Services = () => {
  return (
    <>
    <p style={{textAlign:"center", marginTop:"100px",marginBottom:"20px", fontWeight:"700", fontFamily:"sans-serif", color:"#254067", fontSize:"14px"}}>ShipSmartly Services</p>
    <h2 style={{textAlign:"center", marginTop:"10px",marginBottom:"30px", fontWeight:"700", fontFamily:"sans-serif", color:"#254067"}}>About ShipSmartly services</h2>
    <ServicesContainer>
      <ServiceCard>
        <ServiceImage1 > </ServiceImage1>
        <ServiceDescription>
          
                <h2>Confidential Shipping</h2>
            <p> We offer a range of shipping options tailored to your confidentiality needs. From discreet packaging to secure handling, your package is in safe hands.
      </p>
      
            
         </ServiceDescription>
      </ServiceCard>
      <ServiceCard>
      <ServiceImage2 > </ServiceImage2>
        <ServiceDescription>
            <h2>Customs Clearance</h2>
            <p>Our expert team takes care of all customs formalities to ensure a smooth and hassle-free process for your international shipments.</p>
            </ServiceDescription>
      </ServiceCard>
      <ServiceCard>
      <ServiceImage3 > </ServiceImage3>
        <ServiceDescription>
            <h2>ExpressDelivery</h2>
            <p>Need your package to arrive quickly? Our express delivery option guarantees swift and secure transit.</p>
            </ServiceDescription>
      </ServiceCard>
    </ServicesContainer>
    </>
  );
};

export default Services;
