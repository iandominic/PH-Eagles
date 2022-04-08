import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Lore from "./components/Lore";
import Roadmap from "./components/Roadmap";
import Showcase from "./components/Showcase";
import Faq from "./components/Faq";
import Team from "./components/Team";

function App() {
  return (
    <div className="main">
      <Navigation />
      <Home />
      <Lore />
      <Roadmap />
      <Showcase />
      <Faq />
      <Team />
    </div>
  );
}

export default App;
