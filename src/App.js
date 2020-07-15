import React, { Component } from "react";
import Person from "./Person/person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      {
        name: "Ronald",
        age: 42
      },
      {
        name: "Serena",
        age: 33
      }
    ]
  };

  switchNameHandler = (newName) => {
    this.setState(
      {
        persons:[
          {
            name: newName,
            age: 42
          },
          {
            name: "Serena Lin",
            age: 33
          }
        ]
      }
    );
  };

  changeNameHandler = (event) => {
    this.setState(
      {
        persons:[
          {
            name: event.target.value,
            age: 42
          },
          {
            name: "Serena Lin",
            age: 33
          }
        ]
      }
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
        <button onClick={ () => this.switchNameHandler('Wang Hao')}>Switch name</button>
        <Person
          change={this.changeNameHandler.bind(this)}
          click={this.switchNameHandler.bind(this, 'Ronald Garcia')}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          <ul>
            <li>Biking</li>
            <li>Swimming</li>
          </ul>
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
      </div>
    );
  }
}

export default App;
