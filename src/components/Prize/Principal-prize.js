import React from 'react';
import PrizeList from '../../pages/Prize/PrizeList';
import styled from 'styled-components';
import SearchPrize from './SearchPrize/SearchPrize'

const StyledAppContainer = styled.div`
    text-align: center;
`;



function Prize() {
  return (
      <StyledAppContainer>
        <SearchPrize/>
        <PrizeList />
      </StyledAppContainer>
  );
}

export default Prize;
