import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));

const initialState = {
  count: 0,
  theme: "dark",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "plus":
      return {
        ...state,
        count: state.count + 1, // count: state.count + action.payload
      };
    case "minus":
      if(state.count > 0) {
        return {
          ...state,
          count: state.count - 1,
        }
      }
      
    default:
      return state;
  }
};

const store = createStore(reducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
