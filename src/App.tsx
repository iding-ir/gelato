import React from "react";

import "./App.scss";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Main />

      <Sidebar />
    </div>
  );
}

export default App;
