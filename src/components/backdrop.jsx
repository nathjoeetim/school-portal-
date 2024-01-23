/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { userInterfaceAction } from "../store/UIstore";

export function Backdrop() {
  const dispatch = useDispatch()

  function onHideComponetFn () {
    dispatch(userInterfaceAction.onToggleUserPasscode())
  }

  return <BackdropContainer onClick={onHideComponetFn}/>;
}

const BackdropContainer = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);

  &.BackdropOpen {
    display: block;
  }
  &.backdropClose {
    display: none;
  }
`;
