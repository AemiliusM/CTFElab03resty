// going to have a list that is updated with the last request made
// it will include the method and the url
import React from "react";
import HistoryLog from "./HistoryLog";

export default function HistoryList({ history }) {
    console.log('FETCHHISTORY', history)
    const historyList = history.map(({ method, url }) => (
        <li key={`${method}-${url}`}>
            <HistoryLog method={method} url={url}/>
        </li>
    ));
    return <ul aria-label='history-list'>{historyList}</ul>
}