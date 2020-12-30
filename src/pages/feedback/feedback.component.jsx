import React from 'react';

export default function Feedback(props) {
    // console.log("props", props)
    return (
        <div>{props.match.params.website.split("-").join(" ")}</div>
    )
}