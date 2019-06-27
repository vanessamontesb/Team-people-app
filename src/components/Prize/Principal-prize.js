import React from 'react';
import PrizeList from '../../pages/Prize/PrizeList';
import styled from 'styled-components';

const StyledAppContainer = styled.div`
    text-align: center;
`;



function Prize() {
  return (
      <StyledAppContainer>
        <PrizeList />
      </StyledAppContainer>
  );
}

export default Prize;
