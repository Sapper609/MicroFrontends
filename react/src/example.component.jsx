import React from "react";

export default class ExampleComponent extends React.Component {

  // The constructor for the component
  constructor(props) {
    super(props);
    this.state = {value: 'Option One'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('Test Alert: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Select an item:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Option One">Option One</option>
            <option value="Option Two">Option Two</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}