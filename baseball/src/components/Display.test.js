import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';

import Display from './Display.js';
import Dashboard from './Dashboard.js';

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

it('should set balls and strikes to 0 when hit button clicked', () => {
    const { getByText, getByTestId } = render(<Display />);

    const balls = getByText(/Balls:/i);
        const strikes = getByText(/Strikes:/i);
        const hitBtn = getByTestId('hits-btn');

        fireEvent.click(hitBtn);

        expect(balls).toHaveTextContent(/0/i);
        expect(strikes).toHaveTextContent(/0/i);
});

it('should increase strikes by one and to zero if equals three', () => {
    const { getByText, getByTestId } = render(<Display />);

    const strikes = getByText(/Strikes:/i);
    const strikesBtn = getByTestId('strike-btn');

        fireEvent.click(strikesBtn);
        expect(strikes).toHaveTextContent(1);

        fireEvent.click(strikesBtn);
        expect(strikes).toHaveTextContent(2);

        fireEvent.click(strikesBtn);
        expect(strikes).toHaveTextContent(3);

        fireEvent.click(strikesBtn);
        expect(strikes).toHaveTextContent(0);
})