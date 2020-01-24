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
  saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(this.state.taskList));
  };
  handleDel = item => {
    this.setState({
      taskList: this.state.taskList.filter(del => del !== item)
    });
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
        <ToDoList handleDel={this.handleDel} list={this.state.taskList} />
        <button onClick={this.saveTasks}>save</button>
      </div>
    );
  }

  componentDidMount() {
    const getTasks = localStorage.getItem("tasks");
    if (getTasks) {
      const parsedTasks = JSON.parse(getTasks);
      this.setState({ taskList: parsedTasks });
    }
  }
}

export default App;
