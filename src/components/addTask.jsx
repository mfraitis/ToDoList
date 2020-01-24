import React from "react";

class AddTask extends React.Component {
  state = {
    newTask: ""
  };
  handleChange = event => {
    const { value } = event.target;
    this.setState({ newTask: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addNewTask(this.state.newTask);

    this.setState({ newTask: "" });
  };
  render() {
    console.log(this.state.newTask);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Add task:
          <input
            name="addTask"
            type="text"
            onChange={this.handleChange}
            value={this.state.newTask}
          ></input>
        </label>
        <button disabled={!this.state.newTask}>+</button>
      </form>
    );
  }
}

export default AddTask;
