import React from "react";

function getStyle(props) {
  if (props.item.finished) {
    return { textDecoration: "line-through" };
  } else {
    return {};
  }
}
function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.finished}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={getStyle(props)}>{props.item.desc}</p>
    </div>
  );
}

export default TodoItem;
