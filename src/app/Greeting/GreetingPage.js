import React, { Component } from 'react';

import greetingService from './GreetingService';
import Greeting from "./Greeting";

export default class GreetingPage extends Component {

  state = {
    greeting: undefined
  };

  componentDidMount() {
    greetingService.getGreeting()
      .then(greeting => this.setState({greeting}))
  }

  render() {
    const {greeting} = this.state;

    if (greeting === undefined) {
      return null;
    }

    return (
      <div>
        <Greeting greeting={greeting}/>
      </div>
    );
  }
}