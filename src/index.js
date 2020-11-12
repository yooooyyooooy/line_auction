import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

//redux
import { Provider } from "react-redux";
import store from "./reduxStore";
import fetchLiff from "./utils/setAuthorization";

const fontTheme = createMuiTheme({
  typography: {
    fontFamily: "Prompt",
  },
  
});

(async () => await fetchLiff())();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={fontTheme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
