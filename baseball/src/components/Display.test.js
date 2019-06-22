import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';

import Display from './Display.js';

it('should render', () => {
    render(<Display />)
});

it('should display balls, strikes, outs, hits and inning', () => {
    const { getByText } = render(<Display />);

    const balls = getByText(/Balls:/i);
    const strikes = getByText(/Strikes:/i);
    const outs = getByText(/Outs:/i);
    const hits = getByText(/Hits:/i);
    const inning = getByText(/Inning:/i);

    expect(balls).toBeInTheDocument();
    expect(strikes).toBeInTheDocument();
    expect(outs).toBeInTheDocument();
    expect(hits).toBeInTheDocument();
    expect(inning).toBeInTheDocument();

});