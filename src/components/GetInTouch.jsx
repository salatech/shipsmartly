import React from "react";
import styled from "styled-components";
import axios from "axios";

const GetInTouch = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"), 
    };

    try {
      const response = await axios.post(
        "https://api-shipsmartlyservices.com/api/v1/team/contact/",
        contactData
      );

      console.log("API response:", response.data);

    
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <GetInTouchContainer>
      <Title>Get In Touch</Title>
      <Subtitle>Get In Touch With Us</Subtitle>

      <Form  onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input  id="name" label="Name" name="name" autoFocus />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
  
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message:</Label>
          <TextArea
          
            name="message"
            label="Message"
            type="text"
            id="message"
          ></TextArea>
        </FormGroup>
        <SubmitButton type="submit" />
      </Form>
    </GetInTouchContainer>
  );
};

const GetInTouchContainer = styled.div`
  padding: 2rem;
  background-color: #f4f4f4;
  font-family: sans-serif;
  color: #254067;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Form = styled.form`
  max-width: 800px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  max-width:"100%";

`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none; 
   @media (max-width: 768px) {
    width: 100%;
    height: 40px;
    padding: 0;
  }

`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  @media (max-width: 768px) {
    padding:  0.5rem 0;
  }
`;

const SubmitButton = styled.input`
  background-color: #254067;
  width: 100%;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 1rem 1rem;
  cursor: pointer;
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

export default GetInTouch;
