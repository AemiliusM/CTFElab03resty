import React, { Component } from 'react';
import { render } from '@testing-library/react';
import HistoryLog from './HistoryLog';

describe('history test', () => {
    it('should render a single history', () => {
        const { asFragment } = render(
            <HistoryLog
                method='GET'
                url='https://jsonplaceholder.typicode.com/todos/1'
                />
        );
        expect(asFragment()).toMatchSnapshot();
    });
})