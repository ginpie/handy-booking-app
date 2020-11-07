import React from "react";
import styled from "styled-components";
import PersonalCard from "../PersonalCard";

const Wrapper = styled.div`
  width: 30%;
  height: 100%;
  max-height: 1060px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  overflow: scroll;
  margin: 0 10px 20px 0;
  border-top: 1px black solid;
  border-bottom: 1px black solid;

  @media screen and (max-width: 900px) {
    width: 100%;
    flex-direction: row;

    ::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 20px;
    }
    border-top: none;
    border-bottom: none;
    border-left: 1px black solid;
    border-right: 1px black solid;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
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

export default CardWrapper;
