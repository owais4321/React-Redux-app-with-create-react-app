import React, {Component} from 'react';
import ConnectedTodos from './Todos';
import ConnectedGoals from './Goals';
import {connect} from 'react-redux';
import {initialDataHandler} from '../actions/shared';
import '../App.css';
class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(initialDataHandler());
  }
  render() {
    return (
      <div>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    );
  }
}
export default connect((store)=>{})(App);
