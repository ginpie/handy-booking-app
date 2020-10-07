import React from "react";
import styled from "styled-components";

const Container = styled.section`
  background: #f9f7e7;
  overflow: hidden;
`;

const Title = styled.h3`
  color: #555;
  text-align: center;
  font-size: 25px;
`;

const TextBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 10px 30px;
  display: flex;

  justify-content: space-around;
`;

const TextWrapper = styled.div`
  width: 50%;
  padding: 20px;
`;

const Q = styled.p`
  font-size: 17px;
`;

const A = styled.p`
  font-size: 15px;
`;

const FAQ = () => (
  <Container>
    <Title>FAQ</Title>
    <TextBox>
      <TextWrapper>
        <Q>What type of tasks are available?</Q>
        <A>
          There’s a huge range of tasks on handyman. From home-based tasks such
          as cleaning, gardening and handyman tasks; to office-based tasks, such
          as marketing, graphic design and web development tasks. There are also
          a bunch of interesting tasks as well, for example, wedding help, cake
          baking or costume making. A Poster will let you know if the task needs
          to be completed in person or online.
        </A>
        <Q>How do I get paid?</Q>
        <A>
          You can start working on the task knowing that your payment for the
          task has been secured with Handyman Pay from the Poster. When you
          complete the task and request payment, the Poster will be notified to
          release the task payment. This is then securely transferred to your
          nominated bank account.
        </A>
      </TextWrapper>
      <TextWrapper>
        <Q>Who will I be working with?</Q>
        <A>
          You’re your own boss, so it's totally up to you! When browsing tasks,
          you can look at the Poster’s profile and past reviews to see if you
          would like to help them.
        </A>
        <Q>How do I get assigned to a task?</Q>
        <A>
          Here's a few tips to dramatically increase your chances of getting
          assigned. When you make an offer, make sure you say why you'd be great
          for the task. Also, spruce up your profile by filling all the
          categories and getting as many badge verifications as you can -
          Poster's love full profiles!
        </A>
      </TextWrapper>
    </TextBox>
  </Container>
);

export default FAQ;
