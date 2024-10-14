import React from "react";
import Header from "./components/Header"
import './App.css';
import Main from "./components/Main";
import Product from "./components/Categories";
import SecondBanner from "./components/SecondBanner";


function App() {
    return (
      <div className="wrapper">
        <Header/>
        <Main />
        <Product />
        <SecondBanner />
      </div>
    )
  }
  
export default App;
