import React from 'react';
import styled from 'styled-components';

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
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px; 
`;

const SubmitButton = styled.button`
  background-color:#254067;
  width: 100%;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 1rem 1rem;
  cursor: pointer;
`;

const GetInTouch = () => {
  return (
    <GetInTouchContainer>
     <p style={{textAlign:"center", marginTop:"100px",marginBottom:"20px", fontWeight:"700", fontFamily:"sans-serif", color:"#254067", fontSize:"14px"}}>Get In Touch</p>
    <h2 style={{textAlign:"center", marginTop:"10px",marginBottom:"30px", fontWeight:"700", fontFamily:"sans-serif", color:"#254067"}}>Get In Touch With Us</h2>
    
      <Form>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input type="text" id="name" name="name" placeholder="Your Name" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" name="email" placeholder="Your Email" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message:</Label>
          <TextArea id="message" name="message" rows="4" placeholder="Your Message"></TextArea>
        </FormGroup>
        <SubmitButton type="submit">SUBMIT</SubmitButton>
      </Form>
    </GetInTouchContainer>
  );
};

export default GetInTouch;
