import styled from "styled-components";
import {FaPaypal} from 'react-icons/fa'
import { Card } from "../studentMenu/studentMenuContainer";
import {
  FirstInputContainer,
  UserInput,
  CustomCard,
  InputLabel,
  Select,
  FormType,
  Btn,
} from "../studentMenu/applicationForm";

function AdmissionFormComponent() {
  return (
    <Card>
      <FormType>
        <h4>Admission Form</h4>
      </FormType>
      <CustomApplicationFormCard>
        <InputLabel>
          <label htmlFor="resumptionSemester">Select Admission Type</label>
          <Select id="resumptionSemester" defaultValue="" required>
            <option value="" disabled>
              Select Semester
            </option>
            <option>JAMB</option>
            <option>Transfer Student</option>
          </Select>
        </InputLabel>
        <CustomFirstInputContainer>
          <UserInput
            maxLength={5}
            type="number"
            placeholder="Jamb RegNo"
            required
          />
          <UserInput
            type="email"
            className="longer"
            placeholder="Email"
            required
          />
        </CustomFirstInputContainer>
        <CustomFirstInputContainer>
          <UserInput
            maxLength={12}
            type="number"
            placeholder="Phone Number"
            required
          />
        </CustomFirstInputContainer>
        <CustomBtn><FaPaypal/> Make Payment</CustomBtn>
      </CustomApplicationFormCard>
    </Card>
  );
}

export default AdmissionFormComponent;

const CustomFirstInputContainer = styled(FirstInputContainer)`
	width: 100%;
	justify-content: flex-start;
	gap: 40px;
`

const CustomBtn = styled(Btn)`
	display: flex;
	flex-direction: row;
	gap: 5px;
`

const CustomApplicationFormCard = styled(CustomCard)`
  padding: 10px;
  width: 93%;
`