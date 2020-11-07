import React from "react";
import FilterButton from "../FilterButton";
import Dropdown from "../../../../../../../Header/components/Public/components/FilterDropdown/FilterDropdown";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  margin: 10px 20px;
`;

class FilterDropdown extends React.Component {
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
