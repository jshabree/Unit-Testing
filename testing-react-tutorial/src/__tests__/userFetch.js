import React, { Component } from "react";
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
export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        // make sure to check for errors
        return response.json();
      })
      .then(json => {
        this.setState(() => {
          return { data: json };
        });
      });
  }
  render() {
    return (
      <ul>
        {this.state.data.map(user => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
    );
  }
}

// testing here

describe("User component", () => {
    test("it shows a list of users", async() => {
        const fakeResponse = [{ name: "Juveria" }, { name: "Juveria S" }];

        jest.spyOn(window, "fetch").mockImplementation(() => {
            const fetchResponse = {
                json: () => Promise.resolve(fakeResponse)
            };

            return Promise.resolve(fetchResponse);
        });

        await act(async () => {
            render(<userFetch />, container);
      });

      expect(container.textContent).toBe("Juveria Ali S");

      window.fetch.mockRestore();
      
    });
  });