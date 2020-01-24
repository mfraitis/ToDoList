import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class Item extends React.Component {
  state = {
    checked: false
  };

  toggleChange = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    return (
      <li
        key={this.props.item}
        onClick={this.toggleChange}
        style={{
          textDecoration: this.state.checked ? "line-through" : "none"
        }}
      >
        {" "}
        {this.props.item}{" "}
        <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={() => this.props.handleDel(this.props.item)}
        />
      </li>
    );
  }
}

export default Item;
