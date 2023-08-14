import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  width: 70%;
  display: grid;
  margin:auto;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 2rem;
  justify-content: center;
  text-align: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top:-60px;
    width: 80%;
  }

`;

const GridItem = styled.div`
margin-top:-60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:white;
  border: .1px solid white;
  text-align: center;
  background-color:#254067;
  @media (max-width: 768px) {
    margin-top:0px;
  }

`;

const SvgContainer = styled.div`
  width: 100px;
  display: flex;
  margin-top: 20px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  height: 120px;



`;

const Svg = styled.svg`
  width: 50%;


`
const SvgText = styled.p`
  color:white;
`
;

const GridSection = () => {
  return (
    <GridContainer>
      <GridItem>
        <SvgContainer>
         <Svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 116 116" class="fxg-cube__icon" tabindex="-1" focusable="false"><g xmlns="http://www.w3.org/2000/svg" class="fxg-cube__icon-grey"><line x1="45.43" y1="49.83" x2="1" y2="28.5" fill="none" stroke="#333333" stroke-miterlimit="10" stroke-width="3" class="smallstroke"></line><line x1="45.43" y1="49.83" x2="45.43" y2="91.39" fill="none" stroke="#333333" stroke-miterlimit="10" stroke-width="3" class="smallstroke"></line><line x1="89.69" y1="28.5" x2="45.43" y2="49.83" fill="none" stroke="#333333" stroke-miterlimit="10" stroke-width="3" class="smallstroke"></line><line x1="66.19" y1="17.22" x2="21.93" y2="38.55" fill="none" stroke="#333333" stroke-miterlimit="10" stroke-width="3" class="smallstroke"></line><polyline points="89.69 47.24 89.69 28.5 45.39 7.17 1 28.5 1 71.16 45.39 92.49 57.9 86.47" fill="none" stroke="#333333" stroke-miterlimit="10" stroke-width="3" class="smallstroke"></polyline><path d="M87.24,53.76a19.74,19.74,0,0,1,0,27.12,17.9,17.9,0,0,1-26,0,19.74,19.74,0,0,1,0-27.12A17.9,17.9,0,0,1,87.24,53.76Z" fill="none" stroke="#333333" stroke-miterlimit="10" stroke-width="3" class="smallstroke"></path><polyline points="90.83 77.86 110.61 98.47 104.83 104.5 85.04 83.89" fill="none" stroke="#333333" stroke-miterlimit="10" stroke-width="3" class="smallstroke"></polyline></g><g xmlns="http://www.w3.org/2000/svg" class="fxg-cube__icon-white"><line x1="45.43" y1="49.83" x2="1" y2="28.5" fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="3" class="smallstroke"></line><line x1="45.43" y1="49.83" x2="45.43" y2="91.39" fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="3" class="smallstroke"></line><line x1="89.69" y1="28.5" x2="45.43" y2="49.83" fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="3" class="smallstroke"></line><line x1="66.19" y1="17.22" x2="21.93" y2="38.55" fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="3" class="smallstroke"></line><polyline points="89.69 47.24 89.69 28.5 45.39 7.17 1 28.5 1 71.16 45.39 92.49 57.9 86.47" fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="3" class="smallstroke"></polyline><path d="M87.24,53.76a19.74,19.74,0,0,1,0,27.12,17.9,17.9,0,0,1-26,0,19.74,19.74,0,0,1,0-27.12A17.9,17.9,0,0,1,87.24,53.76Z" fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="3" class="smallstroke"></path><polyline points="90.83 77.86 110.61 98.47 104.83 104.5 85.04 83.89" fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="3" class="smallstroke"></polyline></g></Svg>
         <SvgText>Track</SvgText>
        </SvgContainer>
        
      </GridItem>
      <GridItem>
      <SvgContainer>
         <Svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 116 116" class="fxg-cube__icon" tabindex="-1" focusable="false"><g xmlns="http://www.w3.org/2000/svg" class="fxg-cube__icon-grey"><polyline points="21.66 38.56 21.66 22.12 66.28 1.12 110.81 22.12 110.81 64.14 66.28 85.15 52.06 78.16" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline><line x1="66.28" y1="43.13" x2="21.66" y2="22.12" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="66.28" y1="43.13" x2="66.28" y2="85.15" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="110.81" y1="22.12" x2="66.28" y2="43.13" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="87.19" y1="11.02" x2="42.71" y2="32.03" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><path d="M1.86,43H47.14a.86.86,0,0,1,.86.86v66.28a.86.86,0,0,1-.86.86H1.86a.86.86,0,0,1-.86-.86V43.86A.86.86,0,0,1,1.86,43Z" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path><rect x="7.01" y="49.02" width="34.98" height="18" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></rect><line x1="7" y1="77" x2="12" y2="77" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="17" y1="77" x2="22" y2="77" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="27" y1="77" x2="32" y2="77" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="37" y1="77" x2="42" y2="77" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="7" y1="87" x2="12" y2="87" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="17" y1="87" x2="22" y2="87" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="27" y1="87" x2="32" y2="87" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="7" y1="97" x2="12" y2="97" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="17" y1="97" x2="22" y2="97" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="27" y1="97" x2="32" y2="97" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="40" y1="87" x2="40" y2="97" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line></g><g xmlns="http://www.w3.org/2000/svg" class="fxg-cube__icon-white"><polyline points="21.66 38.56 21.66 22.12 66.28 1.12 110.81 22.12 110.81 64.14 66.28 85.15 52.06 78.16" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline><line x1="66.28" y1="43.13" x2="21.66" y2="22.12" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="66.28" y1="43.13" x2="66.28" y2="85.15" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="110.81" y1="22.12" x2="66.28" y2="43.13" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="87.19" y1="11.02" x2="42.71" y2="32.03" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><path d="M1.86,43H47.14a.86.86,0,0,1,.86.86v66.28a.86.86,0,0,1-.86.86H1.86a.86.86,0,0,1-.86-.86V43.86A.86.86,0,0,1,1.86,43Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path><rect x="7.01" y="49.02" width="34.98" height="18" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></rect><line x1="7" y1="77" x2="12" y2="77" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="17" y1="77" x2="22" y2="77" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="27" y1="77" x2="32" y2="77" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="37" y1="77" x2="42" y2="77" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="7" y1="87" x2="12" y2="87" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="17" y1="87" x2="22" y2="87" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="27" y1="87" x2="32" y2="87" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="7" y1="97" x2="12" y2="97" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="17" y1="97" x2="22" y2="97" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="27" y1="97" x2="32" y2="97" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="40" y1="87" x2="40" y2="97" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line></g></Svg>  
         <SvgText>Ship</SvgText>
        </SvgContainer>
    
      </GridItem>
      <GridItem>
        <SvgContainer>
        <Svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 116 116" class="fxg-cube__icon" tabindex="-1" focusable="false"><g xmlns="http://www.w3.org/2000/svg" class="fxg-cube__icon-grey"><path d="M56,110.46C42.5,91.75,17,62.05,17,38.77,17,18,34.46,1.17,56,1.17S95,18,95,38.77C95,62.05,69.5,91.75,56,110.46Z" fill="none" stroke="#585958" stroke-miterlimit="10" stroke-width="3" class="smallstroke"></path><ellipse cx="56" cy="36.94" rx="13.83" ry="13.83" fill="none" stroke="#333333" stroke-miterlimit="10" stroke-width="3" class="smallstroke"></ellipse></g><g xmlns="http://www.w3.org/2000/svg" class="fxg-cube__icon-white"><path d="M56,110.46C42.5,91.75,17,62.05,17,38.77,17,18,34.46,1.17,56,1.17S95,18,95,38.77C95,62.05,69.5,91.75,56,110.46Z" fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="3" class="smallstroke"></path><ellipse cx="56" cy="36.94" rx="13.83" ry="13.83" fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="3" class="smallstroke"></ellipse></g></Svg>
        <SvgText>Location</SvgText>
        </SvgContainer>
        
      </GridItem>
      <GridItem>
      <SvgContainer>
         <Svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 116 116" class="fxg-cube__icon" tabindex="-1" focusable="false"><g xmlns="http://www.w3.org/2000/svg" class="fxg-cube__icon-grey"><polyline points="21.66 38.56 21.66 22.12 66.28 1.12 110.81 22.12 110.81 64.14 66.28 85.15 52.06 78.16" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline><line x1="66.28" y1="43.13" x2="21.66" y2="22.12" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="66.28" y1="43.13" x2="66.28" y2="85.15" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="110.81" y1="22.12" x2="66.28" y2="43.13" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="87.19" y1="11.02" x2="42.71" y2="32.03" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><path d="M1.86,43H47.14a.86.86,0,0,1,.86.86v66.28a.86.86,0,0,1-.86.86H1.86a.86.86,0,0,1-.86-.86V43.86A.86.86,0,0,1,1.86,43Z" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path><rect x="7.01" y="49.02" width="34.98" height="18" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></rect><line x1="7" y1="77" x2="12" y2="77" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="17" y1="77" x2="22" y2="77" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="27" y1="77" x2="32" y2="77" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="37" y1="77" x2="42" y2="77" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="7" y1="87" x2="12" y2="87" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="17" y1="87" x2="22" y2="87" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="27" y1="87" x2="32" y2="87" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="7" y1="97" x2="12" y2="97" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="17" y1="97" x2="22" y2="97" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="27" y1="97" x2="32" y2="97" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="40" y1="87" x2="40" y2="97" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line></g><g xmlns="http://www.w3.org/2000/svg" class="fxg-cube__icon-white"><polyline points="21.66 38.56 21.66 22.12 66.28 1.12 110.81 22.12 110.81 64.14 66.28 85.15 52.06 78.16" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline><line x1="66.28" y1="43.13" x2="21.66" y2="22.12" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="66.28" y1="43.13" x2="66.28" y2="85.15" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="110.81" y1="22.12" x2="66.28" y2="43.13" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="87.19" y1="11.02" x2="42.71" y2="32.03" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><path d="M1.86,43H47.14a.86.86,0,0,1,.86.86v66.28a.86.86,0,0,1-.86.86H1.86a.86.86,0,0,1-.86-.86V43.86A.86.86,0,0,1,1.86,43Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path><rect x="7.01" y="49.02" width="34.98" height="18" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></rect><line x1="7" y1="77" x2="12" y2="77" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="17" y1="77" x2="22" y2="77" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="27" y1="77" x2="32" y2="77" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="37" y1="77" x2="42" y2="77" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="7" y1="87" x2="12" y2="87" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="17" y1="87" x2="22" y2="87" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="27" y1="87" x2="32" y2="87" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="7" y1="97" x2="12" y2="97" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="17" y1="97" x2="22" y2="97" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="27" y1="97" x2="32" y2="97" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="40" y1="87" x2="40" y2="97" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line></g></Svg>  <SvgText>Ship</SvgText>
        </SvgContainer>
    
      </GridItem>
    </GridContainer>
  );
};

export default GridSection;
