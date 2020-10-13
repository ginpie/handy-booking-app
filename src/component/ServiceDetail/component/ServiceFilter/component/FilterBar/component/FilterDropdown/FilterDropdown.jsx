import React from "react";
import FilterButton from "../FilterButton";
import Dropdown from "../../../../../../../Header/components/Public/components/Dropdown";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  margin-left: 30px;
`;

class FilterDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      content,
      children,
      active,
      clickMethod,
      title,
      clickTicket,
    } = this.props;
    const type = content === "" ? "calendar" : "link";

    return (
      <Wrapper>
        <FilterButton clickMethod={clickMethod} title={title}>
          {children}
        </FilterButton>
        {title === active && (
          <Dropdown content={content} type={type} clickTicket={clickTicket} />
        )}
      </Wrapper>
    );
  }
}

export default FilterDropdown;
