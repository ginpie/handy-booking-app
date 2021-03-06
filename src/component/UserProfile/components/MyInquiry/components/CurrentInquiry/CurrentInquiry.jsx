import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import BoxContainer from "../../../BoxContainer";
import CustomEmptyContent from "../../../CustomEmptyContent";
import ShowInquiry from "../ShowInquiry";
import getInquiries from "../../../../../../apis/getInquiries";
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

const CurrentInquiry = ({ userData }) => {
  const [clientInquiries, setClientInquiries] = useState([]);

  useEffect(() => {
    const fetchClientInquiries = async () => {
      const data = await getInquiries(userData.email, "customers");
      const newData = data.inquiries
        .filter((inquiry) => inquiry.deleted !== true)
        .filter((inquiry) => inquiry.accepted !== true)
        .map((inquiry) => ({ ...inquiry, customer: true }));
      setClientInquiries(newData);
    };
    fetchClientInquiries();
  },[userData.email]);

  return (
    <BoxContainer title="Client Inquiries" needSearchBar>
      <Container>
        {clientInquiries.length !== 0 ? (
          clientInquiries.map((inquiry) => (
            <Fragment key={inquiry._id}>
              <ShowInquiry inquiry={inquiry} />
            </Fragment>
          ))
        ) : (
          <CustomEmptyContent>
            <CustomEmptyContent.Icon src={boxIcon} />
            <CustomEmptyContent.Title>Nothing Here</CustomEmptyContent.Title>
            <CustomEmptyContent.Text>
              Your don't have any current inquiry
            </CustomEmptyContent.Text>
          </CustomEmptyContent>
        )}
      </Container>
    </BoxContainer>
  );
};

export default CurrentInquiry;
