import React from 'react';
import styled from 'styled-components';

const TimelineContainer = styled.div`
  position: relative;

`;

const TimelineDot = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #007bff; /* Adjust dot color */
  border-radius: 50%;
  left: -10px;
  top: 0;
`;

const TimelineLine = styled.div`
  position: absolute;
  width: 2px;
  background: linear-gradient(to bottom, #007bff, transparent, #007bff);
  left: 0px;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: -1; /* Ensure the line is behind the dots */
`;

const TimelineEvent = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 20px; /* Adjust spacing between events */
  padding-left: 30px;
`;

const TimelineContent = styled.div`
  background-color: #f4f4f4; /* Adjust content background color */
  padding: 10px;
  border-radius: 4px;
  width: 80%;
`;

const TimelineTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const TimelineDate = styled.p`
  font-size: 1rem;
  color: #777;
`;

const TimelineDescription = styled.p`
  font-size: 1rem;
`;

const Timeline = ({ events }) => {
  return (
    <TimelineContainer>
      {events.map((event, index) => (
        <TimelineEvent key={index}>
          {<TimelineLine />}
          <TimelineDot />
          <TimelineContent>
            <TimelineTitle>{event.title}</TimelineTitle>
            <TimelineDate>{event.date}</TimelineDate>
            <TimelineDescription>{event.description}</TimelineDescription>
          </TimelineContent>
        </TimelineEvent>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;
