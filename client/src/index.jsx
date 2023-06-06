import React from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";

const App = () => {
  return (
    <div>
      "Hello World, and it begins"
    </div>
  )
}

const domNode = document.getElementById("app");
const root = createRoot(domNode);
root.render(<App/>);