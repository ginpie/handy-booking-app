import React from "react";
import TableHeader from "./TableHeader";
import TableContent from "./TableContent";
import "./table.scss";
const Table = () => (
  <div className="table">
    <TableHeader />
    <TableContent />
  </div>
);

export default Table;
