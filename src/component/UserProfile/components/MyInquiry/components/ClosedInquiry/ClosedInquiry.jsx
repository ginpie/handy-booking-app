import React, { useState, useEffect, Fragment } from "react";
import BoxContainer from "../../../BoxContainer";
import styled from "styled-components";
import CustomEmptyContent from "../../../CustomEmptyContent";
import getInquiries from "../../../../../../apis/getInquiries";
import ShowInquiry from "../ShowInquiry";
import boxIcon from "../../../icons/box.png";

const Container = styled.div`
  width: 100%;
  overflow: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const ClosedInquiry = ({ userData }) => {
  const [tradieInquiries, setTradieInquiries] = useState([]);
  useEffect(() => {
    const fetchTradieInquiries = async () => {
      const data = await getInquiries(userData.email, "tradies");
      const newData = data.inquiries
        .filter((inquiry) => inquiry.accepted !== true)
        .map((inquiry) => ({ ...inquiry, tradie: true }));
      setTradieInquiries(newData);
    };
    fetchTradieInquiries();
  },[]);
  return (
    <BoxContainer title="Tradie Inquiries" needSearchBar>
      <Container>
        {tradieInquiries.length !== 0 ? (
          tradieInquiries.map((inquiry) => (
            <Fragment key={inquiry._id}>
              <ShowInquiry inquiry={inquiry} />
            </Fragment>
          ))
        ) : (
          <CustomEmptyContent>
            <CustomEmptyContent.Icon src={boxIcon} />
            <CustomEmptyContent.Title>Nothing Here</CustomEmptyContent.Title>
            <CustomEmptyContent.Text>
              Your don't have any closed inquiry
            </CustomEmptyContent.Text>
          </CustomEmptyContent>
        )}
      </Container>
    </BoxContainer>
  );
};

export default ClosedInquiry;
