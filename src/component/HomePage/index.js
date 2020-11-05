import React from "react";

import Header from "../Header";
import Footer from "../Footer";
// import Categories from "../Categories";
import Categories from "./components/Categories";
import SearchBar from "./components/SearchBar";
import Reviews from "./components/Reviews";
import Tradies from "./components/Tradies";
import Partnerships from "./components/Partnerships";

const HomePage = () => {
  return (
    <div>
      <Header scrollAnime={true} />
      <SearchBar />
      <Categories />
      <Reviews />
      <Tradies />
      <Partnerships />
      <Footer />
    </div>
  );
};

export default HomePage;
