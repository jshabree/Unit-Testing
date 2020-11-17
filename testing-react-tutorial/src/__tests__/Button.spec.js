import React, { useState } from "react";

// mounting component using "create"
// using "act" because we want to avoid using DOM. Wrap your components in act while creating them and passing them
import { create, act } from "react-test-renderer";

function Button(props) {
    const [text, setText] = useState("");
    function handleClick() {
        setText("PROCEED TO CHECKOUT");
    }

    return <button onClick = {handleClick}>{text || props.text}
    </button>
}


// describe("Button component", () => {
//     test('Matches the snapshot', () => {
//         const button = create(<Button />);
//         expect(button.toJSON()).toMatchSnapshot();
//     });
    
// });

// using react-test-renderer for asserting behavior on components
// changing text on the button when its clicked

describe("Button component", () => {
    test('it shows the expected text when clicked (testing the wrong way)', () => {
        let component;

        // we use act to specify any component changes in state

        act(() => {
            component = create(<Button text = "Subscribe to Basic" />);
        });

        const instance = component.root;

        // const instance = component.getInstance();
        // expect(instance.state.text).toBe("");

        // specifically checking handleClick function

        // instance.handleClick();
        // expect(instance.state.text).toBe("PROCEED TO CHECKOUT");

        const button = instance.findByType("button");

        act (() => button.props.onClick());
        expect(button.props.children).toBe("PROCEED TO CHECKOUT");
    });
    
});