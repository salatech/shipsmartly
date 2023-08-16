import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
const Dashboard = () => {
  const { code } = useParams();
  const [trackingData, setTrackingData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://api-shipsmartlyservices.com/api/v1/tracking/tracking/",
          { tracking_code: code },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setTrackingData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [ConstantSourceNode]);

  return (
    <div className="tracking">
     {trackingData ? (  
      <PageContainer>
        <Section>
          <SectionTitle>Tracking Information</SectionTitle>
          <FlexContainer>
            <span>
              <b>scheduled delivery date</b>
               <p>{trackingData.scheduled_delivery_date}</p> 
            </span>
            <span>
              <b>Delivery Status</b>
             <p> {trackingData.delivery_status}</p>
            </span>
            <span>
              <b>Tracking Number</b>
             <p>{trackingData.tracking_code}</p> 
            </span>
          </FlexContainer>
        </Section>
        <TableSection>
  <SectionTitle>Shipment Overview</SectionTitle>
  <Table>
    <tbody>
      <TableRow>
        <TableData>TRACKING ID</TableData>
        <TableData>{trackingData.id}</TableData>
      </TableRow>
      <TableRow>
        <TableData>SHIP DATE</TableData>
        <TableData>{trackingData.scheduled_delivery_date}</TableData>
      </TableRow>
      <TableRow>
        <TableData>STANDARD TRANSIT</TableData>
        <TableData> ???? </TableData>
      </TableRow>
      <TableRow>
        <TableData>SCHEDULED DELIVERY</TableData>
        <TableData>{trackingData.scheduled_delivery_date}</TableData>
      </TableRow>
      {/* Add more rows as needed */}
    </tbody>
  </Table>
</TableSection>
<TableSection>
  <SectionTitle>Services</SectionTitle>
  <Table>
    <tbody>
      <TableRow>
        <TableData>Carrier</TableData>
        <TableData>{trackingData.carrier}</TableData>
      </TableRow>
      <TableRow>
        <TableData>Terms</TableData>
        <TableData>{trackingData.terms}</TableData>
      </TableRow>
      <TableRow>
        <TableData>Special Handling Section</TableData>
        <TableData>{trackingData.special_handling_section}</TableData>
      </TableRow>
    
      {/* Add more rows as needed */}
    </tbody>
  </Table>
</TableSection>
<TableSection>
  <SectionTitle>Packaging Detail</SectionTitle>
  <Table>
    <tbody>
      <TableRow>
        <TableData>Weight</TableData>
        <TableData>???</TableData>
      </TableRow>
      <TableRow>
        <TableData>Dimension</TableData>
        <TableData>???</TableData>
      </TableRow>
      <TableRow>
        <TableData>Total pieces</TableData>
        <TableData>???</TableData>
      </TableRow>
      <TableRow>
        <TableData>packaging</TableData>
        <TableData>???</TableData>
      </TableRow>
      {/* Add more rows as needed */}
    </tbody>
  </Table>
</TableSection>

<TimelineSection>
  <SectionTitle>Travel History</SectionTitle>
  <TimelineContainer>
        <TimelineEvent>
          {<TimelineLine />}
          <TimelineDot />
          <TimelineContent>
            <TimelineTitle>{trackingData.current_location_1}</TimelineTitle>
            <TimelineDate>{trackingData.country_1}</TimelineDate>
            <TimelineDescription>Hello</TimelineDescription>
          </TimelineContent>
        </TimelineEvent>
        <TimelineEvent>
          {<TimelineLine />}
          <TimelineDot />
          <TimelineContent>
            <TimelineTitle>{trackingData.current_location_2}</TimelineTitle>
            <TimelineDate>{trackingData.country_2}</TimelineDate>
            <TimelineDescription>Hello</TimelineDescription>
          </TimelineContent>
        </TimelineEvent>
        <TimelineEvent>
          {<TimelineLine />}
          <TimelineDot />
          <TimelineContent>
            <TimelineTitle>{trackingData.current_location_3}</TimelineTitle>
            <TimelineDate>{trackingData.country_3}</TimelineDate>
            <TimelineDescription>Hello</TimelineDescription>
          </TimelineContent>
        </TimelineEvent>
        <TimelineEvent>
          {<TimelineLine />}
          <TimelineDot />
          <TimelineContent>
            <TimelineTitle>{trackingData.current_location_4}</TimelineTitle>
            <TimelineDate>{trackingData.country_4}</TimelineDate>
            <TimelineDescription>Hello</TimelineDescription>
          </TimelineContent>
        </TimelineEvent>
    </TimelineContainer>
</TimelineSection>
      </PageContainer>
         ) : (
            <p>Loading tracking data...</p>
          )} 
      <div>
        {/*  <TrackingTimeline className="track-line" /> */}</div>
 



    </div>
  );
};

const PageContainer = styled.div`
margin: 50px auto 0 auto!important;
max-width: 940px;
font-family: sans-serif;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 2rem;
  text-align: left;
  font-weight: 300;
    line-height: 1.3;
    letter-spacing: -.4px;
    font-size: 1.25rem;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
// Inside the TrackingDetailPage component
const TableSection = styled.div`
  margin-bottom: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  border-bottom: .1px solid #ccc;
  font-weight: 700;
    font-size: .75rem;
    line-height: 1.3;
    text-transform: uppercase;
    letter-spacing: 1px;
  &:nth-child(odd) {
    background:#f2f2f2;
  }
`;

const TableData = styled.td`
  padding: 0.5rem;
`;

const TimelineSection = styled.div`
margin: 50px auto 0 auto!important;
max-width: 940px;
font-family: sans-serif;
`;
const TimelineContainer = styled.div`
  position: relative;

`;

const TimelineDot = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: #007bff; /* Adjust dot color */
  border-radius: 50%;
  left: -8px;
  top: 50%;
  transform: translateY(-50%);
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


export default Dashboard;
