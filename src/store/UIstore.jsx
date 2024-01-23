import { createSlice } from "@reduxjs/toolkit";

const UserInterface = createSlice({
  name: "uiStore",
  initialState: {
    showChangePassCodeMenu: false,
  },
  reducers: {
    onToggleUserPasscode(state) {
      state.showChangePassCodeMenu = !state.showChangePassCodeMenu;
    },
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const userInterfaceAction = UserInterface.actions;

export default UserInterface;
