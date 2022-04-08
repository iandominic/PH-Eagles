import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Lore from "./components/Lore";
import Showcase from "./components/Showcase";

function App() {
  return (
    <div className="main">
      <Navigation />
      <Home />
      <Lore />
      <Showcase />
    </div>
  );
}

export default App;
