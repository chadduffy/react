import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { id: 1, name: 'cd', age: 5 },
      { id: 2, name: 'foo', age: 97 },
      { id: 3, name: 'loo', age: 97 }
    ],
    otherStateStuff: 'other'
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => p.id === id);

    const person = {
      ...this.state.people[personIndex]
    };

    person.name = event.target.value;

    const people = [...this.state.people];
    people[personIndex] = person;

    this.setState({ people: people });
  }

  togglePeopleHandler = () => {
    this.setState({
      showPeople: !this.state.showPeople
    });
  }

  deletePersonHandler = (personIndex) => {
    //console.log("called deletePersonHandler");
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({people: people});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let people = null;

    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>yo react</h1>
        <button
          onClick={this.togglePeopleHandler}
          style={style}>switch me</button>
        {people}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, 'h1', 'hhey');
  }
}

export default App;
