import React from 'react';
import StyledCard from './StyledCard';


export const BalanceCoinCard = ({balance}: {balance: number}): JSX.Element => {

  return(
    <StyledCard>
      <div className='card-header'>
        <p>Jobcoin Balance</p>
      </div>
      <div className='card-body'>
        <p className='title-text'>{balance}</p>
      </div>
    </StyledCard>
  )
};
