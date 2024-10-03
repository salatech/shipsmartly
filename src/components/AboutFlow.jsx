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
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false, // Enable automatic sliding
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
					<ServiceImage2 />
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
					<ServiceImage1 />

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
					<ServiceImage3 />
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
	gap: 50px;
	font-family: sans-serif;
	justify-content: space-between;
	align-items: center;
	height: 450px;
	margin: 0px 100px;
	padding: 10px;
	color: #333;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	background-color: white;
	@media (max-width: 768px) {
		flex-direction: column;
		gap: 0;
		height: 100%;
		padding: 0 20px;
		margin: 0 10px;
	}
`;

const SlideImage = styled.img`
	width: 50%;
	max-height: 100%;
	@media (max-width: 768px) {
		width: 100%;
		margin: 0 10px;
		max-height: 50%;
	}
`;
const ServiceImage = styled.div`
	width: 50vw;
	height: 100%;
	background-size: cover;
	background-position: center;
	@media (max-width: 768px) {
		width: 100%;
		height: 200px;
	}
`;

const ServiceImage1 = styled(ServiceImage)`
	background-image: url(/service1.webp);
`;

const ServiceImage2 = styled(ServiceImage)`
	background-image: url(/service2.webp);
`;

const ServiceImage3 = styled(ServiceImage)`
	background-image: url(/service3.webp);
`;

const SlideText = styled.div`
	text-align: left;
	width: 50vw;
	@media (max-width: 768px) {
		width: 100%;
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
	font-size: 1.2rem;
	@media (max-width: 768px) {
		font-size: 0.8rem;
	}
`;

export default AboutFlow;
