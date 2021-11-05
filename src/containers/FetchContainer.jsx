import React, { Component } from "react";
import Controls from "../components/fetches/Controls-Methods";
import HistoryList from "../components/fetches/HistoryList";
import FetchRes from "../components/fetches/Response";
import { fetchMethods } from "../services/fetchmethods";

export default class FetchContainer extends Component {
    state = {
        loading: false,
        method: '',
        url: '',
        jsonValue: '',
        history: [],
        response: [],
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        
        this.setState({
            [name]: value
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        this.setState({ loading: true})

        const { method, url, jsonValue, history } = this.state;
        let response;

        response = await fetchMethods(method, url, jsonValue);

        this.setState({
            loading: false, response,
            history: history.includes(url)
            ? history : [...history, { method: method, url: url }],
        });

    }

    render() {
        const {loading, url, method, jsonValue, history, response} = this.state;
        console.log('HISTORY', history)
        return (
            <>
            {loading ? (
                <h1>Loading Results</h1>
            ) : (
                <>
                <Controls
                url={url}
                method={method}
                jsonValue={jsonValue}
                onSubmit={this.handleSubmit}
                onInputChange={this.handleInputChange}
                />
                <HistoryList history={history} />
                <FetchRes response={response} />
                </>
            )}
            </>
        )
    }

}