import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';

import {Login} from './Login';

let container: any = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container?.remove();
  container = null;
});

it("render Login page", () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {

    render(<Login setAddress={() => {}}/>, container);
  });
  expect(container.textContent).toBe('Welcome! Sign In With Your Jobcoin AddressJobcoin AddressSign In');
});