import React, { useState, useEffect } from "react";
import BoxContainer from "../../../boxContainer/boxContainer";
import DisplayOrderItem from "../displayOrderItem/displayOrderItem";
import DisplayEmptyContent from "../../../dispalyEmptyContent/displayEmptyContent";
import boxIcon from "../../../icons/box.png";
import "./closedOrders.scss";

const ClosedOrders = () => {
  const [closedOrders, setClosedOrders] = useState([]);

  useEffect(() => {
    const fakeFetchClosedOrderData = async () => {
      setClosedOrders([
        {
          orderName: "Furniture Assembly",
          orderNumber: "Order1234",
          traderName: "Long Ge",
          otherInfo: "Lorem ipsum dolor sit",
          orderStatus: "Completed",
          orderPrice: "$200",
        },
      ]);
    };
    fakeFetchClosedOrderData();
  }, []);

  return (
    <BoxContainer title="Closed orders" needSearchBar>
      {closedOrders.length !== 0 ? (
        closedOrders.map((order) => (
          <div className="closedOrder" key={order.orderNumber}>
            <DisplayOrderItem order={order} />
          </div>
        ))
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

export default ClosedOrders;
