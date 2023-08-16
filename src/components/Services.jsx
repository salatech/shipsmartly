import React from "react";
import styled from "styled-components";
import ServiceImg1 from "../assets/service1.jpg";
import ServiceImg2 from "../assets/service2.jpg";
import ServiceImg3 from "../assets/service3.jpg";

const Services = () => {
  return (
    <>
      <Title>ShipSmartly Services</Title>
      <Subtitle>About ShipSmartly services</Subtitle>
      <ServicesContainer>
        <ServiceCard>
          <ServiceImage1 />
          <ServiceDescription>
            <ServiceTitle>Confidential Shipping</ServiceTitle>
            <ServiceParagraph>
              We offer a range of shipping options tailored to your
              confidentiality needs. From discreet packaging to secure handling,
              your package is in safe hands.
            </ServiceParagraph>
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceImage2 />
          <ServiceDescription>
            <ServiceTitle>Customs Clearance</ServiceTitle>
            <ServiceParagraph>
              Our expert team takes care of all customs formalities to ensure a
              smooth and hassle-free process for your international shipments.
            </ServiceParagraph>
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceImage3 />
          <ServiceDescription>
            <h2>Express Delivery</h2>
            <p>
              Need your package to arrive quickly? Our express delivery option
              guarantees swift and secure transit.
            </p>
          </ServiceDescription>
        </ServiceCard>

      </ServicesContainer>
    </>
  );
};
const ServicesContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around;
  align-items: flex-start;
  padding: 2rem;
  background-color: #f4f4f4;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
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

const ServiceImage = styled.div`
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
`;

const ServiceImage1 = styled(ServiceImage)`
  background-image: url(${ServiceImg1});
`;

const ServiceImage2 = styled(ServiceImage)`
  background-image: url(${ServiceImg2});
`;

const ServiceImage3 = styled(ServiceImage)`
  background-image: url(${ServiceImg3});
`;

const ServiceDescription = styled.div`
  margin-top: 1rem;
  text-align: left;
  font-family: sans-serif;
  color: #333;
`;

const Title = styled.p`
  text-align: center;
  margin-top: 100px;
  margin-bottom: 20px;
  font-weight: 700;
  font-family: sans-serif;
  color: #254067;
  font-size: 14px;
`;

const Subtitle = styled.h2`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 30px;
  font-weight: 700;
  font-family: sans-serif;
  color: #254067;
`;
const ServiceTitle = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const ServiceParagraph = styled.p`
  font-weight: normal;
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
export default Services;
