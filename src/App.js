import React from "react";

import "./App.css";
import Header from "./components/header";
import ToDoList from "./components/toDoList";
import AddTask from "./components/addTask";

class App extends React.Component {
  state = {
    owner: "Bob",
    taskList: []
  };

  addNewTask = newTask => {
    this.setState(currentState => {
      return { taskList: [...currentState.taskList, newTask] };
    });
  };
  render() {
    console.log(this.state.taskList);
    return (
      <div className="App">
        <Header owner={this.state.owner} />
        <AddTask addNewTask={this.addNewTask} />
        <ToDoList list={this.state.taskList} />
      </div>
    );
  }
}

export default App;
