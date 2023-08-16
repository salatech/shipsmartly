import React from 'react'
import styled from "styled-components";
const abouts = [
    {  litTitle:"services",
      title: "Our Services",
       subTitle: "Confidential Shipping:",
      subContent:
        "We offer a range of shipping options tailored to your confidentiality needs. From discreet packaging to secure handling, your package is in safe hands",
      subTitle2: "Customs Clearance:",
      subContent2:
        "Our expert team takes care of all customs formalities to ensure a smooth and hassle-free process for your international shipments.",
      SubTitle3: "Express Delivery:",
      subContent3:
        "Need your package to arrive quickly? Our express delivery option guarantees swift and secure transit.",
      subTitle4: "",
      subContent4: "",
    },
    {litTitle:" values and commitments",
    title: "Our Core Values and Commitments",
   subTitle: "Customer Trust and Excellence:",
    subContent:
      "At the heart of our mission is cultivating unwavering customer trust. We are dedicated to delivering services of the utmost quality that consistently surpasses customer expectations. Every facet of our offerings is meticulously tailored to fulfill our client's unique requirements.",
    subTitle2: "Affordable Excellence:",
    subContent2:
      "Striving for excellence doesn't mean extravagant prices. We are resolute in our pursuit of cost efficiency to ensure reasonable pricing for our valued customers. Our commitment to reducing costs while maintaining exceptional standards underscores our dedication to affordability without compromise.",
    SubTitle3: "Swift and Accurate Service:",
    subContent3:
      "Your orders are our priority, and we are unwaveringly committed to providing prompt and precise service. Your shipments are handled swiftly and accurately, ensuring that your time-sensitive needs are met with precision and care",
    subTitle4: "Empowering Relationships:",
    subContent4:
      "Our employees are the cornerstone of our success, and we honor each individual as a unique and invaluable asset. Upholding their dignity and recognizing their contributions, we provide a secure, dignified work environment with fair compensation and safe conditions. Our commitment extends beyond the workplace to support their personal and familial responsibilities.",
  },
    {litTitle:"how it works",
      title: "How It Works:",
         subTitle: "Secure Packaging:",
      subContent:
        "Our team expertly packages your confidential items, ensuring they are safeguarded throughout their journey.",
      subTitle2: "Real-Time Tracking:",
      subContent2:
        "Use your unique tracking number to monitor your package's progress in real-time, from pickup to delivery.",
      SubTitle3: "Timely Delivery:",
      subContent3:
        "Rest assured that your package will be delivered securely and on time to its destination",
      subTitle4: "",
      subContent4: "",
    },
   
    {litTitle:"Our missions",
      title: "Our Mission",
      content:
        "Our mission at ShipSmartly Delivery and Logistics is to be the unparalleled one-stop freight and logistics partner for companies of all sizes, empowering their growth with seamless solutions that span local deliveries to global industrial shipments. Rooted in financial strength and driven by substantial investments in cutting-edge technology and infrastructure, we are committed to continuously sourcing new clients and elevating cost efficiency. Our dedicated team of accredited professionals forms the backbone of our success, ensuring excellence in all aspects of transportation.",
    },
    {litTitle:"our visons",
      title: "Our Vision",
      content:
        "As a globally recognized leader, ShipSmartly envisions itself as the ultimate third-party logistics solution and premier transportation provider, trusted by clients around the world. We aspire to expand our footprint across the globe while maintaining an unwavering commitment to reliability, flexibility, and cost-effectiveness. Our holistic approach to logistics solutions ensures that customer needs are not just met but exceeded, both within domestic boundaries and on the, international stage. We are dedicated to understanding and fulfilling our clients' requirements, contributing to their prosperity through seamless, dependable, and innovative logistics strategies",
    },
    {litTitle:"pricing",
      title: "Pricing",
      content:
        "Explore our transparent pricing plans based on package size, destination, and delivery speed. We believe in providing value for your money while ensuring the highest standards of security and confidentiality.",
    },
  ];
const AboutCon = ()  => {
    const selectedAbout = abouts[1]; 
  return (
  // Get the object at index 1
 <div>
        <AboutContainer>
          <Section>
            <LitTitle>{selectedAbout.litTitle}</LitTitle>
            <SectionTitle>{selectedAbout.title}</SectionTitle>
            <SectionContent>{selectedAbout.content}</SectionContent>
            <DivWrapper>
              <SubSection>
                <SubSectionTitle>{selectedAbout.subTitle}</SubSectionTitle>
                <SubSectionContent>{selectedAbout.subContent}</SubSectionContent>
              </SubSection>
              <SubSection>
                <SubSectionTitle>{selectedAbout.subTitle2}</SubSectionTitle>
                <SubSectionContent>{selectedAbout.subContent2}</SubSectionContent>
              </SubSection>
              <SubSection>
                <SubSectionTitle>{selectedAbout.SubTitle3}</SubSectionTitle>
                <SubSectionContent>{selectedAbout.subContent3}</SubSectionContent>
              </SubSection>
              <SubSection>
                <SubSectionTitle>{selectedAbout.subTitle4}</SubSectionTitle>
                <SubSectionContent>{selectedAbout.subContent4}</SubSectionContent>
              </SubSection>
            </DivWrapper>
          </Section>
        </AboutContainer>
  
    </div>
  )
}
const AboutContainer = styled.div`
  padding: 2rem;
  font-family: sans-serif;

`;

const Section = styled.div`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
 
  color:#254067;
`;
const LitTitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
  font-family:monospace; 
  text-align: center;
  color:#254067;
`;

const SectionContent = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color:#254067;
  margin-bottom: 1.5rem;
`;

const DivWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  font-family: sans-serif;
  color:#254067;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SubSection = styled.div`
  flex-basis: 100%;
  margin-bottom: 1.5rem;
  font-weight: 500;
  color:#254067;

  @media (min-width: 768px) {
    flex-basis: calc(50% - 1rem);
    margin-bottom: 0;
  }
`;

const SubSectionTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color:#254067;
`;

const SubSectionContent = styled.p`
  font-size: 1rem;
  line-height: 1.4;
`;
export default AboutCon
