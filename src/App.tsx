import React from "react";

import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Postcard from "./components/Postcard/Postcard";
import Thumbnails from "./components/Thumbnails/Thumbnails";

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
