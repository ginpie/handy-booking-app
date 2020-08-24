import React from "react";
import TableHeader from "./TableHeader";
import TableContent from "./TableContent";
import Styles from "./Table.module.css";
import TableFooter from "./TableFooter";
const Table = () => (
  <div className={Styles.table}>
    <div className={Styles.container}>
      <TableHeader />
      <TableContent />
      <TableFooter />
    </div>
  </div>
);

export default Table;
