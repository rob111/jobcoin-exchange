import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {BalanceCoinCard} from './BalanceCoinCard';
import {SendCoinCard} from './SendCoinCard';
import {NavBar} from './NavBar';
import {HistoryGraphCard} from './HistoryGraphCard';
import {getBalance} from '../services/coinsService';
import {IAddress} from '../domain/IAddress';

const StyledDashboard = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  display: flex;

  .left {
    flex: 3;
  }

  .right {
    flex: 1;
  }
`;

export const Dashboard = ({address}: IAddress): JSX.Element => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    getBalance(address)
      .then(trans => {
        setBalance(parseFloat(trans.balance));
      })
      .catch(error => console.error(error))
  });

  return (
    <>
      <NavBar />
      <StyledDashboard>
          <div className='left'>
            <BalanceCoinCard balance={balance} />
            <SendCoinCard
              address={address}
              balance={balance}
              setBalance={setBalance} />
          </div>
          <div className='right'>
            <HistoryGraphCard />
          </div>
      </StyledDashboard>
    </>
  );
};
