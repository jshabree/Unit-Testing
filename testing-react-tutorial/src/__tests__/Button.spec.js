import { func } from "prop-types";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

let container;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

function Button(props) {
    const [text, setText] = useState("");
    function handleClick() {
        setText("PROCEED TO CHECKOUT");
    }

    return <button onClick = {handleClick}>{text || props.text}
    </button>
}

// testing

describe("Button component", () => {
    test('it shows the expected text when clicked', () => {

        // mount the component with act

        act(() => {
            ReactDOM.render(<Button text = "SUBSCRIBE TO BASIC" />,container);
        })
        
    })
    
})