import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import MiddleContent from "./components/MiddleContent/MiddleContent.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <main>
      <div className="container">
        <Header />
        <MiddleContent />
        <Footer />
      </div>
    </main>
  );
}

export default App;
