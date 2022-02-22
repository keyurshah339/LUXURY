import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataProvider } from "./Context/data-context";
import {setupMockServer} from "./api/mock-server";
import { BrowserRouter as Router } from "react-router-dom";

setupMockServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <DataProvider>
      <App />
    </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

