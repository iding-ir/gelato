import React from "react";

import "./App.scss";
import { Sidebar } from "./components/Sidebar";
import { Postcard } from "./components/Postcard";
import { Thumbnails } from "./components/Thumbnails";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <Postcard />

      <Thumbnails />
    </div>
  );
}

export default App;
