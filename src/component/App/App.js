import React from "react";
// import logo from './logo.svg';
// import './App.css';
// import Header from '../Header';
// import Footer from '../Footer';
import UserProfile from "../UserProfile";

import Header from "../Header";
import Footer from "../Footer";
import Categories from "../Categories/Categories";
import SearchBar from "../SearchBar/SearchBar";
import Reviews from "../Reviews/Reviews";
import Tradies from "../Tradies/Tradies";
import SignInTable from "../Signin";
import ServiceDetail from '../ServiceDetail';

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
