import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard.js';

it('should render', () => {
    render(<Dashboard />)
});

it('should display one button each saying Strike, Ball, Foul, Hit', () => {
    const { getByTestId } = render(<Dashboard />);

    const strikeBtn = getByTestId('strike-btn');
    const ballsBtn = getByTestId('ball-btn');
    const outsBtn = getByTestId('outs-btn');
    const hitBtn = getByTestId('hits-btn');
    const inningBtn = getByTestId('inning-btn');



    expect(strikeBtn).toHaveTextContent(/strike/i);
    expect(ballsBtn).toHaveTextContent(/ball/i);
    expect(outsBtn).toHaveTextContent(/outs/i);
    expect(hitBtn).toHaveTextContent(/hit/i);
    expect(inningBtn).toHaveTextContent(/inning/i);
});
