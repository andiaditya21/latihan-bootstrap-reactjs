import React from "react";
import "./App.css";
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import Main from "./Component/Main";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
