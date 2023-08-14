import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const ReviewsContainer = styled.div`
  padding: 2rem;
  background-color: #f4f4f4;



`;

const ReviewCard = styled.div`
  text-align: left;
  padding: 2rem;
  font-family: monospace;
  width:300px;
  height:250px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 2px 2px 2px #254067;
`;

const ReviewText = styled.p`
  font-size: 14px;
`;

const ReviewerName = styled.p`
  font-weight: bold;
  margin-top: 1rem;
`;

const CustomerReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth >= 768 ? 3 : 1, 
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 1000,
  };

  const reviews = [
    {
      text: 'I needed to send confidential medical records to a colleague overseas. ShipSmartly ensured that my package was handled discreetly and securely. The real-time tracking feature was invaluable, and the package arrived right on time. Highly recommended!"',
      reviewer: 'Dr. Emily M., Medical Practitioner',
    },
    {
      text: 'As a business owner, confidentiality is a top priority for me. ShipSmartly delivered exceptional service, from the careful packaging of sensitive documents to the timely international delivery. Their platform made tracking my shipment easy and stress-free.',
      reviewer: 'Maria D., Financial Consultant',
    },
    {
        text: `I was hesitant about sending confidential financial documents through a shipping service, but ShipSmartly put my worries to rest. The level of professionalism and security they provided was impressive. My package arrived safely and discreetly, and I couldn't be happier with their service.`,
        reviewer: 'John Doe',
      },
      {
        text: 'When it comes to sending legal documents across borders, ShipSmartly is my go-to choice. Their attention to detail, secure packaging, and reliable delivery make them a trusted partner. The tracking system is a game-changer for staying informed throughout the process.',
        reviewer: 'David P., Attorney-at-Law',
      },
      {
        text: 'Confidentiality is paramount in our line of work. ShipSmartly not only met but exceeded our expectations. Their seamless customs clearance process and encrypted tracking system provide a level of security that sets them apart. A truly reliable logistics partner.',
        reviewer: 'Sarah L., Security Consultant',
      },
      {
        text: `I had an urgent need to ship sensitive prototypes to a client abroad. ShipSmartly came through with flying colors. Their express delivery option ensured my package arrived ahead of schedule, and the discreet packaging kept the contents confidential. I'll definitely be using their services again.`,
        reviewer: ' Michael R., Product Designer',
      },
      {
        text: `Shipping confidential legal documents used to be a nerve-wracking process. Thanks to ShipSmartly, it's now a breeze. Their user-friendly platform, exceptional customer support, and impeccable handling of confidential materials make them an indispensable asset.`,
        reviewer: 'Jessica H., Legal Assistant',
      },
      {
        text: `I can't express how pleased I am with ShipSmartly. Their dedication to preserving confidentiality, coupled with their efficient logistics, made my cross-border shipment stress-free. The real-time tracking allowed me to monitor my package's journey every step of the wa`,
        reviewer: 'Mark T., Entrepreneur',
      },
      {
        text: 'I run a small business that deals with proprietary technology. ShipSmartly understands the importance of safeguarding our intellectual property. Their secure shipping and discreet handling have earned my trust. The tracking platform is a fantastic tool for maintaining visibility over our shipments.',
        reviewer: 'Rebecca G., Tech Innovator',
      },
      {
        text: 'Shipping sensitive research materials internationally used to be a logistical nightmare. ShipSmartly changed that with their top-notch service. The peace of mind that comes from real-time tracking and their commitment to confidentiality is invaluable.',
        reviewer: 'Dr. Alex R., Research Scientist',
      },
    // ... add more reviews
  ];

  return (
    <ReviewsContainer>
     <p style={{textAlign:"center", marginTop:"100px",marginBottom:"20px", fontWeight:"700", fontFamily:"sans-serif", color:"#254067", fontSize:"14px"}}>Testimonial</p>
    <h2 style={{textAlign:"center", marginTop:"10px",marginBottom:"30px", fontWeight:"700", fontFamily:"sans-serif", color:"#254067"}}>Read Some Of Our Customers Feedback</h2>
    
      <Slider {...settings}>
        {reviews.map((review, index) => (
            <>
          <ReviewCard key={index}>
            <ReviewText>"{review.text}"</ReviewText>
            <ReviewerName>- {review.reviewer}</ReviewerName>
          </ReviewCard>
          </>
        ))}
      </Slider>
    </ReviewsContainer>
  );
};

export default CustomerReviews;
