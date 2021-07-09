import React, { Component } from "react";
import CardList from "../components/CardList";
import { robots3 } from "../robots";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super(); // constructor of Component
    this.state = {
      // robots: robots,
      robots: [],
      searchField: "",
    };
  }

  // life cycle - mounting method
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: [...users,...robots3] });
      });
  }

  // function
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state; // destructuring

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (!robots.length) {
      return (
        <div>
          <h1>LOADING...</h1>
        </div>
      );
    } else {
      return (
        <div>
          <div className="text-center m-3">
            <h2> Welcome to ROBO CLUB! </h2>
          </div>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
