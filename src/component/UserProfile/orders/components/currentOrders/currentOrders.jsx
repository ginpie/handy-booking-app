import React, { useState } from "react";
import BoxContainer from "../../../boxContainer/boxContainer";
import DisplayEmptyContent from "../../../dispalyEmptyContent/displayEmptyContent";
import boxIcon from "../../../icons/box.png";

const CurrentOrders = () => {
  const [currentOrder] = useState([]);

  // useEffect(()=>{
  //     const fakeFetchCurrentOrderData = async() => {
  //         setCurrentOrder([
  //             {
  //                 orderName: "Furniture Assembly",
  //                 orderNumber: "Fake1234",
  //                 traderName: "Long Ge",
  //                 orderStatus: "In Process",
  //             }
  //         ]);
  //     }
  //     fakeFetchCurrentOrderData()
  // },[])

  return (
    <BoxContainer title="Current orders" needSearchBar>
      {currentOrder.length !== 0 ? (
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

export default CurrentOrders;
