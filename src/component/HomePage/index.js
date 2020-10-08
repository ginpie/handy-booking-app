import React from "react";

import Header from "../Header";
import Footer from "../Footer";
import Categories from "../Categories/Categories";
import SearchBar from "../SearchBar/SearchBar";
import Reviews from "../Reviews/Reviews";
import Tradies from "../Tradies/Tradies";

function HomePage() {
  return (
    <div>
      <Header scrollAnime={true} />
      <SearchBar />
      <Categories />
      <Reviews />
      <Tradies />
      <Footer />
    </div>
  );
}

export default HomePage;
