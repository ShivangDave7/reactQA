import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

import { ProSidebarProvider } from "react-pro-sidebar";

function App() {
  return (
    <ProSidebarProvider>
      <Router>
        <Routes />
      </Router>
    </ProSidebarProvider>
  );
}

export default App;
