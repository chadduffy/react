import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/ValidationComponent';
import Char from './CharComponent/CharComponent';

class App extends Component {
  state = {
    len: 0,
    word: ''
  }

  changeHandler = (event) => {
    this.setState({
      len: event.target.value.length,
      word: event.target.value
    });
  }

  removeLetterHandler = (letterIndex) => {
    console.log("called removeLetterHandler");
    const letters = this.state.word.split('');
    letters.splice(letterIndex, 1);
    this.setState({
      word: letters.join(''),
      len: letters.length
    });
  }

  render() {
    const letters = (
      <div>
        {
          this.state.word.split('').map((letter, index) => {
            return <Char click={() => this.removeLetterHandler(index)} letter={letter} key={index} />
          })
        }
      </div>
    );

    return (
      <div className="App">
        <input type="text" onChange={this.changeHandler} value={this.state.word} />
        <p>length: {this.state.len}</p>
        <Validation len={this.state.len} />
        {letters}
      </div>
    );
  }
}

export default App;
