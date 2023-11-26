import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider
      theme={extendTheme({ fonts: { body: "Nunito Sans, sans-serif" } })}
    >
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
