import React from "react";
import styled from "styled-components";
import samplePhoto from "../../../../assets/sample_avatar.jpg";
import TradiesInfo from "./component/TradiesInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import RatingRender from "../../../RatingRender";

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Left = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Right = styled.div`
  width: 350px;
`;

const Avatar = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 110px;
  margin: 30px 0;
`;

const Rating = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin: 0 auto;
`;

const RatingText = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;

const AddressWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-top: 10px;
  margin: 0;
  text-align: left;
`;

const Address = styled.p`
  font-size: 0.8rem;
  margin: 0 0 0 20px;
  color: rgb(139, 137, 137);
  line-height: 1.4em;
`;

const person = {
  name: "Ian Yin",
  language: "English, Mandarin",
  skills: "xxx, xxx, xxxx",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis eget lectus dui. Neque duis id imperdiet amet. Pulvinar massa varius ipsum adipiscing tincidunt ultrices lectus libero. A arcu aliquet lorem non metus.",
  address: "South Yarra VIC",
  rating: 0,
  register_date: "12th Mar 2018",
};

const TradiesDetail = (props) => {
  return (
    <Layout>
      <Left>
        <Avatar src={samplePhoto} />
        <Rating>
          <RatingText>Rating:</RatingText>

          {RatingRender(person.rating, true)}
        </Rating>
        <AddressWrapper>
          <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" />
          <Address>
            {`${person.address},`} Australia
            <br />
            Member since
            <br />
            {props.data.createdAt && props.data.createdAt.substr(0, 10)}
          </Address>
        </AddressWrapper>
      </Left>
      <Right>
        <TradiesInfo data={props.data} />
      </Right>
    </Layout>
  );
};

export default TradiesDetail;
