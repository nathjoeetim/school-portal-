/* eslint-disable react/prop-types */
import styled, { keyframes } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { Btn } from "../studentMenu/applicationForm";
import { useDispatch } from "react-redux";
import { userInterfaceAction } from "../../store/UIstore";

function ForgottenPasswordComponent() {
  const dispatch = useDispatch()

  function onHideComponetFn () {
    dispatch(userInterfaceAction.onToggleUserPasscode())
  }

  return (
    <CustomCard>
      <CloseIcon>
        <AiOutlineClose className="icon" onClick={onHideComponetFn} />
      </CloseIcon>
      <FormContainer>
        <InputContainer>
          <label>Enter Registration Number</label>
          <UserInput
            maxLength={14}
            type="text"
            placeholder="Registration Number"
          />
        </InputContainer>
        <InputContainer>
          <label> Registered Phone number </label>
          <UserInput
            maxLength={11}
            type="tel"
            placeholder="Phone number linked to account "
          />
        </InputContainer>
        <InputContainer>
          <label> New Passcode </label>
          <UserInput maxLength={14} type="text" placeholder="New Passcode" />
        </InputContainer>
        <InputContainer>
          <label> Verify Passcode </label>
          <UserInput
            maxLength={14}
            type="text"
            placeholder="Re-enter Passcode "
          />
        </InputContainer>
        <Btn>Change Passcode</Btn>
      </FormContainer>
    </CustomCard>
  );
}

export default ForgottenPasswordComponent;
const moveFromTopAnimation = keyframes`
  from {
    top: -100%;
    opacity: 0;
  }

  to {
    top: 3rem;
    opacity: 1;
  }
`;

const CustomCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: flex-start;
  border-radius: 10px;
  border: #d9ddde;
  padding: 20px;
  width: 90%;
  z-index: 9;
  gap: 30px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-top: 2px solid #396;
  border-bottom: 2px solid #396;

  position: absolute;
  top: 3rem;
  right: 3rem;

  animation: ${moveFromTopAnimation} 1s ease-in-out;

  @media screen and (max-width: 887px) {
    width: 90%;
    right: 2rem;
    left: 1rem;
  }
`;

const UserInput = styled.input`
  height: 50px;
  border: none;
  border: 1px solid #d9ddde;
  color: #8d9293;
  padding: 10px;
  box-sizing: border-box;
  width: 40%;
  &:focus {
    outline: none;
  }
`;

const CloseIcon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;

  & .icon {
    background-color: #396;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
  width: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & label {
    font-size: 10px;
  }
`;
