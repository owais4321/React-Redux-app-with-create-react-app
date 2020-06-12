import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/todos";
import {RECIEVE_DATA} from '../actions/shared';
export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);
    case REMOVE_TODO:
      return state.filter((s) => s.id !== action.id);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id !== action.id
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })
      );
    case RECIEVE_DATA:
      return action.todos;
    default:
      return state;
  }
}
