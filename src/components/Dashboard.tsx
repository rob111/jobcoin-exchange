import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {BalanceCoinCard} from './BalanceCoinCard';
import {SendCoinCard} from './SendCoinCard';
import {NavBar} from './NavBar';
import {HistoryGraphCard} from './HistoryGraphCard';
import {getBalance} from '../services/coinsService';
import {IGraphTransaction} from './HistoryGraphCard';
import {IBalanceAndTransactions} from '../services/coinsService';

const StyledDashboard = styled.div`
  display: flex;
  margin: 40px 40px;

  .left {
    flex: 1;
    min-width: 300px;
  }

  .right {
    flex: 3;
  }
`;

export const Dashboard = ({address, setAddress}: {address: string, setAddress: Function}): JSX.Element => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState<IGraphTransaction[]>([]);

  const calcTransactions = (arg: IBalanceAndTransactions): IGraphTransaction[] => {
    let balance = parseFloat(arg.balance);
    let userBalances: IGraphTransaction[] = [];
    userBalances.push({balance, time: new Date().toISOString()});
    for (let i = arg.transactions.length - 1; i > 0; i--) {
        let item = arg.transactions[i];
        
        if (item.fromAddress === address) {
            balance += parseFloat(item.amount);
        } else {
            balance -= parseFloat(item.amount);
        }
    
        userBalances.push({
            balance,
            time: item.timestamp
        });
    }
    
    return userBalances.reverse();
  };

  useEffect(() => {
    getBalance(address)
      .then(trans => {
        setBalance(parseFloat(trans.balance));

        setTransactions(calcTransactions(trans));
      })
      .catch(error => console.error(error));

    }, [balance]);

  return (
    <>
      <NavBar address={address} setAddress={setAddress}/>
      <StyledDashboard>
          <div className='left'>
            <BalanceCoinCard balance={balance} />
            <SendCoinCard
              address={address}
              balance={balance}
              setBalance={setBalance} />
          </div>
          <div className='right'>
            <HistoryGraphCard transactions={transactions} />
          </div>
      </StyledDashboard>
    </>
  );
};
