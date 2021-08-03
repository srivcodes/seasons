import React from "react";

const spinner = (props) => {
    return (
        <div class="ui active dimmer">
        <div class="ui big text loader">{props.message}</div>
        </div>
    );
}

spinner.defaultProps = {
    message: "Loading...",
};

export default spinner