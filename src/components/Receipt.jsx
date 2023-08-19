import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Modal from "react-modal";

// Set the root element of the modal
Modal.setAppElement("#root");

function Receipt({ code }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    fetchData();
  }, [code]);

  const fetchData = async () => {
    try {
      console.log("Fetching data for code:", code);
      const headers = {
        accept: "application/json",
      };

      const response = await axios.get(
        `https://api.shipsmartlyservices.com/api/v1/tracking/payment/${code}/details/`,
        {
          headers: {
            accept: "application/json",
          },
        }
      );

      if (response.data && response.data.data) {
        const activeData = response.data.data.filter(
          (item) => item.active === true
        );
        setData(activeData);
        setError(null);
      } else {
        setError("No data found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
    }
  };

  const handlePaymentClick = async (itemId) => {
    try {
      setButtonClicked(true);
      setProcessing(true);

      const response = await axios.post(
        `https://api.shipsmartlyservices.com/api/v1/tracking/make-payment/${itemId}/`
      );

      if (response.status === 200) {
        setModalMessage("Processing Payment confirmation...");
        setModalIsOpen(true);
      }
    } catch (error) {
      console.error("Error making payment:", error);
    } finally {
      setProcessing(false);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <TableSection>
   
     
        <div>
          {data.map((item) => (
            <Table key={item.id}>
              <SectionTitle>Payment Details</SectionTitle>
              <tbody>
                <TableRow>
                  <TableData>Tracking code</TableData>
                  <TableData>{item.tracked_goods.tracking_code}</TableData>
                </TableRow>
                <TableRow>
                  <TableData>Fee Name</TableData>
                  <TableData>{item.fee_to_pay[0].fee_name}</TableData>
                </TableRow>
                <TableRow>
                  <TableData>Price</TableData>
                  <TableData>{item.price}</TableData>
                </TableRow>
                <TableRow>
                  <TableData>Deadline</TableData>
                  <TableData>{item.deadline}</TableData>
                </TableRow>
                <TableRow>
                  <TableData>Status</TableData>
                  <TableData>{item.status}</TableData>
                </TableRow>
                <TableRow>
                  <TableData>Payment</TableData>
                  <TableData>
                    <PaymentButton
                      onClick={() => handlePaymentClick(item.id)}
                      disabled={processing || buttonClicked}
                    >
                      {processing ? "Processing..." : "Confirm Payment"}
                    </PaymentButton>
                  </TableData>
                </TableRow>
              </tbody>
            </Table>
          ))}
        </div>


      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Payment Message"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
          content: {
            backgroundColor: "white",
            fontFamily:"sans-serif",
            border: "none",
            alignItems: "center",
            height: "200px",
            borderRadius: "10px",
            padding: "20px",
            maxWidth: "300px",
            margin: "auto",
            textAlign: "center",
          },
        }}
      >
        <ModalContent>
          <h4>Payment Message</h4>
          <p style={{fontSize:"0.8rem"}}>{modalMessage}</p>
          <button onClick={closeModal} className="close-button" style={{backgroundColor:"red", color:"white", padding:"0.5rem 1rem", border:"none"}}>
            Close
          </button>
        </ModalContent>
      </Modal>
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

const PaymentButton = styled.button`
  background-color: #254067;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  ${(props) =>
    props.disabled &&
    `
    opacity: 0.6;
    cursor: not-allowed;
  `}
`;

const ModalContent = styled.div`
  text-align: center;
`;

export default Receipt;
