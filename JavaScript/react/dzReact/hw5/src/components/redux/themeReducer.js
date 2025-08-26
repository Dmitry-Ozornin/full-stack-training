import { TOGGLE_THEME } from "./themeActions";

// изначальное состояние
const initialState = {  
  theme: "light",
};

// изменения состояния
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

export default themeReducer;