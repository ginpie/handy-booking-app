import React from "react";
// import logo from './logo.svg';
// import './App.css';
import Header from "../Header";
import Footer from "../Footer";
import Categories from "../Categories/Categories";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
