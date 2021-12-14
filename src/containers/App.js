import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import AddNewBox from "../components/AddNewBox";
import { v4 as uuid } from "uuid";
import "./css/App.css";
import robots from "../robots";

class App extends Component {
  constructor() {
    super(); // constructor of Component
    this.state = {
      robots: [],
      searchField: "",
      currTask: "",
    };
  }

  // life cycle - mounting method
  componentDidMount() {
    this.setState({ robots: robots });
  }

  // function
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  handleSubmit = (event) => {
    let value = this.state.currTask;
    if (value.length) {
      let newTask = {
        name: value,
        id: uuid(),
      };
      this.setState({
        robots: [...this.state.robots, newTask],
        currTask: "",
      });
    }
  };

  deleteTask = (id) => {
    let updatedRobots = this.state.robots.filter((robot) => {
      return robot.id !== id;
    });

    this.setState({
      robots: updatedRobots,
      currTask: "",
    });
  };

  editTask = (id) => {
    let edit = document.getElementById("edit-" + id);
    let save = document.getElementById("save-" + id);
    let name = document.getElementById("name-" + id);
    name.contentEditable = true;
    edit.hidden = true;
    save.hidden = false;
  };

  saveTask = (id) => {
    let edit = document.getElementById("edit-" + id);
    let save = document.getElementById("save-" + id);
    let name = document.getElementById("name-" + id);
    name.contentEditable = false;
    edit.hidden = false;
    save.hidden = true;

    let updatedRobots = this.state.robots.map((robot) => {
      if (robot.id === id) {
        return { id, name: name.innerText };
      } else {
        return robot;
      }
    });

    this.setState({
      robots: updatedRobots,
    });
  };

  handleChange = (event) => {
    this.setState({
      currTask: event.target.value,
    });
  };

  render() {
    const { robots, searchField } = this.state; // destructuring

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div>
        <div className="text-center m-3">
          <h2> Welcome to ROBO TO-DO LIST! </h2>
        </div>
        <SearchBox searchChange={this.onSearchChange} />
        <AddNewBox
          currentTask={this.state.currTask}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <Scroll>
          <CardList
            robots={filteredRobots}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
            saveTask={this.saveTask}
          />
        </Scroll>
      </div>
    );
  }
}

export default App;
