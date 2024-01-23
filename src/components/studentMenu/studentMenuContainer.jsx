import styled from "styled-components";
import { FaDoorOpen, FaPrint, FaFolder } from "react-icons/fa";
import LoginForm from "./loginForm";
import { useEffect, useState } from "react";
import EreciptComponent from "./e-receipt";
import ApplicationForm from "./applicationForm";

// Define the main component for Student Menu
function StudentMenu() {
  // State to manage the selected menu item component and active menu
  const [selectedStudentMenuItem, setSelectedMenuItem] = useState(
    <LoginForm />
  );

  const [activeMenu, setActiveMenu] = useState("login");

  // Use useEffect to update the selected component based on the activeMenu value
  useEffect(() => {
    if (activeMenu === "login") {
      setSelectedMenuItem(<LoginForm />);
    } else if (activeMenu === "e-Reciept") {
      setSelectedMenuItem(<EreciptComponent />);
    } else if (activeMenu === "Application-form") {
      setSelectedMenuItem(<ApplicationForm />);
    }
  }, [activeMenu]);

  // Handle click on menu items and update the activeMenu
  const onSelectedStudentMenuItem = section => {
    setActiveMenu(section);
  };

  // JSX structure for the Student Menu component
  return (
    <Card>
      <InnerCardContainer>
        {/* Menu List Section */}
        <MenuList>
          <UnorderedStudentList>
            {/* Login Menu Item */}
            <li
              onClick={() => onSelectedStudentMenuItem("login")}
              className={activeMenu === "login" ? "selectedSubMenu" : ""}
            >
              <FaDoorOpen />
              <h3>Login</h3>
            </li>
            {/* e-Receipt Menu Item */}
            <li
              onClick={() => onSelectedStudentMenuItem("e-Reciept")}
              className={activeMenu === "e-Reciept" ? "selectedSubMenu" : ""}
            >
              <FaPrint />
              <h3>e-Reciept</h3>
            </li>
            {/* Application Form Menu Item */}
            <li
              onClick={() => onSelectedStudentMenuItem("Application-form")}
              className={
                activeMenu === "Application-form" ? "selectedSubMenu" : ""
              }
            >
              <FaFolder />
              <h3>Application Form</h3>
            </li>
          </UnorderedStudentList>
        </MenuList>

        {/* Display selected menu item component */}
        {selectedStudentMenuItem}

        {/* Portal News Update Section */}
        <PortalUpdateContainer>
          <h2>
            Portal News Update 
          </h2>
          <p>
            All students should ensure they present a means of identification
            during the upcoming exams.
          </p>
        </PortalUpdateContainer>
      </InnerCardContainer>
    </Card>
  );
}

// Styled Components for the Student Menu
export default StudentMenu;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  border-radius: 10px;
  border: #d9ddde;
  padding: 20px;
  box-sizing: border-box;
  width: 94.8%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add box shadow properties */
`;

const InnerCardContainer = styled.div`
  width: 100%;
  height: 100%;
  gap: 10px;
  border: 1px solid #d9ddde;
  box-sizing: border-box;
`;
const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 50px;
  padding: 0;
  border-bottom: 1px solid #d9ddde;

  & h2 {
    font-size: 16px;
    color: red;
    min-width: 155px;
  }
`;

const UnorderedStudentList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;

  & li {
    display: flex;
    flex-direction: row;
    gap: 2px;
    list-style: none;
    color: #8d9293;
    font-weight: 400;
    font-size: 0%.7em;
    text-align: center;
    padding: 15px 1px;
    box-sizing: border-box;

    cursor: pointer;

    &:hover {
      color: black;
      border-bottom: 2px solid red;
    }
  }
`;

const PortalUpdateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;
  margin-top: 10px;

  & h2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    font-size: 15px;
    color: lightcoral;

    & span {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: black;
      background-color: lightcoral;
      padding: 5px;
      height: 20px;
      width: 30px;
      font-size: 9px;
      box-sizing: border-box;
    }
  }

  & p {
    color: red;
    font-size: 12px;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
  }

`;
