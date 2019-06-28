import React from 'react';
import AchievementList from '../../pages/Achievement/AchievementList';
import styled from 'styled-components';

const StyledAppContainer = styled.div`
    text-align: center;
`;



function Achievement() {
  return (
      <StyledAppContainer>
        <AchievementList />
      </StyledAppContainer>
  );
}

export default Achievement;
