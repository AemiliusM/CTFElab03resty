// going to have just the text box - the response from the fetch
import React from "react";
import ReactJson from "react-json-view";

export default function FetchRes(response) {
    return (
        <div>
            <label for='text-box' name='text-box'>Response</label>
            <ReactJson src={response} id='text-box' name='text-box'>{response}</ReactJson>
        </div>
    )
}