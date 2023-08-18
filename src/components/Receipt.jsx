import React, { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";
function Receipt() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const headers = {
        accept: "application/json",
      };

      const response = await axios.get(
        "https://api.shipsmartlyservices.com/api/v1/tracking/payment/292DE3833D53F599/details/",
        {
          headers: headers,
        }
      );

      if (response.data && response.data.data) {
        // Filter data based on the "active" value
        const activeData = response.data.data.filter(
          (item) => item.active == true
        );
        setData(activeData);
        setError(null); // Reset error if successful
      } else {
        setError("No data found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
    }
  };

  return (
    <TableSection>
      <SectionTitle>Payment Details</SectionTitle>
      {error ? (
        <p>Payment Detail is not available yet...</p>
      ) : (
        <div>
          {data.map((item) => (
            <Table key={item.id}>
              <tbody>
                <TableRow>
                  <TableData>Tracking code</TableData>
                  <TableData>{item.tracked_goods.tracking_code}</TableData>
                </TableRow>
                <TableRow>
                  <TableData>Fee Name</TableData>
                  <TableData> {item.fee_to_pay[0].fee_name}</TableData>
                </TableRow>
                <TableRow>
                  <TableData>Price</TableData>
                  <TableData>{item.price} </TableData>
                </TableRow>
                <TableRow>
                  <TableData>Status</TableData>
                  <TableData>{item.status} </TableData>
                </TableRow>

                {/* Add more rows as needed */}
              </tbody>
            </Table>
          ))}
        </div>
      )}
    </TableSection>
  );
}

const TableSection = styled.div`
  margin-bottom: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  border-bottom: 0.1px solid #ccc;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: 1px;
  &:nth-child(odd) {
    background: #f2f2f2;
  }
  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

const TableData = styled.td`
  padding: 0.5rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 2rem;
  text-align: left;
  font-weight: 300;
  line-height: 1.3;
  letter-spacing: -0.4px;
  font-size: 1.25rem;
`;

export default Receipt;
