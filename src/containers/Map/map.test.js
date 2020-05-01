import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { HashRouter as Router } from 'react-router-dom';
import Map from './map.container';

describe('Map', () => {
  afterAll(cleanup);

  const { container } = render(
    <Router>
      <Map />
    </Router>
  );

  const { multimedia } = render(
    <Router>
      <Slider></Slider> 
    </Router>
  );



  test('Map container renders without crashing', () => {
    expect(container).toBeTruthy();
  });

  test('Multimedia container renders without crashing', () => {
    expect(multimedia).toBeTruthy();
  });
});
