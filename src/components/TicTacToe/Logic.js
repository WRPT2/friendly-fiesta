import React, { Component } from "react";

const LogicAndReset = (props) => {
    return (
        <div>
            <button onClick={ props.reset }><h2>RESET</h2></button>
        </div>

    )
}

export default LogicAndReset