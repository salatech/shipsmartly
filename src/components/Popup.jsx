import React, { useState } from "react";
import styled from "styled-components";

const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure the popup is on top of other content */
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
`;

const PopupMessage = styled.p`
  margin-bottom: 15px;
`;

const CloseButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
`;

const OpenPopupButton = styled.button`
  background-color: #254067;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
  ${(props) =>
    props.disabled &&
    `
    opacity: 0.6;
    cursor: not-allowed;
  `}
`;

function Popup() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
    setButtonDisabled(true);
  };

  return (
    <div>
      <OpenPopupButton onClick={togglePopup} disabled={buttonDisabled}>
        {buttonDisabled ? "Payment in process.." : "Pay now"}
      </OpenPopupButton>
      {popupVisible && (
        <PopupWrapper>
          <PopupContent>
            <PopupMessage>
              A mail containing the payment details will be sent.
            </PopupMessage>
            <CloseButton onClick={togglePopup}>Close</CloseButton>
          </PopupContent>
        </PopupWrapper>
      )}
    </div>
  );
}

export default Popup;
