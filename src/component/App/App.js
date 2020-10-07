import React from "react";
// import logo from './logo.svg';
// import './App.css';
// import Header from '../Header';
// import Footer from '../Footer';

import Header from "../Header";
import Footer from "../Footer";

import ServiceDetail from "../ServiceDetail";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <SearchBar />
      <Categories />
      <Reviews />
      <Tradies /> */}
      <ServiceDetail />
      <Footer />
      {/* <SignInTable />
      <UserProfile />
      <Footer /> */}
    </div>
  );
}

export default App;
