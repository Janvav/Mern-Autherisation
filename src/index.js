import React from "react";
import ReactDOM from "react-dom/client";
import { StyleProvider } from '@ant-design/cssinjs';
import { Button, ConfigProvider, Space } from 'antd';

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to
reportWebVitals();