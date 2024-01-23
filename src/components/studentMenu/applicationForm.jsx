import styled, { keyframes } from "styled-components";

function ApplicationForm() {
  return (
    <ApplicationFormContainer>
      <FormType>
        <h4>Change Of Course Form</h4>
        <h4>Suspension Of Studies Form</h4>
      </FormType>
      <CustomCard>
        {/* year of study, CGPA, Reason for change of course */}
        <FirstInputContainer>
          <UserInput
            maxLength={5}
            type="number"
            placeholder="Year of Study"
            required
          />
          <UserInput maxLength={4} type="number" placeholder="CGPA" required />
          <UserInput
            type="text"
            className="longer"
            placeholder="Reason for Change of Course"
            required
          />
        </FirstInputContainer>
        <FirstInputContainer>
          <UserInput type="text" placeholder="Current Course" required />
          <UserInput type="text" placeholder="Suggested Course " required />
          <InputLabel>
            <label htmlFor="resumptionSemester">
              Proposed Resumption Semester
            </label>
            <Select id="resumptionSemester" defaultValue="" required>
              <option value="" disabled>
                Select Semester
              </option>
              <option>First Semester</option>
              <option>Second Semester</option>
            </Select>
          </InputLabel>
        </FirstInputContainer>
        <FirstInputContainer>
          <InputLabel>
            <label htmlFor="resumptionSectionr">
              Proposed Resumption Section
            </label>
            <Select id="resumptionSection" defaultValue="" required>
              <option value="" disabled>
                Select Section
              </option>
              <option>2022 / 2023</option>
              <option>2023 /2024</option>
            </Select>
          </InputLabel>
        </FirstInputContainer>
        <Btn>Submit Form</Btn>
      </CustomCard>
    </ApplicationFormContainer>
  );
}

export default ApplicationForm;

// Keyframes for the fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Btn = styled.div`
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

export const CustomCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: flex-start;
  border-radius: 10px;
  border: #d9ddde;
  padding: 20px;
  gap: 20px;
  margin: 2px auto;
  width: 80%;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 883px) {
   width: 95%;
  }
`;

const ApplicationFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
  gap: 50px;
  padding: 20px 10px;

  & h4 {
    font-size: medium;
    color: #345;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  label {
    font-size: 14px;
    margin-bottom: 5px;
    color: #345;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 40px;
  border: 1px solid #d9ddde;
  border-radius: 10px;
  color: #8d9293;
  padding: 10px;
  box-sizing: border-box;
  -moz-appearance: none; /* Firefox */
  appearance: none; /* Other browsers */
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%238D9293"><path d="M12 21.35l-1.45-1.47L18.17 12H4v-2h14.17l-3.61-3.61L12 2.63l6.71 6.7c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0L12 5.12 5.41 11.7c-.39.39-1.02.39-1.41 0s-.39-1.02 0-1.41L10.17 9H4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h6.17l-1.71 1.71c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L12 21.35z"/></svg>')
    no-repeat right 8px center;
  background-size: 12px;
  -webkit-appearance: none;

  animation: ${fadeIn} 0.3s ease-in-out; /* Fade-in animation */

  &:focus {
    outline: none;
  }

  option {
    animation: ${fadeIn} 0.3s ease-in-out; /* Fade-in animation */
  }
`;

export const FirstInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  @media screen and (max-width: 883px) {
   flex-direction: column;
   gap: 10px;
   align-items: flex-start;
  }
`;

export  const UserInput = styled.input`
  width: 160px;
  height: 40px;
  border: 1px solid #d9ddde;
  border-radius: 10px;
  color: #8d9293;
  padding: 10px;
  box-sizing: border-box;
  -moz-appearance: textfield; /* Firefox */
  appearance: none; /* Other browsers */

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }

  &.longer {
    width: 250px;
  }
  @media screen and (max-width: 883px) {
  width: 100%;

  &.longer{
    width: 100%;
  }
  }
`;
