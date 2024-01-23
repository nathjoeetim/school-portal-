import styled from "styled-components";
import { Card } from "../studentMenu/studentMenuContainer";

function ScreeningFormFee() {
  return (
    <CustomCard>
      <h2>PAY SCREENING FEE</h2>
      <ReciptContent>
        <h5>Input Registration Number To Pay For Screening</h5>
        <UserInput
          maxLength={10}
          type="text"
          placeholder="Registration Number"
        />{" "}
        <Btn>Pay Screening Fee</Btn>
      </ReciptContent>
    </CustomCard>
  );
}

export default ScreeningFormFee;

const CustomCard = styled(Card)`

  border: #d9ddde;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 887px) {
    /* width: 100%; */
  }
`;

const UserInput = styled.input`
  width: 80%;
  height: 30px;
  border: none;
  border-bottom: 1px solid #d9ddde;
  color: #8d9293;
  padding: 10px;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
  @media screen and (max-width: 887px) {
    width: 100%;
  }
`;

const Btn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #396;
  padding: 10px;
  border-radius: 30px;
  cursor: pointer;
  width: 150px;
  color: #fff;
  font-weight: 700;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const ReciptContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-style: dotted;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  gap: 20px;

  & h5 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: lightgray;
    height: 34px;
    width: 80%;
    font-size: 10pt;
    font-weight: 400;
    font-family: "Open Sans", sans-serif;
    color: #444;
    padding: 0 10px;
    cursor: not-allowed;

    @media screen and (max-width: 887px) {
      width: 95%;
    }
  }
`;
