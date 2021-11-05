import React, { Component } from 'react';
import { render } from '@testing-library/react';
import ReactJson from 'react-json-view';
import FetchRes from './Response';

describe('displays response from fetch', () => {
    it('displays response from fetch', () => {
        const { asFragment } = render(
            <ReactJson
                response={{completed: false, id: 1, title: 'delectus aut aute…'}}
                />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});