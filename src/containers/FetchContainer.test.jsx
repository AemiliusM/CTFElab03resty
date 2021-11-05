import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import React from "react";
import FetchContainer from "./FetchContainer";

describe('shows fetch tool and results', () => {
    it('should display fetch tool results', async () => {
        render(<FetchContainer/>);

        const urlInput = await screen.getByPlaceholderText('URL', {name: 'url'});
        userEvent.type(urlInput, 'https://jsonplaceholder.typicode.com/todos/1') 

        screen.getByText('GET');
        const methodSelect = await screen.findByLabelText('GET', {name: 'method', id: 'get'})
        userEvent.click(methodSelect);

        const sendButton = await screen.findByRole('button', {name: 'send-button'});
        userEvent.click(sendButton);

        return waitFor( () => {
            const ul = screen.getAllByText('GET', {exact: false});

            expect(ul).toMatchSnapshot();
        })
    })
});