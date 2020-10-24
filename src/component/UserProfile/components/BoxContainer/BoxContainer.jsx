import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    width: 100%;
    height: 100%;
    border: 2px solid #c7c7c7;
    background-color: #f6f6f6;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Top = styled.div`
    border-bottom: 2px solid #c7c7c7;
    background-color: #e5e5e5;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const Title = styled.div`
    font-size: 18px;
    font-weight: 600;
    margin-left: 25px;
`;

const SearchBox = styled.div`
    margin-right: 25px;
`;


const BoxContainer = ({title, needSearchBar, searchQuery,setSearchQuery, children}) => {
    return ( 
        <Box>
            <Top>
                <Title>
                    {title && title}
                </Title>
                {needSearchBar &&
                    <SearchBox>
                        <input type="text" value={searchQuery || ''} onChange={(event)=>setSearchQuery(event.target.value)}/>
                    </SearchBox>
                }
            </Top>
            {children}
        </Box>
     );
}
 
export default BoxContainer;