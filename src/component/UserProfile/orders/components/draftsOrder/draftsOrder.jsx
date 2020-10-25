import React, { useState } from "react";
import BoxContainer from "../../../boxContainer/boxContainer";
import DisplayEmptyContent from "../../../dispalyEmptyContent/displayEmptyContent";
import boxIcon from "../../../icons/box.png";

const DraftOrders = () => {
  const [draftOrders] = useState([]);
  return (
    <BoxContainer title="Draft orders" needSearchBar>
      {draftOrders.length !== 0 ? (
        <div>content</div>
      ) : (
        <DisplayEmptyContent
          icon={boxIcon}
          title="Nothing Here"
          message="Your opened orders appears here when you create first order"
          buttonName="Place order"
        />
      )}
    </BoxContainer>
  );
};

export default DraftOrders;
