import React from "react";
// import logo from './logo.svg';
// import './App.css';
import Header from "../Header/index";
import Footer from "../Footer/index";
import Categories from "../Categories/index";
import SearchBar from "../SearchBar/index";
import Reviews from "../Reviews/index";
import Tradies from "../Tradies/index";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Categories />
      <Reviews />
      <Tradies />
      <Footer />
    </div>
  );
}

export default App;
