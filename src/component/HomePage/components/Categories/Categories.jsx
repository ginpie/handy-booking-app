import React from "react";
import styled from "styled-components";
import Carousel from "./components/Carousel";

const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #f9f7e8;
  font-family: "Roboto Condensed", sans-serif;

  .flickity-page-dots {
    bottom: 10px;
  }
`;

const Title = styled.h3`
  text-align: center;
  font-size: 28px;
  font-family: "Roboto Condensed";
`;

const CarouselGallery = styled.div``;

const Categories = () => (
  <Container>
    <Title>WHAT WE OFFER?</Title>
    <CarouselGallery className="carousel" data-flickity='{ "autoPlay": true }'>
      <Carousel
        icon="fas fa-hand-sparkles"
        href="/cleaning"
        description="Home Cleaning"
      ></Carousel>
      <Carousel
        icon="fas fa-truck"
        href="/moving"
        description="Full House Removal"
      ></Carousel>
      <Carousel
        icon="fas fa-tools"
        href="/handyman"
        description="Handy Man"
      ></Carousel>
      <Carousel
        icon="fas fa-couch"
        href="/assembly"
        description="Furniture Assembly"
      ></Carousel>
      <Carousel
        icon="fas fa-hammer"
        href="/installation"
        description="Installation"
      ></Carousel>
    </CarouselGallery>
  </Container>
);

export default Categories;
