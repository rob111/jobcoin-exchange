import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';
import {BalanceCoinCard} from './BalanceCoinCard';

let container: any = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('show current Jobcoin balance', () => {
  const balance = 123;
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    render(<BalanceCoinCard balance={123} />, container);
  });

  expect(container.textContent).toContain(`Jobcoin Balance${balance}`);
});