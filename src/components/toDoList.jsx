import React from "react";

class ToDoList extends React.Component {
  state = {
    checked: false
  };

  toggleChange = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    console.log(this.state.checked);
    return (
      <ul>
        {this.props.list.map(item => {
          return (
            <li key={item}>
              {" "}
              <input
                type="checkbox"
                onClick={this.toggleChange}
                // style={
                //   "textDecoration" && this.state.checked
                //     ? "line-through"
                //     : "none"
                // }
              />{" "}
              {item}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ToDoList;
