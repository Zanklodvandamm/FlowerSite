import React from "react";
import Header from "./components/Header"
import './App.css';
import Main from "./components/Main";
import Product from "./components/Categories";


function App() {
    return (
      <div className="wrapper">
        <Header/>
        <Main />
        <Product />
      </div>
    )
  }
  
export default App;
