import React from "react";

function TodoItem(props) {
  return <li onClicked={() => props.onChecked(props.id)}>{props.text}</li>;
}

export default TodoItem;
