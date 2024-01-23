import styled from "styled-components";
import userImage from "../../assets/user.jpg";
import useInputHook from "../../auth/inputAuth";
import { isNotEmpty } from "../../auth/validation";
import { useDispatch } from "react-redux";
import { userInterfaceAction } from "../../store/UIstore";

// Define the Login Form component
function LoginForm() {
  const dispatch = useDispatch()
  const {
    inputIsBlur: regnumberIsTouched,
    inputIsBlurFn: regNumberIsTouchedFn,
    inputIsValid: regNumberIsValid,
    hasNoError: regNumberHasNoError,
    onChangeHandelerFn: regNumberIsChangedHandelerFn,
    inputState: regNumberValue,
    clearInputvalue: clearRegInputFn,
  } = useInputHook(isNotEmpty);

  const {
    inputIsBlur: passwordIsTouched,
    inputIsBlurFn: passwordIsTouchedFn,
    inputIsValid: passwordIsValid,
    hasNoError: passwordHasNoError,
    onChangeHandelerFn: passwordIsChangedHandelerFn,
    inputState: passwordValue,
    clearInputvalue: clearPasswordInputfn,
  } = useInputHook(isNotEmpty);

  console.log(
    regnumberIsTouched,
    regNumberIsValid,
    regNumberHasNoError,
    regNumberValue
  );

  function onForgottenPassswordFn() {
    dispatch(userInterfaceAction.onToggleUserPasscode())
  }

  function onSubmitLoginDetailsHandelerFn() {
    const checkForValidRegNumber =
      regnumberIsTouched && regNumberHasNoError && regNumberIsValid;

    const chcekForLoginPassCode =
      passwordIsTouched && passwordHasNoError && passwordIsValid;

    // check if the input is false
    if (checkForValidRegNumber && chcekForLoginPassCode) {
      // if input is false then display error message and return
      clearRegInputFn();
      clearPasswordInputfn();
      return;
    }
  }

  return (
    <>
      {/* Container for the entire login form */}
      <LoginContainer>
        {/* Container for the portal name */}
        <PotalNameContainer>
          <span />
          <h4>e-Portal Login</h4>
          <span />
        </PotalNameContainer>

        {/* Custom styled card for the login form */}
        <CustomCard>
          {/* Container for the form elements */}
          <FormContainer>
            {/* Section for Student Login */}
            <StudentLogin>
              <h4>Student Login</h4>
              {/* Login Form Section */}
              <LoginFormSection>
                {/* Input for Registration Number */}
                <UserInput
                  maxLength={14}
                  type="text"
                  placeholder="Registration Number"
                  value={regNumberValue}
                  onChange={regNumberIsChangedHandelerFn}
                  onBlur={regNumberIsTouchedFn}
                />
                {/* Input for Password */}
                <UserInput
                  type="password"
                  placeholder="Password"
                  value={passwordValue}
                  onChange={passwordIsChangedHandelerFn}
                  onBlur={passwordIsTouchedFn}
                />
                {/* Forgot Passcode link */}
                <h5 onClick={onForgottenPassswordFn}>Forgot Passcode?</h5>
                {/* Button for Student Login */}
                <Btn onClick={onSubmitLoginDetailsHandelerFn}>
                  Student Login
                </Btn>
              </LoginFormSection>
            </StudentLogin>

            {/* Section for User Passport */}
            <UserPassportSection>
              {/* Display user's passport image */}
              <img src={userImage} alt="User Passport" />
            </UserPassportSection>
          </FormContainer>
        </CustomCard>
      </LoginContainer>
    </>
  );
}

// Export the Login Form component
export default LoginForm;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
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
  color: #fff;
  font-weight: 700;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
const CustomCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  border-radius: 10px;
  border: #d9ddde;
  padding: 20px;
  width: 550px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-top: 2px solid #396;

  @media screen and (max-width: 887px) {
    width: 90%;
  }
`;

const PotalNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  & h4 {
    font-size: 17px;
    color: #444;
    font-weight: 500;
  }
  & span {
    width: 2rem;
    height: 0.5rem;
    background-color: lightcoral;
    border-radius: 20px;
  }
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;

  @media screen and (max-width: 887px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const StudentLogin = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;

  & h4 {
    font-size: 19px;
    font-weight: 400;
  }
  @media screen and (max-width: 887px) {
    width: 100%;
    gap: 20px;
  }
`;
const LoginFormSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  justify-content: flex-start;

  & h5 {
    font-size: 10px;
    color: lightcoral;
    cursor: pointer;

    &:hover {
      color: #ff0000;
    }
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
`;

const UserPassportSection = styled.div`
  display: flex;
  flex: 1;

  & img {
    width: 120px;
    height: 120px;
  }
`;
