import React from 'react';
import FilterButton from '../FilterButton';

const FilterSet = (props) => (
    <div>
        <FilterButton>{props.children}</FilterButton>
    </div>
);

export default FilterSet;