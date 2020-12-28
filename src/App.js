import React from "react";

import TodoItem from "./TodoItem";
import todosArr from "./todosData";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosArr,
      count: todosArr.length
    };
    this.handleChange = this.handleChange.bind(this);
    this.newTask = this.newTask.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const newTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return { id: todo.id, desc: todo.desc, finished: !todo.finished };
        }
        return { id: todo.id, desc: todo.desc, finished: todo.finished };
      });
      return {
        todos: newTodos
      };
    });
  }

  newTask() {
    let newTaskDesc = prompt("Enter New Task");
    if (!newTaskDesc) {
      return;
    }
    this.setState((prevState) => {
      return {
        todos: prevState.todos.concat([
          { id: prevState.count + 1, desc: newTaskDesc, finished: false }
        ]),
        count: prevState.count + 1
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map((item) => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return (
      <div className="todo-list">
        <h3 style={{ fontFamily: "Cursive" }}>Todo List:</h3>
        <button onClick={this.newTask}>Add New Task</button>
        {todoItems}
      </div>
    );
  }
}

export default App;
