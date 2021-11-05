import React from "react";

export default function HistoryLog({ method, url }) {
    return (
        <article>
            <p>{method}</p>
            <span>{url}</span>
        </article>
    )
}