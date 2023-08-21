import * as React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import HomeBar from '../client/src/components/HomeBar.jsx';
import mochData from './mochData.js';

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

describe('Homebar', () => {
  it('renders all the jobs applied for', () => {
    const mochFn = jest.fn();
    render(
      <BrowserRouter>
        <HomeBar
          datas={mochData.datas}
          setData={mochFn}
          getAll={mochFn}
          setIndividualCardData={mochFn}
        />
      </BrowserRouter>
    );
    
    expect(screen.getAllByText(/App Tracker/)[0]).toBeInTheDocument();
  })
})