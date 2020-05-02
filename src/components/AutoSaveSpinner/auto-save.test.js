import React from 'react';
import { render, cleanup } from 'react-testing-library';
import AutoSaveSpinner from './index';

it('Auto-save render', () => {
  afterAll(cleanup);
  const { container } = render(<AutoSaveSpinner />);
  expect(container).toBeTruthy();
});
