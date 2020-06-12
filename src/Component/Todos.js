import React, { Component } from "react";
import List from "./List";
import {
  addTodoHandler,
  removeTodoHandler,
  toggleTodoHandler,
} from "../actions/todos";
import { connect } from "react-redux";
class Todos extends Component {
  addTodo = (e) => {
    e.preventDefault();
    this.props.dispatch(
      addTodoHandler(this.input.value, () => (this.input.value = ""))
    );
  };
  removeItem = (item) => {
    this.props.dispatch(removeTodoHandler(item));
  };
  toggleTodo = (id) => {
    this.props.dispatch(toggleTodoHandler(id));
  };

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <input
          type="text"
          placeholder="Add todo"
          ref={(input) => (this.input = input)}
        />
        <button
          onClick={(e) => {
            this.addTodo(e);
          }}
        >
          Add Todo
        </button>
        {!this.props.loading ? (
          <List
            items={this.props.todos}
            toggle={true}
            removeItem={this.removeItem}
            toggleTodo={this.toggleTodo}
          />
        ) : (
          <p>Loading</p>
        )}
      </div>
    );
  }
}
export default connect((state) => ({
  todos: state.todos,
  loading: state.loading,
}))(Todos);
