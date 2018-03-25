import React, { Component } from 'react';

export default class Greeting extends Component {

  render() {
    const {greeting} = this.props;
    return (
      <div>
        <label>{greeting.greeting}</label>
      </div>
    );
  }
}