import React from "react";
//<input type="text" name="UserName" value="Please input your User Name"></input>
const TableContentItemRow = (props) => (
  <div className="signintable--content--item--row">
    <p>{props.title}</p>
    <input type={props.type} name={prop.name} value={props.value} />
  </div>
);

export default TableContentItemRow;
