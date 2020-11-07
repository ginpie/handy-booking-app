import React from "react";
import styled from "styled-components";
import PersonalCard from "../PersonalCard";

const Wrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-height: 960px;
  overflow: scroll;
  margin-right: 10px;
  direction: rtl;

  @media screen and (max-width: 900px) {
    width: 100%;
    flex-direction: row;

    ::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 20px;
    }
  }

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 15px;
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
