import React from 'react';
import TextField from 'material-ui/TextField';

import properties from 'shared/configuration/properties';

import './landing.component.css';

const Answer = (props) => {
  return (
    <span>
      {props.value.toUpperCase()}
    </span>
  );
}

export class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: '', output: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const input = event.target.value.toString();

    this.setState({
      input: input
    });

    if (input) {
      const host = properties.constants.server.host;
      const port = properties.constants.server.port;

      fetch(
        `http://${host}:${port}/checkPalindrome/${input}`
      ).then(function(response) {
        return response.json();
      }).then(function(json) {
        this.setState({output: json.output});
        this.forceUpdate();
      }.bind(this)).catch((error) => {
        console.log(error);
      });
    }
  }

  render() {
    return <div>
      <h1>WoW Palindromes</h1>

      <form>
        <TextField
          id='input'
          value={this.state.input}
          onChange={this.handleChange}
          hintText='Check your palindrome here.'
        />

        <br/>

        <Answer value={this.state.output} />
      </form>
    </div>;
  }
};
