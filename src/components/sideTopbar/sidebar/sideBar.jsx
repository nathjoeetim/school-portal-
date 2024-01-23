/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import {
  FaWindows,
  FaGraduationCap,
  FaPaypal,
  FaMailBulk,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function PortalSideBar({ ontoggleMenu }) {
  return (
    <>
      <SideBarUnorderedList>
        <NavLink
          style={{ width: "100%", textDecoration: "none" }}
          to="/"
          // onClick={() => ontoggleMenu()}
          className={({ isActive }) => (isActive ? `sidebarActive` : ``)}
          end
        >
          <li className="active">
            <IconContainer>
              <FaWindows className="icon" />
            </IconContainer>
            <h3>Home</h3>
          </li>
        </NavLink>
        <NavLink
          style={{ width: "100%", textDecoration: "none" }}
          to="admissionform"
          className={({ isActive }) => (isActive ? `sidebarActive` : ``)}
          end
        >
          <li className="active">
            <IconContainer>
              <FaGraduationCap className="icon" />
            </IconContainer>
            <h3>Admission Form</h3>
          </li>
        </NavLink>
        <NavLink
          style={{ width: "100%", textDecoration: "none" }}
          to="screeningfee"
          className={({ isActive }) => (isActive ? `sidebarActive` : ``)}
          end
        >
          <li className="active">
            <IconContainer>
              <FaPaypal className="icon" />
            </IconContainer>
            <h3>Pay Screening Fee</h3>
          </li>
        </NavLink>
        <NavLink
          style={{ width: "100%", textDecoration: "none" }}
          to="admission"
          className={({ isActive }) => (isActive ? `sidebarActive` : ``)}
          end
        >
          <li className="active">
            <IconContainer>
              <FaMailBulk className="icon" />
            </IconContainer>
            <h3>Admission Status</h3>
          </li>
        </NavLink>
      
      </SideBarUnorderedList>
    </>
  );
}

export default PortalSideBar;

const SideBarUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  width: 100%;
  padding: 0;
  justify-content: flex-start;
  height: 100%;

  & li {
    display: flex;
    flex-direction: column;
    list-style: none;
    height: 110px;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 10px;
    box-sizing: border-box;

    & h3 {
      color: #8d9293;
      font-weight: 400;
      font-size: 1em;
      text-align: center;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #396;
  height: 50px;
  width: 50px;
  font-size: 1.5rem;
  border-radius: 50%;
`;
