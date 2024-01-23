import { Outlet } from "react-router-dom";
import styled from "styled-components";
import PortalSideBar from "./sidebar/sideBar";
import TopNavigationBar from "./TopNavBar/topNavBar";
import { AiOutlineMenu, AiOutlineMenuFold } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Backdrop } from "../backdrop";
import ForgottenPasswordComponent from "../forgottenPassword/forgottenPassword";
import { useSelector } from "react-redux";

function NavigationBar() {
  const showChangePasscodeForm = useSelector(
    store => store.ui.showChangePassCodeMenu
  );

  // State to manage sidebar visibility
  const [isSidebarVisible, setSidebarVisibility] = useState(true);
  // Effect to handle window resize and update sidebar visibility
  useEffect(() => {
    // Function to handle window resize
    function handleResize() {
      // Get the current screen width
      const screenWidth = window.innerWidth;

      // Adjust visibility based on screen width
      setSidebarVisibility(screenWidth >= 730);
    }

    // Initial setup on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Function to toggle sidebar visibility
  function ontoggleMenu() {
    setSidebarVisibility(prevVisibility => !prevVisibility);
  }

  return (
    <>
      {/* Main Container */}
      <PortalContainer>
        {/* Sidebar Toggler */}
        <MenuToggler
          style={{ left: isSidebarVisible ? "160px" : "-20px" }}
          onClick={ontoggleMenu}
        >
          {/* Toggle Icon */}
          {isSidebarVisible ? (
            <AiOutlineMenuFold style={{ color: "#fff" }} />
          ) : (
            <AiOutlineMenu style={{ color: "#fff" }} />
          )}
        </MenuToggler>

        {/* Sidebar Container */}
        <SideBarContainer isVisible={isSidebarVisible}>
          {/* Sidebar Component */}
          <PortalSideBar ontoggleMenu={ontoggleMenu} />
        </SideBarContainer>

        {/* Main Content Container */}
        <MainContent>
          {/* Top Navigation Bar */}
          <TopNavigationBar />
          {showChangePasscodeForm && <Backdrop />}

          {/* Outlet for rendering nested components */}
          {showChangePasscodeForm && <ForgottenPasswordComponent />}
          
          <main>
            <Outlet />
          </main>
        </MainContent>
      </PortalContainer>
    </>
  );
}

export default NavigationBar;

const PortalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100vh;
  gap: 5px;
  position: relative;
`;

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  flex-wrap: nowrap;
  height: 100%;
  width: 180px;
  /* flex: 0.6; */
  border-right: 1px solid #d9ddde;

  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: translateX(${({ isVisible }) => (isVisible ? "0" : "-180px")});
  transition: opacity 1s ease-in-out, transform 0.3s ease-in-out;
  transition: left 0.3s ease;

  @media screen and (max-width: 730px) {
    position: absolute;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 100%;
  margin-bottom: 20px;
  flex: 3;
  overflow-x: hidden;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const MenuToggler = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 30px;
  left: 160px;
  height: 30px;
  background-color: #396;
  width: 70px;
  border-radius: 20px 20px 0 0;
  cursor: pointer;

  transform: rotate(90deg);
  transition: left 0.3s ease;

  @media screen and (max-width: 730px) {
    display: flex;
  }
`;
