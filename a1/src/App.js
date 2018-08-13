import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import './'
import UserInput from './UserInput/UserInput';


class App extends Component {
  state = {
    username: 'initial name'
  }

  changeStateOnEvent = event => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    const style = {
      backgroundColor: 'green'
    }

    return (
      <div className="App">
        <UserInput style={style} changed={this.changeStateOnEvent} name={this.state.username} />
        <UserOutput 
          name={this.state.username} />
        <UserOutput 
          name={this.state.username} />
      </div>
    );
  }
}

export default App;
