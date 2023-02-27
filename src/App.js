import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css"
import Banner from "./components/Banner/Banner";
import RowPost from "./components/Rowpost/RowPost";
import { action,orginals } from "./Url";


function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url={action} title='netflix orginals'/>
      <RowPost url={orginals} title='Action' isSmall/>
    </div>

  );
}

export default App;
