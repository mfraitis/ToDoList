import React from "react";
import Item from "./item";

class ToDoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.list.map(item => {
          return (
            <Item
              list={this.props.list}
              handleDel={this.props.handleDel}
              item={item}
            />
          );
        })}
      </ul>
    );
  }
}

export default ToDoList;
