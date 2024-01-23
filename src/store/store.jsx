import { configureStore } from "@reduxjs/toolkit";
import UserInterface from "./UIstore";


const Store = configureStore({
  reducer: {
    ui: UserInterface.reducer,
  },
});

export default Store;