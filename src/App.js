import React, { Component } from "react";
import Person from "./Person/person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      {
        id: "123",
        name: "Ronald",
        age: 42
      },
      {
        id: "234",
        name: "Serena",
        age: 33
      }
    ],
    showPersons: false
  };

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  toggleDisplayHandler = () => {
    let toShowPerson = this.state.showPersons;
    toShowPerson = !toShowPerson;
    this.setState({
      showPersons: toShowPerson
    });
  };

  deletePersonHandler = index => {
    const newPerson = [...this.state.persons];
    newPerson.splice(index, 1);
    this.setState({
      persons: newPerson
    });
  };

  render() {
    let personToDisplay = null;

    if (this.state.showPersons) {
      personToDisplay = (
        <div>
          {this.state.persons.map((p, index) => {
            return (
              <Person
                name={p.name}
                age={p.age}
                key={p.id}
                changed={event => {
                  this.changeNameHandler(event, p.id);
                }}
                click={() => {
                  this.deletePersonHandler(index);
                }}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello world</h1>
        <button onClick={this.toggleDisplayHandler}>Toggle name</button>
        {personToDisplay}
      </div>
    );
  }
}

export default App;
