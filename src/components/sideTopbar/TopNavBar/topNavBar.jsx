import styled from "styled-components";
import logo from "../../../assets/logo.jpg"
import user from "../../../assets/user.jpg"
import { AiFillSetting,} from 'react-icons/ai'
import { FaUserPlus,  } from 'react-icons/fa'


function TopNavigationBar (){
  return <>
  <TopNavigationContainer>
   <SchoolLogoSection>
    <img  src={logo} alt="sch-logo"/>
    <SchoolName>
      <h3>Rivers State Politechnic</h3>
      <h6>Knowldge is power</h6>
    </SchoolName>
   </SchoolLogoSection>
   <UserSettingSection>
    <SettingSectionOne>
      <AiFillSetting className="settingIcon"/>
      <h5>
        Account Setting 
        </h5>
      <IconContainer>
      <FaUserPlus className="userProfileIcon1"/>
    <Tooltip>Account Setting</Tooltip>
      </IconContainer>
    </SettingSectionOne>
    <UserProfileImageContainer>
      <img src={user} alt="default User"/>
    <Tooltip>Login</Tooltip>
    </UserProfileImageContainer>
   </UserSettingSection>
  </TopNavigationContainer>
  </>
}

export default TopNavigationBar;

const TopNavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-color: #fff;
  border-radius:0 0 10px 10px;
  height: 100px;
  width: 95%;
  margin: 0 auto;
  padding: 10px 20px;
  box-sizing: border-box;
  gap: 20px;
`
const SchoolLogoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
width: 279px;
  & img {
    width: 60px;
    height: 60px;
    border-radius: 50%;

  }
`

const SchoolName = styled.div`
display: flex;
flex-direction: column;
align-items: center;

& h3{
  font-size: 18px;
  border-bottom:1.6px solid gray ;
  color: #396;
  font-weight: 700;
}

& h6 {
  font-size: 12px;
  color: #000000;
  font-weight: 600;
}

@media screen and (max-width: 887px) {
  & h3{
  font-size: 15px;
}

& h6 {
  font-size: 9px;

}  }
`

const UserSettingSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  /* min-width: 290px; */
  padding: 0 10px;


`

const SettingSectionOne = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: .4rem;
  width: 100%;

  & .settingIcon {
    color: #396;
    font-size: 1rem;

 
}


& h5 {
  color: #396;
  font-size: 12pt;
  font-weight: bold;
}

@media screen and (max-width: 887px) {
  display: none;
  }
`
const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #396;
  height: 50px;
  width: 50px;
  font-size: 1.5rem;
  border-radius: 50%;
  transition: transform 0.3s; 

  /* Tooltip styling */
  &:hover::before {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 120%; /* Adjust as needed */
    left: 50%;
    transform: translateX(-50%);
    padding: 8px;
    background-color: #333;
    color: #fff;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
  }
  &:hover {
    transform: rotate(45deg); 
  }
  
`
const UserProfileImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative; /* Add relative positioning */
  box-sizing: border-box;
  font-size: 3rem;

  & img {
    width: 80px;
    height: 60px;
    object-fit: contain;
    border-radius: 50%;
  }

  /* Tooltip styling */
  &:hover::before {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 120%; /* Adjust as needed */
    left: 50%;
    transform: translateX(-50%);
    padding: 8px;
    background-color: #333;
    color: #fff;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  left: 50%;
  top: calc(100% + 8px);
  transform: translateX(-50%);
  padding: 8px;
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${UserProfileImageContainer}:hover & {
    opacity: 1;
  }
`;