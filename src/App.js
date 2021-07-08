import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();    // constructor of Component
    this.state = {
      robots: robots,
      searchField: "",
    };
  }

  // function
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div>
        <div className="text-center m-3">
          <h2>Welcome to ROBO CLUB!</h2>
        </div>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />{" "}
      </div>
    );
  }
}

export default App;
