import React from 'react';
import StyledCard from './StyledCard';


export const BalanceCoinCard = ({balance}: {balance: number}): JSX.Element => {

  return(
    <StyledCard>
      <div className='card-header'>
        <p>Jobcoin Balance</p>
      </div>
      <div className='card-body'>
        <p className='title-text' style={{color: 'var(--font-grey)', fontSize: '20px'}}>{balance}</p>
      </div>
    </StyledCard>
  )
};
