import React from "react";
import TableContentItemRow from "../TableContentItemRow";

// test后需创建 邮箱， 密码
const TableContent = () => (
  <div>
    <TableContentItemRow
      title="User Name"
      type="text"
      name="Username"
      value="Please input your User Name"
    ></TableContentItemRow>
  </div>
);

export default TableContent;
