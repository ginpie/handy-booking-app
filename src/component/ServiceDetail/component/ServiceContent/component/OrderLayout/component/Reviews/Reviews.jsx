import React from "react";
import styled from "styled-components";

import PersonalCard from "../../../PersonalCard";

const Layout = styled.div`
  margin-bottom: 20px;
`;

const Header = styled.h2`
  font-size: 0.8rem;
`;

const tradiesData = [
  { name: "Ian Yin", comment: "The service is great", rating: 3 },
  { name: "David", comment: "The service is great", rating: 5 },
  { name: "Jinpei", comment: "The service is great", rating: 4 },
  { name: "Ming", comment: "The service is great", rating: 5 },
];

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  max-height: 960px;
  margin-right: 10px;
`;

const CardWrapper = ({ current, handleClick, isClicked, tradiesData }) => {
  return (
    <Wrapper isClicked={isClicked}>
      {tradiesData.map((item) => {
        return (
          <PersonalCard
            action={handleClick}
            data={item}
            current={current === item.tradieId ? true : false}
            comment={null}
          />
        );
      })}
    </Wrapper>
  );
};

const Reviews = () => (
  <Layout>
    <Header>Reviews:</Header>
    <CardWrapper tradiesData={tradiesData} />
  </Layout>
);

export default Reviews;
