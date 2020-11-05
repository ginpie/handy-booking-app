import styled from "styled-components";
import React from "react";

const Container = styled.ul`
  min-width: 400%;
  width: 850px;
  background-color: #ffffff;
  position: absolute;
  left: -200px;
  padding: 0;
  margin-top: 10px;
  transition: ease 0.2s;
  border-radius: 5px;
  display: flex;
  min-height: 300px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.2) 0 10px 15px 0;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #efefef;
  width: 250px;
`;

const Title = styled.h4`
  margin: 30px;
`;

const Description = styled.p`
  margin: 10px 20px 20px 30px;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-height: 700px;
  flex-wrap: wrap;
`;

const DropdownItem = styled.li`
  list-style-type: none;
  padding: 10px 20px;
  font-size: 0.8rem;

  &:hover {
    text-decoration: none;
    background-color: #cdcdcd;
    .drop-down-item {
      color: #0270c2;
    }
  }
`;

const DropdownFake = styled.li`
  list-style-type: none;
  padding: 10px 20px;
  font-size: 0.8rem;
  position: relative;

  &:hover {
    .tooltip {
      visibility: visible;
    }
  }
`;

const FakeItem = styled.div`
  color: #aaa;
`;

const DropdownLink = styled.a`
  text-decoration: none;
  color: #626262;
  font-weight: bold;
  &:hover {
    text-decoration: none;
  }
`;

const Tooltip = styled.span`
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 5px;
  border-radius: 6px;
  position: absolute;
  left: -120px;
  top: 5px;
  visibility: hidden;
  z-index: 101;

  &::after {
    content: " ";
    position: absolute;
    top: calc(50% - 5px);
    left: calc(100% + 5px);
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent transparent black;
  }
`;

const fakeServices = [
  "Accountant",
  "Aircon Installation",
  "Appliance Repairer",
  "Asbestos Removal",
  "Assembly",
  "Auto Electrician",
  "Bathroom Renovations",
  "Bicycle Mechanic",
  "Bike Repair",
  "Building Services",
  "Car Inspection",
  "Car Repair",
  "Car Services",
  "Car Washing",
  "Carpenter",
  "Caterer",
  "Clearance Services",
  "Computer Repair",
  "Concreter",
  "Delivery",
  "Drafter",
  "Electricians",
  "Event Planner",
  "Exterior Painter",
  "Fencing",
  "Flooring",
  "Home Chef",
  "Home Theatre",
  "House Painting",
  "Interior Designing",
  "Landscaper",
  "Laundry Services",
  "Lawn Care",
  "Locksmith",
  "Mechanic",
  "Mobile Mechanic",
  "Personal Trainer",
  "Pest Control",
  "Pet Groomer",
  "Pet-Care",
  "Photographer",
  "Plasterer",
  "Plumber",
  "Takeaway & Delivery",
  "Tiler",
  "Tutor",
  "Web Design",
];

const Dropdown = () => (
  <Container>
    <LeftWrapper>
      <Title>What are you looking for?</Title>
      <Description>Pick a type of task.</Description>
    </LeftWrapper>
    <RightWrapper>
      <DropdownItem>
        <DropdownLink className="drop-down-item" href="/cleaning">
          Cleaning
        </DropdownLink>
      </DropdownItem>
      <DropdownItem>
        <DropdownLink className="drop-down-item" href="/furniture-assembly">
          Furniture Assembly
        </DropdownLink>
      </DropdownItem>
      <DropdownItem>
        <DropdownLink className="drop-down-item" href="/moving">
          Moving
        </DropdownLink>
      </DropdownItem>
      <DropdownItem>
        <DropdownLink
          className="drop-down-item"
          href="/electrical-installation"
        >
          Electrical installation
        </DropdownLink>
      </DropdownItem>
      <DropdownItem>
        <DropdownLink className="drop-down-item" href="/handyman">
          Handyman
        </DropdownLink>
      </DropdownItem>
      {fakeServices.map((i) => {
        return (
          <DropdownFake>
            <FakeItem>{i}</FakeItem>
            <Tooltip className="tooltip">not available yet</Tooltip>
          </DropdownFake>
        );
      })}
      <DropdownItem>
        <DropdownLink className="drop-down-item" href="/service">
          View ALL...
        </DropdownLink>
      </DropdownItem>
    </RightWrapper>
  </Container>
);

export default Dropdown;
