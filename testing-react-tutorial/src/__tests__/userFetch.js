import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  
// testing below 

describe("User component", () => {
    test("it shows a list of users", () => {
      act(() => {
        render(<Users />, container);
      });
    });
  });
