import React from 'react';
import styled from 'styled-components';
import StyledCard from './StyledCard';


const HistoryGraphCardWrapper = styled(StyledCard)`
  width: 100%;
  max-height: 100vh;
`;

export const HistoryGraphCard = () => {
  return (
    <HistoryGraphCardWrapper>
      <div className='card-header'><p>Jobcoin History Graph</p></div>
      <div className='card-body'></div>
    </HistoryGraphCardWrapper>
  );
};
