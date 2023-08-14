import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
font-family: sans-serif;
  background-color: #254067;
  color: white;
font-size: 14px;
text-align: left;
@media (max-width: 768px) {
  font-size: 10px;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FooterItem = styled.div`
  padding: 1rem;
  text-align: center;
`;

const Footer = () => {
  const footerElements = [
    "Home",
    "About us",
    "Track",
    "Services",
    "Pricing",
    "How it works",
    "Contact us",
    "Testimonial",
    "Mission",
    "Vision",
    "Media",
    "Values",
  ];

  return (
    <FooterContainer>
      <FooterGrid>
        {footerElements.map((element, index) => (
          <FooterItem key={index}>{element}</FooterItem>
        ))}
      </FooterGrid>
    </FooterContainer>
  );
};

export default Footer;
