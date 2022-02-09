import React from 'react';
import StyledCard from './StyledCard';
import Chart from 'react-apexcharts';

export interface IGraphTransaction {
  balance: number;
  time: string;
}

export const HistoryGraphCard = ({transactions}: {transactions: IGraphTransaction[]}) => {
  
  return (
    <StyledCard style={{marginLeft: '40px'}}>
      <div className='card-header'><p>Jobcoin History Graph</p></div>
      <div className='card-body'>
        <div className="mixed-chart">
          <Chart 
            options={{chart: {id: 'basic-bar'}, xaxis: {categories: transactions.map(trans => trans.time)}}}
            series={[{name: 'balance', data: transactions.map(trans => trans.balance)}]}
            type='bar'
            width='100%' />
        </div>
      </div>
    </StyledCard>
  );
};
