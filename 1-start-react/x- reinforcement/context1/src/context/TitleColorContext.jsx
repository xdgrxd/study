import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

const defaultColor = "greenYellow";

export const titleColorReducer = (state, action) => {
  switch (action.type) {
    case "RED":
      return { ...state, color: "red" };

    case "BLUE":
      return { ...state, color: "blue" };

    case "GREEN":
      return { ...state, color: "green" };
    default:
      return { ...state, color: defaultColor };
  }
};

export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReducer, { color: defaultColor});

  return (
    <TitleColorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TitleColorContext.Provider>
  );
};
