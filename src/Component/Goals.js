import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./List";
import { addGoalHandler, removeGoalHandler } from "../actions/goals";
class Goals extends React.Component {
  addGoal = (e) => {
    e.preventDefault();
    this.props.dispatch(
      addGoalHandler(this.input.value, () => (this.input.value = ""))
    );
  };
  removeItem = (item) => {
    this.props.dispatch(removeGoalHandler(item));
  };
  render() {
    return (
      <div>
        <h1>Goals</h1>
        <input
          type="text"
          placeholder="Add todo"
          ref={(input) => (this.input = input)}
        />
        <button
          onClick={(e) => {
            this.addGoal(e);
          }}
        >
          Add Goals
        </button>
        {!this.props.loading ? (
          <List items={this.props.goals} removeItem={this.removeItem} />
        ) : (
          <p>Loading</p>
        )}
      </div>
    );
  }
}
export default connect((state) => ({
  goals: state.goals,
  loading: state.loading,
}))(Goals);
